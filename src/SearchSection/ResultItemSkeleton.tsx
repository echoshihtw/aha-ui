import React, { memo } from 'react';
import { Skeleton } from '@mui/material';

const ResultItemSkeleton = () => (
  <div>
    <Skeleton
      variant="rectangular"
      width={219}
      height={146}
      sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)' }}
    />
    <div className="flex flex-col pt-[20.33px] sm:pt-3">
      <span className="text-white text-[14.9px] leading-[22.35px] tracking-[0.14px]">
        <Skeleton
          animation="wave"
          height={22}
          width={200}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)' }}
        />
      </span>
      <span className="text-[11.175px] leading-[16.762px] text-grey-400">
        <Skeleton
          animation="wave"
          height={16}
          width={150}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)' }}
        />
      </span>
    </div>
  </div>
);

export default memo(ResultItemSkeleton);
