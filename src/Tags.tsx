import React, { memo, useEffect, useState } from 'react';
import { GET } from './utils/request';
import { Square } from './assets/customIcon';

interface TagProps {
  count: number;
  id: string;
  name: string;
}

const Tags = () => {
  const [tags, setTags] = useState<Array<TagProps>>([]);
  useEffect(() => {
    GET('https://avl-frontend-exam.herokuapp.com/api/tags').then((res) => {
      setTags(res);
    });
  }, [setTags]);
  return (
    <div className="w-full h-full  pt-[80px]">
      <div className="px-[257px] text-h4 text-white">Tags</div>
      <div className="w-full grid items-center">
        <div className="mx-auto px-[257px] w-fit grid items-center grid-cols-[repeat(5,_150px)] gap-x-[24px] gap-y-[36px] pt-[24px]">
          {tags?.map((tag) => {
            const { id, name, count } = tag;
            return (
              <div key={id} className="w-[150px]">
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
                    {count} results
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Tags);
