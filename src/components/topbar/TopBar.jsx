import React, { useState, useEffect } from 'react';
import { Button, Container, Dropdown, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div className="">
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img
        src="assets/img/logo-image.png"
        className="img-circle rounded-circle"
        style={{ height: 40, width: 40, objectFit: 'cover' }}
        alt="User "
      />
    </a>
  </div>
));

// eslint-disable-next-line react/display-name
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled m-0">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

export default function TopBar({ setSidebarOpen }) {
  // function handleSignOut() {
  //   dispatch(signOut());
  //   navigate('login', { replace: true });
  // }
  const handleSideBar = () => {
    setSidebarOpen((sidebarOpen) => !sidebarOpen);
  };

  const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  // function openModal() {
  //   dispatch(printerModalOpen());
  // }

  return (
    <Container fluid>
      <nav
        id="navbar_top"
        className="px-3 navbar navbar-expand-lg bg-white navbar-light bar justify-content-between shadow"
      >
        <div className="top-bar nav-item mr-3" onClick={() => handleSideBar()}>
          <i className="fas fa-bars" />
        </div>

        <Nav className="navbar-nav ml-auto d-flex align-items-center dropdown-menu-right gap-4">
          {/* <Button onClick={() => dispatch(printerModalOpen())}>printer</Button> */}
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              Custom toggle
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
              {/* {user ? (
                <Dropdown.Item eventKey="1">
                  <span className="fw-bold fs-6"> {user.full_name}</span> <br />
                  {user.country}
                </Dropdown.Item>
              ) : (
                ""
              )} */}
              {/* <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item> */}
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">
                <i className="fas fa-sign-out-alt mr-2" /> Sign Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </nav>
    </Container>
  );
}
