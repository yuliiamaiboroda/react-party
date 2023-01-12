import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin-bottom: 32px;
  margin-top: 45px;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 15px;
    justify-items: center;
    justify-content: space-between;
  }
`;

export const LinkHome = styled(NavLink)`
  &.active {
    font-weight: bold;
    color: black;
    transform: scale(1.1);
    opacity: 1;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
  }
  @media screen and (min-width: 768px) {
    position: relative;

    &.active {
      transform: none;
    }
    &::after {
      display: block;
      position: absolute;
      bottom: -6px;
      left: 23px;
      content: 'Home';
      font-size: 18px;
      font-family: 'Poppins';
    }
  }
`;
export const LinkStatistics = styled(NavLink)`
  &.active {
    font-weight: bold;
    color: black;
    transform: scale(1.1);
    opacity: 1;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 43px;
  }
  @media screen and (min-width: 768px) {
    position: relative;

    &.active {
      transform: none;
    }
    &::after {
      display: block;
      position: absolute;
      bottom: -6px;
      left: 23px;
      content: 'Statistics';
      font-size: 18px;
      font-family: 'Poppins';
    }
  }
`;

export const LinkCurrency = styled(NavLink)`
  @media screen and (max-width: 767px) {
    margin-bottom: 31px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  display: block;
  border: none;
  background-repeat: no-repeat;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  opacity: 1.2;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 21px;
    &:hover,
    &:focus {
      transform: none;
    }
  }
`;

export const Img = styled.img`
  width: 18px;

  @media screen and (max-width: 767px) {
    width: 38px;
  }
`;
