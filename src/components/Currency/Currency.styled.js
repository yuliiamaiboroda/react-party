import styled from 'styled-components';
import img from './wave.png'
export const MainDiv = styled.div`
width: 393px;
height: 331px;
position: relative;
background-image: url(${img});
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
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p=> p.theme.fontSizes.m}px;
line-height: ${p => p.theme.lineHeights.heading};
`;
export const UL = styled.ul`
display: flex;
margin-top:22px;
justify-content:  space-around;
`;
export const LI = styled.li`
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p=> p.theme.fontSizes.s}px;
line-height: ${p => p.theme.lineHeights.heading};
`;
