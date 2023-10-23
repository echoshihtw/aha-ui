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
  const handleChange = useCallback(
    (_event: Event, newValue: number | number[]) => {
      onSetSliderValue(newValue as number);
    },
    [onSetSliderValue],
  );

  return (
    <div className="w-fill sm:w-[720px]">
      <OrangeSlider defaultValue={value} step={3} onChange={handleChange} />
      <div className="flex text-body1 font-semiboild text-white text-opacity-50">
        <span className="mr-[124px]">3</span>
        <span className="mr-[124px]">6</span>
        <span className="mr-[124px]">9</span>
        <span className="mr-[115px]">12</span>
        <span className="mr-[156px]">15</span>
        <span>50</span>
      </div>
    </div>
  );
};

export default memo(Slide);
