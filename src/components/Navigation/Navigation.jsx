import {
  LinkHome,
  LinkStatistics,
  LinkCurrency,
  Nav,
  Link,
  Img,
} from './Navigation.styled';
import HomeIcon from 'icons/home.svg';
import StatisticsIcon from 'icons/statistics.svg';
import CurrencyIcon from 'icons/currency.svg';
import { selectIsLoggedIn } from 'redux/authController/authController-selectors';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Nav>
        <Link>
          <LinkHome to="/">
            <Img src={HomeIcon} alt="Home" />
          </LinkHome>
        </Link>
        <Link>
          {isLoggedIn && (
            <LinkStatistics to="/diagram">
              <Img src={StatisticsIcon} alt="Statistics" />
            </LinkStatistics>
          )}
        </Link>
        <Link>
          <LinkCurrency to="/currency">
            <Img src={CurrencyIcon} alt="Currency" />
          </LinkCurrency>
        </Link>
      </Nav>
    </>
  );
}
