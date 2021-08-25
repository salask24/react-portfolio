import React from 'react'

const InfoSection = () => {
    return (
        <InfoContainer>
            <InfoBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </InfoBg>
        </InfoContainer>
    )
}

export default InfoSection;
