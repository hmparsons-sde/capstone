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
import brains from '../../assets/brains.png';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ user }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="sidenav col-auto">
      <img src={brains} className="mr-3"></img>
      <Navbar color="faded" light className="nav-body">
        <NavbarBrand className='mt-3 ml-2 mb-3' href='/'><h1>pressure.<br></br>app</h1></NavbarBrand>
        <i onClick={toggleNavbar} className="fas fa-sort-alt fa-2x"/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="align-content-center" navbar>
          {user
            && <NavItem className="mt-1 ml-2">
                <NavLink href="/trips">
                  <h3>my trips</h3>
                </NavLink>
              </NavItem>
            }
            <NavItem className="mt-3 ml-2">
              <NavLink href="/forecast">
                <h3>forecast</h3>
              </NavLink>
            </NavItem>
            <NavItem className="mt-3 ml-2">
              <NavLink href="/explore">
                <h3>explore</h3>
              </NavLink>
            </NavItem>
            {user !== null && (
              <div>
                {user ? (
                  <Button
                    className="mt-3 ml-2 btn-md"
                    color='secondary'
                    onClick={signOutUser}
                  >
                    sign out
                  </Button>
                ) : (
                  <Button
                    className="mt-3 m1-2 mr-3 btn-md"
                    color='secondary'
                    onClick={signInUser}
                  >
                    sign in
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
