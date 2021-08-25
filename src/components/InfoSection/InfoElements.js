import styled from "styled-components";

export const InfoSection = styled.div`
    background: #f9eae1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    // add :before styles
`

export const InfoBg = styled.div`
    position: absutole;
    top: 0;
    right 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #f9eae1;
`