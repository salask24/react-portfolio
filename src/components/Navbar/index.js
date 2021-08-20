//this will store all content
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>KS</NavLogo>
                    {/* Mobile Hamburger Buttom */}
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    {/* END Mobile Hamburger Buttom */}

                    {/* Nav links */}
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio">Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Resume</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* END of Nav links */}

                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar
