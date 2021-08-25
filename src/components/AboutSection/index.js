import React from 'react';
import { Button } from '../ButtonElement';
import { AboutContainter, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './AboutElements';

const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt}) => {
    return (
        <>
            <AboutContainter lightBg={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home">{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>

            </AboutContainter>
        </>
    );
}

export default AboutSection;