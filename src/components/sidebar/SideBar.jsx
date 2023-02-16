import React from 'react';
import SidebarDy from './SidebarDy';

export default function SideBar({ sidebarOpen }) {
  return (
    <div
      id="mySidebar"
      className="sidebar"
      style={{ width: `${sidebarOpen ? '0px' : '270px'}` }}
    >
      <div className="title d-flex align-items-center">
        <img
          // src="assets/img/ashik.jpg"
          // alt="km-express"
          style={{ height: 50, width: 'auto', objectFit: 'contain' }}
        />
      </div>
      <hr />
      <SidebarDy />
    </div>
  );
}
