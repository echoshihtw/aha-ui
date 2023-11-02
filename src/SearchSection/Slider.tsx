import React, { FC, memo, useCallback } from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';

const OrangeSlider = styled(Slider)({
  height: 8,
  '&.MuiSlider-root': {
    padding: '6px 0',
  },
  '& .MuiSlider-rail': {
    border: 'none',
    background: 'white',
    opacity: 0.3,
    height: '8px',
  },
  '& .MuiSlider-track': {
    border: 'none',
    background: 'linear-gradient(to right, #FF5C01, #FFD25F)',
    height: '8px',
  },
  '& .MuiSlider-thumb': {
    height: '26px',
    width: '26px',
    backgroundColor: 'black',
    border: '6px solid #FFD25F',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
});

interface SliderProps {
  value: number;
  onSetSliderValue: React.Dispatch<React.SetStateAction<number>>;
}

const Slide: FC<SliderProps> = ({ value, onSetSliderValue }) => {
  // visually decided each mark is 18.8%
  const step: number = 18.8;
  const handleChange = useCallback(
    (_event: Event, scrollbarPercentage: number | number[]): void => {
      switch (scrollbarPercentage) {
        case 0:
          onSetSliderValue(6 as number);
          break;
        case step:
          onSetSliderValue(12 as number);
          break;
        case step * 2:
          onSetSliderValue(18 as number);
          break;
        case 56.4: // step * 3
          onSetSliderValue(24 as number);
          break;
        case step * 4:
          onSetSliderValue(30 as number);
          break;
        case 100:
          onSetSliderValue(100 as number);
          break;
        default:
          break;
      }
    },
    [onSetSliderValue],
  );

  return (
    <div className="w-fill sm:w-[725px]">
      <OrangeSlider
        defaultValue={value}
        min={0}
        step={18.8}
        onChange={handleChange}
      />
      <div className="flex w-full justify-between">
        <div className="flex w-[237px] sm:w-[541px] text-body1 font-semiboild text-white text-opacity-50">
          <span className="mr-[49px] sm:mr-[124px]">3</span>
          <span className="mr-[49px] sm:mr-[124px]">6</span>
          <span className="mr-[49px] sm:mr-[124px]">9</span>
          <span className="mr-[40px] sm:mr-[115px]">12</span>
          <span>15</span>
        </div>
        <span className="text-body1 font-semiboild text-white text-opacity-50">
          50
        </span>
      </div>
    </div>
  );
};

export default memo(Slide);
