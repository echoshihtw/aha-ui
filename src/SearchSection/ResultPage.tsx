import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../assets/customIcon';
import { User } from './interfaces/user.interface';
import ResultSkeleton from './ResultItemSkeleton';
import ResultItem from './ResultItem';

interface ResultPageProps {
  result: Array<User>;
  isLoading: boolean;
  sliderValue: number;
}

const ResultPage: FC<ResultPageProps> = ({
  result,
  isLoading,
  sliderValue,
}) => {
  const navigate = useNavigate();
  const skeleton = Array.from(new Array(sliderValue)).map((index) => (
    <ResultSkeleton key={index} />
  ));

  const results =
    result.length > 0 &&
    result.map((item) => <ResultItem key={item.id} item={item} />);

  const handleGoToLastPage = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className="w-full h-screen sm:h-full py-5 sm:py-[92px]">
      <div className="hidden sm:flex gap-[25px] pl-[87px]">
        <button className="text-h4" onClick={handleGoToLastPage} type="button">
          <LeftArrow />
        </button>
        <span className="text-h4 text-white capitalize font-normal">
          results
        </span>
      </div>
      <div className="px-5 sm:hidden text-h5 text-white capitalize">
        results
      </div>
      <div className="w-full p-5 sm:px-[130px]">
        {result.length === 0 && <div>no result</div>}
        <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(0,_219px))] gap-10 sm:gap-x-[34px] sm:gap-y-[31px] pt-[24px]">
          {isLoading ? skeleton : results}
        </div>
      </div>
    </div>
  );
};

export default memo(ResultPage);
