import styled from "styled-components"
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #aa998f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}
    // if else statements - will display true or false of different properties
    // if you clicked on the icon it will display 100 visibility or if it's not clicked you won't see it
    top: ${({ isOpen }) => (isOpen ? '0%' : '-100%')}
    `

export const CloseIcon = styled(FaTimes)`
    color: #fff
`

export const Icon = styled.div`
    position: absolute;
    top: 0.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`