import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import SideMenu from './SideMenu';
import TagPage from './TagPage';

const App = () => (
  <div className="w-screen min-h-screen sm:w-full flex xs:flex-col sm:flex-row sm:justify-between bg-background-main xs:overflow-y-scroll">
    <BrowserRouter>
      <SideMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags" element={<TagPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default memo(App);
