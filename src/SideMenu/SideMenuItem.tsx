'use client';

import React, { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Page } from './interfaces/page.interface';

interface SideMenuItemProps {
  page: Page;
}

const SideMenuItem: FC<SideMenuItemProps> = ({ page }) => {
  const location = useLocation();

  const { pageTitle, icon, route } = page;
  return (
    <a
      className="btn btn-ghost text-[12px] font-normal leading-[18px] flex items-center justify-center my-[7px] hover:cursor-pointer hover:text-white"
      href={route}
    >
      <div className="h-full flex flex-col items-center justify-center">
        <div
          className={`${
            location?.pathname === route ? 'text-white' : 'text-grey-600'
          } `}
        >
          {icon}
        </div>
        <span
          className={`${
            location?.pathname === route ? 'text-white' : 'text-grey-600'
          } capitalize hidden sm:block`}
        >
          {pageTitle}
        </span>
      </div>
    </a>
  );
};

export default memo(SideMenuItem);
