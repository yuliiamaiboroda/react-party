import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HomeIcon } from 'icons/home.svg';
import { ReactComponent as StatisticsIcon } from 'icons/statistics.svg';
import { ReactComponent as CurrencyIcon } from 'icons/currency.svg';

export const Nav = styled.nav`
  margin-bottom: 32px;
  margin-top: 45px;
  @media screen and (max-width: 767px) {
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    justify-content: center;
    gap: 36px;
    align-items: stretch;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 42px;
  }
`;

export const LinkHome = styled(NavLink)`
  &.active {
    font-weight: bold;
    color: black;
    transform: scale(1.1);
    opacity: 1;
    &.active svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      fill: #6e78e8;
      background-color: white;
      border-radius: 6px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
    &.active svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      fill: #6e78e8;
      background-color: white;
      border-radius: 6px;
    }
  }
  @media screen and (min-width: 768px) {
    position: relative;
    &::after {
      display: block;
      position: absolute;
      bottom: -1px;
      left: 23px;
      content: '${props => props.content}';
      // content: 'Home';
      font-size: 18px;
      font-family: ${p => p.theme.fonts.heading};
    }
  }
`;


export const LinkStatistics = styled(NavLink)`
  &.active {
    font-weight: bold;
    color: black;
    transform: scale(1.1);
    opacity: 1;
    &.active svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      fill: #6e78e8;
      background-color: white;
      border-radius: 6px;
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 43px;
    &.active svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      fill: #6e78e8;
      background-color: white;
      border-radius: 6px;
    }
  }
  @media screen and (min-width: 768px) {
    position: relative;
    &::after {
      display: block;
      position: absolute;
      bottom: -1px;
      left: 23px;
      content: '${props => props.content}';
      // content: 'Statistics';
      font-size: 18px;
      font-family: ${p => p.theme.fonts.heading};
    }
  }
`;

export const LinkCurrency = styled(NavLink)`
  @media screen and (max-width: 767px) {
    margin-bottom: 31px;
    &.active svg {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      fill: #6e78e8;
      background-color: white;
      border-radius: 6px;
    }
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

  @media screen and (min-width: 768px) {
    margin-bottom: 21px;
  }
`;

export const StyledIconHome = styled(HomeIcon)`
  @media screen and (min-width: 768px) {
    height: ${({ height }) => height || '18px'};
  }

  @media screen and (max-width: 767px) {
    height: ${({ height }) => height || '38px'};
  }
`;

export const StyledStatisticsIcon = styled(StatisticsIcon)`
  @media screen and (min-width: 768px) {
    height: ${({ height }) => height || '18px'};
  }

  @media screen and (max-width: 767px) {
    height: ${({ height }) => height || '38px'};
  }
`;

export const StyledCurrencyIcon = styled(CurrencyIcon)`
  @media screen and (max-width: 767px) {
    height: ${({ height }) => height || '38px'};
  }
`;
