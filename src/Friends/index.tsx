import React, { memo, useCallback, useEffect, useState } from 'react';
import ProfileItem from './ProfileItem';
import { GET } from '../utils/request';
import { Profile } from './interfaces/profile.interface';
import ProfileItemSkeleton from './ProfileItemSkeleton';

const FOLLOWERS = 0;
const FOLLOWING = 1;
const friendsTabs: Array<{ title: string; index: number }> = [
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    let url;
    if (selected === FOLLOWERS)
      url =
        'https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10';
    if (selected === FOLLOWING)
      url =
        'https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10';
    if (url === undefined) return;
    GET(url).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }, [selected, setList]);

  const handleSwitchTab = useCallback((index: number): void => {
    setIsLoading(true);
    setSelected(index);
  }, []);

  return (
    <div className="hidden lg:block bg-background-light w-[375px] h-screen pt-8 overflow-y-scroll">
      <div className="tabs">
        {friendsTabs.map((item) => {
          const { title, index } = item;
          const tabClassName = `w-1/2 font-bold hover:cursor-pointer text-subtitle text-grey-500 pb-[8px] ${
            selected === index &&
            'text-white border-solid border-b-2 border-white'
          }`;
          return (
            <button
              type="button"
              key={index}
              id={index.toString()}
              onClick={() => handleSwitchTab(index)}
              className={tabClassName}
            >
              <span className="">{title}</span>
            </button>
          );
        })}
      </div>
      <div className="flex gap-4 flex-col px-4 py-8 min-h-[500px]">
        {isLoading ? (
          <>
            {Array.from(Array(5).keys()).map((index) => (
              <ProfileItemSkeleton key={index} />
            ))}
          </>
        ) : (
          <>
            {list.map((user: Profile) => (
              <ProfileItem user={user} key={user.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Friends);
