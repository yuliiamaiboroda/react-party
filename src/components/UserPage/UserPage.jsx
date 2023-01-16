import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsModalLogoutOpen,
  selectUser,
} from 'redux/authController/authController-selectors';
import Container from 'components/Container';
import { useOpenModalLogout } from 'hooks';
import ModalLogout from 'components/ModalLogout';
import { hideBalance, showBalance } from 'redux/finance/finance';
import { selectIsHiddenBalance } from 'redux/finance/finance-selectors';
import {
  Button,
  P,
  PBold,
  PSett,
  Span,
  InfoDiv,
  SettingsDiv,
  ButtonsWrapper,
  SettBtnWrapper,
} from './UserPage.styled';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const lngs = [
  { code: 'en', native: 'English' },
  { code: 'uk', native: 'Українська' },
];

export default function UserPage() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const isModalOpen = useSelector(selectIsModalLogoutOpen);
  const isBalancehidden = useSelector(selectIsHiddenBalance);

  const openModal = useOpenModalLogout();
  const { username, email } = userInfo;

  const handleTrans = code => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <Container>
        <InfoDiv>
          <P>
            {t('userPage.hello')} <Span>{username}</Span>!
          </P>
          <P>
            {t('userPage.emailInfo')} <Span>{email}</Span>
          </P>
        </InfoDiv>
        <PBold>{t('userPage.settings')}</PBold>
        <SettingsDiv>
          <PSett>{t('userPage.lang')}</PSett>
          <SettBtnWrapper>
            {lngs.map(lng => {
              const { code, native } = lng;
              return (
                <Button key={code} onClick={() => handleTrans(code)}>
                  {native}
                </Button>
              );
            })}
          </SettBtnWrapper>
        </SettingsDiv>
        <SettingsDiv>
          <PSett>{t('userPage.hideBal')}</PSett>
          {!isBalancehidden ? (
            <Button
              type="button"
              onClick={() => dispatch(hideBalance())}
              style={{
                backgroundColor: '#FF6596',
              }}
            >
              {t('userPage.hideBal')}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => dispatch(showBalance())}
              style={{
                backgroundColor: '#24CCA7',
              }}
            >
              {t('userPage.showBal')}
            </Button>
          )}
        </SettingsDiv>
        <ButtonsWrapper>
          <Button type="button" onClick={openModal}>
          {t('userPage.exit')}
          </Button>
        </ButtonsWrapper>
        {isModalOpen && <ModalLogout />}
      </Container>
    </>
  );
}
