import React from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { InfoContainer, InfoBg, VideoBg, InfoContent, InfoH1, InfoP, InfoBtnWrapper } from './InfoElements'

const InfoSection = () => {
    return (
        <InfoContainer>
            <InfoBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </InfoBg>
            <InfoContent>
                <InfoH1>Kimberly Salas</InfoH1>
                <InfoP>Full-Stack Wed Developer</InfoP>
                <InfoBtnWrapper>
                    <Button to="signup">
                        About Me
                    </Button>
                </InfoBtnWrapper>
            </InfoContent>
        </InfoContainer>
    )
}

export default InfoSection;
