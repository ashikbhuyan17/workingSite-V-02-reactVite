import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  function showSubNav(e) {
    e.stopPropagation();

    setSubnav(!subnav);
  }

  return (
    <>
      {item.subNav ? (
        <>
          <li className="nav-item " onClick={(e) => showSubNav(e)}>
            <a className="nav-link">
              <i className={`nav-icon ${item.icon}`} />
              <span className="nav-name">{item.title}</span>
            </a>
          </li>

          {subnav && item.subNav && (
            <ul className="sub-nav">
              {item.subNav.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    className={({ isActive }) =>
                      isActive ? 'active' : 'nav-link'
                    }
                    to={item.path}
                  >
                    <i className={`sub-nav-icon far ${item.icon}`} />
                    <span className="sub-nav-name">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <li className="nav-item" onClick={item.subNav && showSubNav}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? 'active' : 'nav-link')}
            end
          >
            <i className={`nav-icon ${item.icon}`} />
            <span className="nav-name">{item.title}</span>
          </NavLink>
        </li>
      )}
    </>
  );
}

export default SubMenu;

// {
//   /* item.subNav.map((item, index) => ( //{" "}
//           <ul key={index}>
//             //{" "}
//             <li className="nav-item">
//               //{" "}
//               <Link className="nav-link" to={item.path}>
//                 // <i className={`nav-icon far ${item.icon}`} />
//                 // <span className="nav-name">{item.title}</span>
//                 //{" "}
//               </Link>
//               //{" "}
//             </li>
//             //{" "}
//           </ul>
//           // ))} */
// }
