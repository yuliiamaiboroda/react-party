import React from 'react';
import {
  HeaderLine,
  Wrapper,
  LogoWrapper,
  H2,
  Name,
  ImgSep,
  Button,
  ImgWallet,
  ExitText,
} from './Header.styled';
import LogoIcon from 'images/Header/logo-icon.svg';
import SeparatorIcon from 'images/Header/separator-icon.svg';
import ExitIcon from 'images/Header/exit-icon.svg';
import Box from 'components/Box';
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
    <Box backgroundColor="lightBg">
      <Container>
        <HeaderLine>
          <LogoWrapper to="/">
            <ImgWallet src={LogoIcon} alt="Main logo" />
            <H2>Wallet</H2>
          </LogoWrapper>
          <Wrapper>
            <Name>{username}</Name>
            <ImgSep src={SeparatorIcon} alt="separator" />
            <Button type="Button" onClick={openModal}>
              <img
                src={ExitIcon}
                alt="exit icon"
              />
              <ExitText>Exit</ExitText>
            </Button>
            {isModalOpen && <ModalLogout />}
          </Wrapper>
        </HeaderLine>
      </Container>
    </Box>
  );
};

export default Header;
