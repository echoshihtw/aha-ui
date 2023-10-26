import React, { memo, useEffect, useState } from 'react';
import ProfileItem from './ProfileItem';
import { GET } from '../utils/request';
import { Profile } from './interfaces/profile.interface';

const FOLLOWERS = 0;
const FOLLOWING = 1;
const profileIndex: Array<{ title: string; index: number }> = [
  {
    title: 'Followers',
    index: FOLLOWERS,
  },
  {
    title: 'Following',
    index: FOLLOWING,
  },
];

const Friends = () => {
  const [selected, setSelected] = useState<number>(FOLLOWERS);
  const [list, setList] = useState<Array<Profile>>([]);

  useEffect(() => {
    let url;
    if (selected === FOLLOWERS)
      url =
        'https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10';
    if (selected === FOLLOWING)
      url =
        'https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10';
    if (url === undefined) return;
    GET(url).then((res) => setList(res.data));
  }, [selected, setList]);

  return (
    <div className="hidden lg:block bg-background-light w-[375px] h-screen pt-8 overflow-y-scroll">
      <div className="tabs">
        {profileIndex.map((item) => (
          <button
            type="button"
            key={item.index}
            onClick={() => setSelected(item.index)}
            className={`w-1/2 font-bold hover:cursor-pointer text-subtitle text-grey-500 pb-[8px] ${
              selected === item.index &&
              'text-white border-solid border-b-2 border-white'
            }`}
          >
            <span className="">{item.title}</span>
          </button>
        ))}
      </div>
      <div className="flex gap-4 flex-col px-4 py-8">
        {list.map((user: Profile) => (
          <ProfileItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default memo(Friends);
