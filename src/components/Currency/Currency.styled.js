import styled from 'styled-components';
import img from 'images/Current/wave.png';
import imgBig from 'images/Current/wave2x.png';
import { theme } from 'theme';
export const MainDiv = styled.div`
width: 280px;
height: 174px;
@media (min-width: 768px){
    width: 336px;
    height: 182px;
}
@media (min-width: 1280px){
    width: 393px;
    height: 331px;
}
position: relative;
background-image:linear-gradient(180deg, rgba(255, 255, 255, 0.2) -7.46%, rgba(255, 255, 255, 0) 100%), url(${img});
@media (min-device-pixel-ratio: 2), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image:linear-gradient(180deg, rgba(255, 255, 255, 0.2) -7.46%, rgba(255, 255, 255, 0) 100%), url(${imgBig});
    background-size: 100%;
}
background-repeat: no-repeat;
background-position: bottom;
background-color: rgba(74, 86, 226, 1);
border-radius: 30px;
color: #FFFFFF;
`;
export const DivTop = styled.div`
display: flex;
height: 60px;
justify-content:  space-between;
align-items: center;
background-color: rgba(110, 120, 232, 1);
border-radius: 30px 30px 0 0;
`;
export const PTop = styled.p`
font-weight: ${theme.fontWeights.bold};
font-size: ${theme.fontSizes.m}px;
line-height: ${theme.lineHeights.heading};
`;
export const UL = styled.ul`
display: flex;
margin-top:22px;
justify-content:  space-around;
`;
export const LI = styled.li`
font-weight: ${theme.fontWeights.normal};
font-size: ${theme.fontSizes.s}px;
line-height: ${theme.lineHeights.heading};
`;
