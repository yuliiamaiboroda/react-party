import {
  LinkHome,
  LinkStatistics,
  LinkCurrency,
  Nav,
  Link,
  StyledIconHome,
  StyledStatisticsIcon,
  StyledCurrencyIcon,
} from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/authController/authController-selectors';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Nav>
        <Link>
          <LinkHome to="/">
            <StyledIconHome />
          </LinkHome>
        </Link>
        <Link>
          {isLoggedIn && (
            <LinkStatistics to="/diagram">
              <StyledStatisticsIcon />
            </LinkStatistics>
          )}
        </Link>
        <Link>
          <LinkCurrency to="/currency">
            <StyledCurrencyIcon />
          </LinkCurrency>
        </Link>
      </Nav>
    </>
  );
}
