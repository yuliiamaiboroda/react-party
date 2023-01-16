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
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Nav>
        <Link>
          <LinkHome to="/" content={t('navi.home')} >
            <StyledIconHome />
          </LinkHome>
        </Link>
        <Link>
          {isLoggedIn && (
            <LinkStatistics to="/diagram" content={t('navi.stat')} >
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
