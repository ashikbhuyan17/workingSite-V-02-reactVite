import React, { useEffect, useRef } from 'react';

const TopBar = () => {
  const openNavMenuRef = useRef('');
  const closeNavMenuRef = useRef('');
  const menuOverlayRef = useRef('');
  const navMenuRef = useRef('');
  useEffect(() => {
    console.log('+++++++++++++++++++++++');
    const openNavMenu = document.querySelector('.open-nav-menu'),
      closeNavMenu = document.querySelector('.close-nav-menu'),
      navMenu = document.querySelector('.nav-menu'),
      menuOverlay = document.querySelector('.menu-overlay'),
      mediaSize = 1210;

    openNavMenuRef.current.addEventListener('click', toggleNav);
    closeNavMenuRef.current.addEventListener('click', toggleNav);
    // close the navMenu by clicking outside
    menuOverlayRef.current.addEventListener('click', toggleNav);

    function toggleNav() {
      navMenu.classList.toggle('open');
      menuOverlay.classList.toggle('active');
      document.body.classList.toggle('hidden-scrolling');
    }

    navMenuRef.current.addEventListener('click', (event) => {
      console.log(
        '🚀 ~ file: TopBar.jsx:28 ~ navMenuRef.current.addEventListener ~ event',
        event
      );
      if (
        event.target.hasAttribute('data-toggle') &&
        window.innerWidth <= mediaSize
      ) {
        // prevent default anchor click behavior
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if (menuItemHasChildren.classList.contains('active')) {
          collapseSubMenu();
        } else {
          // collapse existing expanded menuItemHasChildren
          if (navMenu.querySelector('.menu-item-has-children.active')) {
            collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add('active');
          const subMenu = menuItemHasChildren.querySelector('.sub-menu');
          subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
      }
    });
    function collapseSubMenu() {
      navMenu
        .querySelector('.menu-item-has-children.active .sub-menu')
        .removeAttribute('style');
      navMenu
        .querySelector('.menu-item-has-children.active')
        .classList.remove('active');
    }
    function resizeFix() {
      // if navMenu is open ,close it
      if (navMenu.classList.contains('open')) {
        toggleNav();
      }
      // if menuItemHasChildren is expanded , collapse it
      if (navMenu.querySelector('.menu-item-has-children.active')) {
        collapseSubMenu();
      }
    }

    window.addEventListener('resize', function () {
      if (this.innerWidth > mediaSize) {
        resizeFix();
      }
    });
  }, [openNavMenuRef, closeNavMenuRef]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <img
                src="https://www.bringg.com/wp-content/uploads/2021/01/bringg-logo.svg"
                alt=""
              />
            </div>
            <div className="toggle">
              <div className="open-nav-menu" ref={openNavMenuRef}>
                <span></span>
              </div>
              <div className="menu-overlay" ref={menuOverlayRef}>
                {' '}
              </div>
            </div>
            <nav className="nav-menu" ref={navMenuRef}>
              <div className="close-nav-menu" ref={closeNavMenuRef}>
                <img src="assets/img/close.svg" alt="close" />
              </div>
              <ul className="menu">
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Product <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">Last Mile Experience</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Click and Collect</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Third Party Delivery</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Fleet & Driver Efficiency</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Dispatch & Routing</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Bringg on Salesforce</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#">About</a>
                </li>
                <li className="menu-item">
                  <a href="#">Services</a>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Pages <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">page 1</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 2</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 3</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 4</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Pages <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">page 1</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 2</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 3</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 4</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#">Blog</a>
                </li>
              </ul>
              {/* <div className="search-icon">
                  <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
               </div>
   
               <div className="button-link">
                  <button>Let's Talk</button>
               </div>  */}
            </nav>

            <div className="search-icon">
              <a>
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <ul className="sub-menu">
                <input type="text" placeholder="Search Bongo....." />
              </ul>
            </div>

            <div className="button-link">
              <button>Let's Talk</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
