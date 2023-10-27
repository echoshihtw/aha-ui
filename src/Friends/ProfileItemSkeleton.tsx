import React, { memo } from 'react';
import { Avatar, Skeleton } from '@mui/material';

const ProfileItemSkeleton = () => (
  <div className="w-full flex justify-between items-center">
    <div className="flex gap-[15px] items-center">
      <div className="avatar">
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }}
        >
          <Avatar />
        </Skeleton>
      </div>
      <div className="flex flex-col">
        <Skeleton
          animation="wave"
          height={24}
          width={275}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.03)' }}
        />
        <Skeleton
          animation="wave"
          height={24}
          sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)' }}
        />
      </div>
    </div>
  </div>
);

export default memo(ProfileItemSkeleton);
