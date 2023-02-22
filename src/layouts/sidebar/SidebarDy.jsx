import React, { useEffect, useState } from 'react';
import SidebarData from '../../util/sideBarData';
import SubMenu from './SubMenu';

function SidebarDy() {

  return (
    <ul
      className="nav flex-column"
      id="nav_accordion"
      style={{ display: 'block' }}
    >
      {SidebarData.map((item) => (
        <SubMenu key={item.title} item={item} />
      ))}
    </ul>
  );
}

export default SidebarDy;
