import React, { FC, memo } from 'react';
import { Profile } from './interfaces/profile.interface';

interface ProfileItemProps {
  user: Profile;
}

const ProfileItem: FC<ProfileItemProps> = ({ user }) => {
  const { username, name, avater, isFollowing } = user;
  const buttonClassName: string = `flex justify-center items-center py-2 px-2.5 capitalize rounded-full border border-white font-semibold ${
    isFollowing ? 'bg-white text-dark' : 'border-white text-white'
  }`;
  const buttonText: string = isFollowing ? 'following' : 'follow';
  const displayUserName: string = `@${username}`;
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-[15px] items-center">
        <div className="avatar">
          <div className="w-10 h-10 rounded-[5px] border border-white">
            <img src={avater} alt={username} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white text-body1 font-normal w-full whitespace-nowrap">
            <p className="text-ellipsis overflow-hidden">{name}</p>
          </div>
          <span className="text-grey-500 text-body2 font-normal lowercase text-ellipsis overflow-hidden">
            {displayUserName}
          </span>
        </div>
      </div>
      <button type="button" className={buttonClassName}>
        <span className="text-[12px] leading-[12px] h-[13px]">
          {buttonText}
        </span>
      </button>
    </div>
  );
};

export default memo(ProfileItem);
