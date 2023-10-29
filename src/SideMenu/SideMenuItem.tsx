'use client';

import React, { FC, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Page } from './interfaces/page.interface';
import { Ellipse } from '../assets/customIcon';

interface SideMenuItemProps {
  page: Page;
}

const SideMenuItem: FC<SideMenuItemProps> = ({ page }) => {
  const location = useLocation();

  const { pageTitle, icon, route, notification } = page;
  const isUserHere: boolean = location?.pathname === route;
  const iconClassName: string = isUserHere ? 'text-white' : 'text-grey-600';
  const showNotification: boolean = !isUserHere && notification;
  if (!page) {
    return null;
  }
  return (
    <a
      className="sm:btn sm:btn-ghost text-[12px] font-normal leading-[18px] flex items-center justify-center hover:cursor-pointer hover:text-white h-[56px]"
      href={route}
    >
      <div className="flex flex-col items-center justify-center pl-[1px]">
        <div className="relative">
          {showNotification && (
            <span className="text-primary-light absolute top-[-4.5px] right-[-3px]">
              <Ellipse />
            </span>
          )}
          <div className={iconClassName}>{icon}</div>
        </div>
        {isUserHere && (
          <span className="text-white capitalize hidden font-normal text-caption sm:block">
            {pageTitle}
          </span>
        )}
      </div>
    </a>
  );
};

export default memo(SideMenuItem);
