import React, { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../assets/customIcon';
import ScrollContainer from './ScrollContainer';
import Routes from '../Routes';
import { User } from './interfaces/user';

interface ResultPageProps {
  result: Array<User>;
  isLoading: boolean;
  onLoadNextPage: () => void;
  error: null | string;
  handleFetchData: () => void;
}

const ResultPage: FC<ResultPageProps> = ({
  result,
  isLoading,
  onLoadNextPage,
  error,
  handleFetchData,
}) => {
  const navigate = useNavigate();

  const handleGoToLastPage = useCallback((): void => {
    navigate(Routes.home);
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
      <div className="w-full px-5 sm:px-[130px] sm:pt-0 sm:pb-10">
        <ScrollContainer
          result={result}
          isLoading={isLoading}
          error={error}
          handleFetchData={handleFetchData}
        />
      </div>
      <button
        onClick={onLoadNextPage}
        type="button"
        disabled={Boolean(error)}
        className="flex items-center justify-center font-bold bg-white h-10 uppercase rounded text-body2 border-none w-full sm:w-[343px] px-4 py-[13px] mt-20 sm:mt-0 sm:ml-[130px] disabled:cursor-not-allowed"
      >
        more
      </button>
    </div>
  );
};

export default memo(ResultPage);
