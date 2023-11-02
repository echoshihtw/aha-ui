import React, { ChangeEvent, FC, memo, useMemo } from 'react';
import Slider from './Slider';
import Divider from './Divider';
import MobileMenu from '../SideMenu/MobileMenu';

interface SearchPageProps {
  keyword: string;
  sliderValue: number;
  onEnterInput: (e: ChangeEvent) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
  onSetSliderValue: React.Dispatch<React.SetStateAction<number>>;
  onSearchButtonClick: () => void;
}

const SearchPage: FC<SearchPageProps> = ({
  keyword,
  onEnterInput,
  onKeyDown,
  sliderValue,
  onSetSliderValue,
  onSearchButtonClick,
}) => {
  const adjustedValueForSlider: number = useMemo(() => {
    // visually decided each mark is 18.8%
    if (sliderValue === 75.2) {
      return 30;
    }
    return sliderValue;
  }, [sliderValue]);

  return (
    <div className="w-full flex flex-col justify-between">
      <div className="flex h-full flex-col justify-between px-[20px] pb-[28px] sm:pt-[54px] sm:pb-[87px] sm:px-[130px]">
        <div className="sm:w-[725px] flex flex-col sm:gap-[20px]">
          <span className="text-white text-h5 font-normal capitalize mb-[16px] sm:mb-0">
            search
          </span>
          <input
            name="search"
            value={keyword}
            type="text"
            placeholder="Keyword"
            className="mb-[28px] sm:mb-0 h-[60px] input border-solid border-[3px] focus:border-tutor-main border-white border-opacity-50 text-body2 px-4 w-full rounded-[6px] bg-transparent placeholder:text-white placeholder:opacity-30 placeholder:tracking-[0.25px] text-white leading-[21px]"
            onChange={onEnterInput}
            onKeyDown={onKeyDown}
          />
          <div className="hidden sm:block">
            <Divider />
          </div>
          <span className="text-white text-h5 font-normal capitalize mb-[16px] sm:mb-0">
            # of results per page
          </span>
          <div className="flex gap-[10px] items-end mb-[20px] sm:mb-0">
            <span className="leading-[50px] text-h3 font-bold text-white tracking-normal">
              {adjustedValueForSlider}
            </span>
            <div className="text-white text-subtitle tracking-[0.15px] mb-1">
              results
            </div>
          </div>
          <Slider value={sliderValue} onSetSliderValue={onSetSliderValue} />
          <div className="hidden sm:block">
            <Divider />
          </div>
          <button
            type="button"
            className="hidden sm:flex absolute bottom-[87px] items-center justify-center font-bold bg-white h-10 uppercase rounded text-body2 border-none sm:w-[343px] px-4 py-[13px]"
            onClick={onSearchButtonClick}
          >
            search
          </button>
        </div>
        <div className="sm:hidden">
          <Divider />
          <button
            type="button"
            className="flex items-center justify-center font-bold bg-white h-10 uppercase rounded text-body2 border-none w-full sm:w-[343px] px-4 py-[13px] mt-20 sm:mt-0"
            onClick={onSearchButtonClick}
          >
            search
          </button>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};

export default memo(SearchPage);
