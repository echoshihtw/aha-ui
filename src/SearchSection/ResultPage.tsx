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
  onLoadNextPage: () => void;
}

const ResultPage: FC<ResultPageProps> = ({
  result,
  isLoading,
  sliderValue,
  onLoadNextPage,
}) => {
  const navigate = useNavigate();
  const fixedSliderValue = sliderValue === 75.2 && 30;
  const skeleton = Array.from(new Array(fixedSliderValue || sliderValue)).map(
    (index) => <ResultSkeleton key={index} />,
  );
  const firstSixResults =
    result.length > 0 &&
    result.slice(0, 6).map((item) => <ResultItem key={item.id} item={item} />);
  const resultSliceSix =
    result.length > 0 &&
    result.slice(6).map((item) => <ResultItem key={item.id} item={item} />);

  const handleGoToLastPage = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const hasResult = result.length !== 0;

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
      <div className="w-full p-5 sm:px-[130px] sm:pt-0 sm:pb-10">
        {!hasResult && <div>no result</div>}
        <div className="sm:h-[672px] mt-[24px] overflow-y-scroll">
          <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(0,_219px))] gap-10 sm:gap-x-[34px] sm:gap-y-[31px]">
            {isLoading ? skeleton : firstSixResults}
          </div>
          <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(0,_219px))] gap-10 sm:gap-x-[34px] sm:gap-y-[31px] pt-[50px]">
            {!isLoading && resultSliceSix}
          </div>
        </div>
      </div>
      <button
        onClick={onLoadNextPage}
        type="button"
        className="flex items-center justify-center font-bold bg-white h-10 uppercase rounded text-body2 border-none w-full sm:w-[343px] px-4 py-[13px] mt-20 sm:mt-0 sm:ml-[130px]"
      >
        more
      </button>
    </div>
  );
};

export default memo(ResultPage);
