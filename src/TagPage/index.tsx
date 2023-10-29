/* eslint-disable @typescript-eslint/indent */
import React, { memo, useEffect, useState } from 'react';
import { GET } from '../utils/request';
import TagSkeleton from './TagSkeleton';
import { TagProps } from './interfaces/tags.interface';
import Tag from './Tag';

const TagPage = () => {
  const [tags, setTags] = useState<Array<TagProps>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    GET('https://avl-frontend-exam.herokuapp.com/api/tags').then((res) => {
      setTags(res);
      setIsLoading(false);
    });
  }, [setTags]);
  return (
    <div className="w-full h-full sm:pt-[80px] bg-background-main">
      <div className="px-5 pt-5 sm:pt-0 sm:px-[257px] text-h5 sm:text-h4 text-white">
        Tags
      </div>
      <div className="w-full grid items-center">
        <div className="px-[25px] sm:px-[257px] w-fit grid items-center grid-cols-[repeat(2,_150px)] sm:grid-cols-[repeat(5,_150px)] gap-[24px] sm:gap-y-[36px] py-[24px] overflow-y-scroll">
          {isLoading
            ? Array.from(new Array(20)).map((index) => (
                <TagSkeleton key={index} />
              ))
            : tags?.map((tag) => (
                <Tag key={tag.id} name={tag.name} count={tag.count} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TagPage);
