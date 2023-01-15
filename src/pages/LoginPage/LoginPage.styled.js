import styled from 'styled-components';

import descEllipse from '../../images/bg-desktop-login/ellipse.png';
import descRectangle from '../../images/bg-desktop-login/ellipse-up-desktop.png';

import tabletEllipseDown from '../../images/bg-tablet-login/ellipse-down.png';
import tabletEllipseUp from '../../images/bg-tablet-login/ellipse-up.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e7eaf2;
  padding: 0;
  @media (min-width: 768px) {
    display: flex;
    background-repeat: no-repeat;
    background-image: url(${tabletEllipseDown}), url(${tabletEllipseUp});
    background-position: bottom 0 left 0, top 0 right 0;
    flex-direction: column;
    padding-top: 60px;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
  }
  @media (min-width: 1280px) {
    background-repeat: no-repeat;
    background-position: bottom 0 left 0, top 0 right 0;
    flex-direction: row;
    background-image: url(${descEllipse}), url(${descRectangle});
    gap: 40px;
    justify-content: flex-end;
    padding-top: 0;
  }
`;

export const ImageDiv = styled.div`
  display: none;

  @media (min-width: 768px) {
    flex-direction: row;
    display: flex;
    align-items: center;
    gap: 40px;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Image = styled.img`
  display: none;
  @media (min-width: 768px) {
    width: 260px;
    height: 250px;
    display: block;
  }
  @media (min-width: 1280px) {
    width: 435px;
    height: 420px;
  }
`;

export const P = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    font-family: ${p => p.theme.fonts.body};
    font-size: 30px;
    line-height: 1.5;
    display: inline-block;
    color: #000;
  }
`;

export const FormWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    width: 60%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
    margin: auto 0;
    display: flex;
    align-items: center;
  }
`;
