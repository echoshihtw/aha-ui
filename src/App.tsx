import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Tags from './Tags';
import Home from './Home';
import SideMenu from './SideMenu';

const App = () => (
  <div className="w-full h-screen sm:h-full flex xs:flex-col sm:flex-row sm:justify-between bg-background-main">
    <BrowserRouter>
      <SideMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags" element={<Tags />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default memo(App);
