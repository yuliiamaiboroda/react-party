import React from 'react';
import {
  HeaderLine,
  Wrapper,
  LogoWrapper,
  H2,
  Name,
  ImgSep,
  Button,
} from './Header.styled';
import LogoIcon from 'images/Header/logo-icon.svg';
import SeparatorIcon from 'images/Header/separator-icon.svg';
import ExitIcon from 'images/Header/exit-icon.svg';
import Container from 'components/Container';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/authController/authController-selectors';

const Header = () => {
  const {name} = useSelector(selectUser)

  const handlerExitBtnClick = () => {
    console.log('click to >>>', 'Exit button');
  };

  return (
    <Container>
      <HeaderLine>
        <LogoWrapper to="/">
          <img src={LogoIcon} alt="Main logo" />
          <H2>Wallet</H2>
        </LogoWrapper>
        <Wrapper>
          {/* Тимчасова умова 👇, поки немає авторизації */}
          <Name>{name? name : 'unauthorized'}</Name>
          <ImgSep src={SeparatorIcon} alt="separator" />
          <Button type="Button" onClick={handlerExitBtnClick}>
            <img
              src={ExitIcon}
              alt="exit icon"
              style={{ marginRight: '8px' }}
            />
            Exit
          </Button>
        </Wrapper>
      </HeaderLine>
    </Container>
  );
};

export default Header;
