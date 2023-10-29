import React, { FC, memo } from 'react';
import { User } from './interfaces/user.interface';

interface ResultItemProps {
  item: User;
}
const ResultItem: FC<ResultItemProps> = ({ item }) => {
  const { avater, name, username } = item;
  return (
    <div>
      <img
        src={avater}
        alt={name}
        className="w-full sm:w-[219px] h-[222.671px] sm:h-[146px] border border-white"
      />
      <div className="flex flex-col pt-[20.33px] sm:pt-3">
        <span className="text-white text-[14.9px] leading-[22.35px] tracking-[0.14px]">
          {name}
        </span>
        <span className="text-[11.175px] leading-[16.762px] text-grey-400">
          by {username}
        </span>
      </div>
    </div>
  );
};

export default memo(ResultItem);
