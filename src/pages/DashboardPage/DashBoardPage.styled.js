import desktop from '../../images/DashBoard-bg/rectangle-bg-desktop.png';
import desktop2x from '../../images/DashBoard-bg/rectangle-bg-desktop@2x.png';
import tablet from '../../images/DashBoard-bg/rectangle-bg-tablet.png';
import tablet2x from '../../images/DashBoard-bg/rectangle-bg-tablet@2x.png';
import styled from 'styled-components';

export const DivWrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${tablet});
    height: 100vh;
    background-size: cover;
  }

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${tablet2x});
    height: 100vh;
    background-size: cover;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktop});
    height: 100vh;
    background-size: cover;
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktop2x});
      height: 100vh;
      background-size: cover;
    }
  }

  @media screen and (max-width: 767px) {
    background-image: none;
  }
`;

export const Div = styled.div`
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    display: grid;
    justify-content: space-around;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  @media screen and (min-width: 1280px) {
    padding-bottom: 63px;
  }

  @media screen and (max-width: 1279px) {
    display: block;
  }
`;

export const DivContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
  }
`;

export const Splitter = styled.span`
  @media screen and (min-width: 1280px) {
    height: 100vh;
    border-right: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
