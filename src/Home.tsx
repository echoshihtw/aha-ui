import React, { memo } from 'react';
import UserSubscriptionSection from './UserSubscriptionSection';
import SearchSection from './SearchSection';
import MobileMenu from './SideMenu/MobileMenu';

const Home = () => (
  <div className="w-full h-full flex justify-between flex-col sm:flex-row">
    <SearchSection />
    <div className="w-[375px] hidden lg:block">
      <UserSubscriptionSection />
    </div>
    <MobileMenu />
  </div>
);

export default memo(Home);
