import { useLayoutEffect, useMemo, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sidebar/SideBar';
import TopBar from '../components/topbar/TopBar';
// import PrinterModal from "../components/PrinterModal";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // if (width <= 900) => sidebar hide
  // useMemo(() => {
  //   const width =
  //     window.innerWidth ||
  //     document.documentElement.clientWidth ||
  //     document.body.clientWidth;
  //   console.log(".............", width);

  //   if (width <= 900) {
  //     setSidebarOpen((sidebarOpen) => !sidebarOpen);
  //   }
  // }, []);

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    if (windowWidth > 900) {
      setSidebarOpen((sidebarOpen) => {
        return false;
      });
    } else {
      setSidebarOpen((sidebarOpen) => {
        return true;
      });
    }
    return () => window.removeEventListener('resize', resizeWindow);
  }, [windowWidth]);

  return (
    <Container
      fluid
      className="px-0 .bg-secondary
    "
    >
      <SideBar sidebarOpen={sidebarOpen} />
      <div
        className="main"
        style={{
          marginLeft: `${sidebarOpen ? '0px' : '270px'}`,
        }}
      >
        <TopBar setSidebarOpen={setSidebarOpen} />
        <Outlet />
      </div>
      {/* <PrinterModal /> */}
    </Container>
  );
}
