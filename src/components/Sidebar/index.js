import React from 'react';
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About Me</SidebarLink>
                    <SidebarLink to="portfolio">Portfolio</SidebarLink>
                    <SidebarLink to="contact">Contact</SidebarLink>
                    <SidebarLink to="resume">Resume</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
