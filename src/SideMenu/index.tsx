import React, { memo, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SideMenuItem from './SideMenuItem';
import { LeftArrow, MenuItemIcon } from '../assets/customIcon';
import { Page } from './interfaces/page.interface';

export const pages: Array<Page> = [
  { pageTitle: 'Home', icon: <MenuItemIcon />, route: '/' },
  { pageTitle: 'Tags', icon: <MenuItemIcon />, route: '/tags' },
];

const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = useMemo(
    () => location.pathname === '/' && location.search === '',
    [location],
  );
  return (
    <>
      <nav className="xs:hidden sm:block">
        <section className="h-screen w-fulll w-[80px] bg-background-light flex flex-col gap-2 ">
          <div className="w-[80px] h-[88px] grid place-items-center">
            <div className="bg-clip-text text-transparent bg-gradient-to-l from-[#FFD25F] to-[#FF5C01] font-bold text-[13px] tracking-[-0.65px]">
              LOGO
            </div>
          </div>
          {pages.map((page, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SideMenuItem key={`${index}-${page.pageTitle}`} page={page} />
          ))}
        </section>
      </nav>
      <div className="sm:hidden">
        <section className="h-[70px] w-full">
          {isHomePage && (
            <div className="w-[80px] h-[88px] pt-[29px] pl-[21px]">
              <div className="bg-clip-text text-transparent bg-gradient-to-l from-[#FFD25F] to-[#FF5C01] font-bold text-[13px] h-[15px] tracking-[-0.65px] flex items-center">
                LOGO
              </div>
            </div>
          )}
          {!isHomePage && (
            <div className="flex gap-[13.16px] pl-[19px] pt-[17px]">
              <button
                className="text-h4"
                onClick={() => navigate('/')}
                type="button"
              >
                <LeftArrow />
              </button>
              <span className="text-h4 text-white capitalize font-normal">
                home page
              </span>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default memo(SideMenu);
