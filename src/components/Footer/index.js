import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Kimberly Salas - Full-Stack Web Developer</FooterLinkTitle>
                                <FooterLink to="https://github.com/salask24">Github</FooterLink>
                                <FooterLink to="https://www.linkedin.com/in/salask">LinkedIn</FooterLink>
                                <FooterLink to="/Resume">Resume</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
            
        </FooterContainer>

    )
}

export default Footer
