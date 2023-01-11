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
import ModalLogout from 'components/ModalLogout';
import { useOpenModalLogout } from 'hooks';
import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsModalLogoutOpen,
} from 'redux/authController/authController-selectors';

const Header = () => {
  const { username } = useSelector(selectUser);
  const isModalOpen = useSelector(selectIsModalLogoutOpen);
  const openModal = useOpenModalLogout();

  return (
    <Container>
      <HeaderLine>
        <LogoWrapper to="/">
          <img src={LogoIcon} alt="Main logo" />
          <H2>Wallet</H2>
        </LogoWrapper>
        <Wrapper>
          {/* Тимчасова умова 👇, поки немає авторизації */}
          <Name>{username}</Name>
          <ImgSep src={SeparatorIcon} alt="separator" />
          <Button type="Button" onClick={openModal}>
            <img
              src={ExitIcon}
              alt="exit icon"
              style={{ marginRight: '8px' }}
            />
            Exit
          </Button>
          {isModalOpen && <ModalLogout />}
        </Wrapper>
      </HeaderLine>
    </Container>
  );
};

export default Header;
