import React, { memo } from 'react';
import { Skeleton } from '@mui/material';

const TagSkeleton = () => (
  <div>
    <Skeleton
      variant="rectangular"
      animation="wave"
      height={150}
      width={150}
      sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px' }}
    />
    <div className="flex flex-col pt-[10px]">
      <Skeleton
        animation="wave"
        height={24}
        width={150}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)' }}
      />
      <Skeleton
        animation="wave"
        height={24}
        width={50}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)' }}
      />
    </div>
  </div>
);

export default memo(TagSkeleton);
