import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ user }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const authenticated = () => {
    <>
      <NavItem className="mt-3 ml-2">
        <NavLink href="/trips">
          <p>Trips</p>
        </NavLink>
      </NavItem>
    </>;
  };

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="align-content-center" navbar>
            <NavItem className="mt-3 ml-1">
              <NavLink href="/">
                <p>Home</p>
              </NavLink>
            </NavItem>
            <NavItem className="mt-3 ml-2">
              <NavLink href="/search">
                <p>Search</p>
              </NavLink>
            </NavItem>
            {user && authenticated()}
            {user !== null && (
              <div>
                {user ? (
                  <Button
                    className="mt-2 ml-2"
                    color="transparent"
                    onClick={signOutUser}
                  >
                    <i className="fas fa-eject fa-2x"></i>
                  </Button>
                ) : (
                  <Button
                    className="mt-2 mr-2"
                    color="transparent"
                    onClick={signInUser}
                  >
                    <i className="fas fa-sign-in-alt fa-2x"></i>
                  </Button>
                )}
              </div>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;
