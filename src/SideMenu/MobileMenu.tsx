import React, { memo } from 'react';
import SideMenuItem from './SideMenuItem';
import { pages } from './index';

const MobileMenu = () => (
  <nav className="h-[66px] sm:hidden grid place-items-center bg-background-light">
    <div className="flex gap-[50px]">
      {pages.map((page, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SideMenuItem key={`${index}-${page.pageTitle}`} page={page} />
      ))}
    </div>
  </nav>
);

export default memo(MobileMenu);
