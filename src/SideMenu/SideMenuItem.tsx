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
      className="sm:btn sm:btn-ghost text-[12px] font-normal leading-[18px] flex items-center justify-center sm:my-[7px] hover:cursor-pointer hover:text-white"
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
        {location?.pathname === route && (
          <span className="text-white capitalize hidden font-normal text-caption sm:block">
            {pageTitle}
          </span>
        )}
      </div>
    </a>
  );
};

export default memo(SideMenuItem);
