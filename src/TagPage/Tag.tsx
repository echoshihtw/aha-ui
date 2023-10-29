import React, { FC, memo } from 'react';
import { Square } from '../assets/customIcon';
import { TagProps } from './interfaces/tags.interface';

const Tag: FC<TagProps> = ({ name, count }) => {
  const description = `${count} results`;
  return (
    <div className="w-[150px]">
      <div className="h-[150px] relative">
        <Square />
        <div className="border-4 border-white absolute bottom-[14px] left-[10px] right-[10px] rounded-lg whitespace-nowrap text-ellipsis overflow-hidden text-h5 text-white px-[14px] py-[7px] font-bold">
          {name}
        </div>
      </div>
      <div className="flex flex-col pt-[10px]">
        <span className="text-white whitespace-nowrap text-ellipsis overflow-hidden text-[14.9px] leading-[22.35px]">
          {name}
        </span>
        <span className="text-[11.175px] leading-[16.762px] text-gray-400">
          {description}
        </span>
      </div>
    </div>
  );
};

export default memo(Tag);
