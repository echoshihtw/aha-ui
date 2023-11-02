import React, { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ResultItem from './ResultItem';
import ResultSkeleton from './ResultItemSkeleton';
import { User } from './interfaces/user';

interface ResultContainerProps {
  result: Array<User>;
  isLoading: boolean;
  error: null | string;
  handleFetchData: () => void;
}

const ResultContainer = ({
  result,
  isLoading,
  error,
  handleFetchData,
}: ResultContainerProps) => {
  const firstEnterLoadingEffect: boolean = isLoading && result.length === 0;
  const hasResult: boolean = result.length > 0;

  const firstSixResults =
    hasResult &&
    result.slice(0, 6).map((item) => <ResultItem key={item.id} item={item} />);

  const remainedResults =
    hasResult &&
    result.slice(6).map((item) => <ResultItem key={item.id} item={item} />);

  const skeleton = Array.from(new Array(3)).map((v, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ResultSkeleton key={`${index}-${v}`} />
  ));

  return (
    <div className="sm:h-[672px] mt-[24px] overflow-y-scroll">
      <InfiniteScroll
        next={handleFetchData}
        hasMore={!error}
        loader={
          isLoading && (
            <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(0,_219px))] gap-10 sm:gap-x-[34px] sm:gap-y-[31px] pt-[34px]">
              {skeleton}
            </div>
          )
        }
        dataLength={result.length}
        height={670}
        endMessage={<p className="text-white font-bold pt-[34px]">{error}</p>}
      >
        {firstEnterLoadingEffect && (
          <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(0,_219px))] gap-10 sm:gap-x-[34px] sm:gap-y-[31px] pt-[34px]">
            {skeleton}
          </div>
        )}
        {hasResult && (
          <>
            <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(0,_219px))] gap-10 sm:gap-x-[34px] sm:gap-y-[31px]">
              {firstSixResults}
            </div>
            <div
              id="resultContainer"
              className="grid sm:grid-cols-[repeat(auto-fill,_minmax(0,_219px))] gap-10 sm:gap-x-[34px] sm:gap-y-[31px] pt-[50px]"
            >
              {remainedResults}
            </div>
          </>
        )}
      </InfiniteScroll>
    </div>
  );
};
export default memo(ResultContainer);
