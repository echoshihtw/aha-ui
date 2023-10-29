import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRoutes from './Routes';

import Home from './Home';
import SideMenu from './SideMenu';
import TagPage from './TagPage';

const App = () => (
  <div className="w-screen h-screen sm:w-full flex xs:flex-col sm:flex-row sm:justify-between bg-background-main overflow-y-scroll sm:overflow-y-hidden">
    <BrowserRouter>
      <SideMenu />
      <Routes>
        <Route path={AllRoutes.home} element={<Home />} />
        <Route path={AllRoutes.tagPage} element={<TagPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default memo(App);
