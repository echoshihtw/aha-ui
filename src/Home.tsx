import React, { memo } from 'react';
import UserSubscriptionSection from './Friends';
import SearchSection from './SearchSection';

const Home = () => (
  <div className="w-full h-full flex justify-between flex-col sm:flex-row">
    <SearchSection />
    <div className="w-[375px] hidden lg:block">
      <UserSubscriptionSection />
    </div>
  </div>
);

export default memo(Home);
