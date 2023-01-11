import styled from 'styled-components';
import { theme } from 'theme';


export const DivBalnce = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    width: 280px;
    height: 80px; 
    @media (min-width: 768px){
        width: 336px;
    }
    @media (min-width: 1280px){
        width: 395px;
    }
    background-color: ${theme.colors.textLight};
    border-radius: ${theme.radii.normal}px;
`;
export const PText = styled.p`
    color: #A6A6A6;
    font-weight:${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.xs}px;
    line-height: ${theme.lineHeights.heading};
    text-transform: uppercase;
`;
export const PMoney = styled.p`
    color: ${theme.colors.text};
    font-weight:${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.xl}px;
    line-height: ${theme.lineHeights.heading};
`;