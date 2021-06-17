import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  Button,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ user }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="sidenav">
      <Navbar color="faded" light className="nav-body">
        <NavbarBrand className='mt-3 ml-3 mb-3' href='/'><h1>pressure</h1></NavbarBrand>
        <i onClick={toggleNavbar} className="fas fa-sort-alt fa-2x"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="align-content-center" navbar>
          <NavItem className="mt-3 ml-3">
                <NavLink href="/search">
                  <h3>search</h3>
                </NavLink>
              </NavItem>
            {user
            && <NavItem className="mt-3 ml-3">
                <NavLink href="/trips">
                  <h3>trips</h3>
                </NavLink>
              </NavItem>
            }
            {user !== null && (
              <div>
                {user ? (
                  <Button
                    className="mt-3 ml-2"
                    inverse
                    onClick={signOutUser}
                  >
                    <i className="fas fa-sign-out-alt fa-2x"></i>
                  </Button>
                ) : (
                  <Button
                    className="mt-3 mr-2"
                    inverse
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
