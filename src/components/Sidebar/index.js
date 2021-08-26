import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='#AboutMe' onClick={toggle}>About Me</SidebarLink>
                    <SidebarLink to='#Projects' onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to='#Contact' onClick={toggle}>Contact</SidebarLink>
                    <SidebarLink to='#Resume' onClick={toggle}>Resume</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;