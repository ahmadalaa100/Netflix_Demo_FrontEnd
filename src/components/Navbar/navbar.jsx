import React, { useState } from 'react';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
        <Navbar id="homeNav" expand="md">
            <NavbarBrand href="#">
                <img className="NetflixLogo"
					 src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
					 alt='Netflix-Logo'
				/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}id="coll"/>
            <Collapse isOpen={isOpen} navbar  style={{background:"black"}}>
                <Nav className="mr-auto" navbar id="navlinks">
                    <NavItem>
                        <NavLink id="Homee" href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">TV Shows</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Movies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">New & Popular</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">My List</NavLink>
                    </NavItem>
                </Nav>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search.." aria-label="Search" />
                    <i class="fa fa-search fa-lg"></i>
                </form>
                <NavbarText className="Kids">Kids</NavbarText>
                <NavbarText><i className="fa fa-gift fa-lg Gift"></i></NavbarText>   
                <NavbarText><i className="fa fa-bell fa-lg" id="Bell"></i></NavbarText>   
                <UncontrolledDropdown  nav inNavbar id="dropdownn">
                    <DropdownToggle nav caret >
                        <img className="userimg"
                            src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                            alt='Netlix-User'
                        />
                    </DropdownToggle>
                    <DropdownMenu id="DropdownMenu" left>
                        <DropdownItem id="DropdownItem">
                            Account
                        </DropdownItem>
                        <DropdownItem id="DropdownItem">
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Collapse>
        </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
