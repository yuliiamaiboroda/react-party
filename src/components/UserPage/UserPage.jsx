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
import { Button, P, Span, InfoDiv, ButtonsWrapper } from './UserPage.styled';
import { useTranslation } from 'react-i18next';

const lngs = [
  { code: "en", native: "English" },
  { code: "uk", native: "Українська" },
];

export default function UserPage() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const isModalOpen = useSelector(selectIsModalLogoutOpen);
  const isBalancehidden = useSelector(selectIsHiddenBalance);

  const openModal = useOpenModalLogout();
  const { username, email } = userInfo;

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      <Container>
        <InfoDiv>
          <P>
            Hello, <Span>{username}</Span>!
          </P>
          <P>
            Your email is <Span>{email}</Span>
          </P>
        </InfoDiv>

        {lngs.map((lng) => {
        const { code, native } = lng;
        return <button onClick={() => handleTrans(code)}>{native}</button>;
      })}

        <ButtonsWrapper>
          {!isBalancehidden ? (
            <Button
              type="button"
              onClick={() => dispatch(hideBalance())}
              style={{
                backgroundColor: '#FF6596',
              }}
            >
              Hide balance
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => dispatch(showBalance())}
              style={{
                backgroundColor: '#24CCA7',
              }}
            >
              Show balance
            </Button>
          )}
          <Button type="button" onClick={openModal}>
            Log out
          </Button>
        </ButtonsWrapper>
        {isModalOpen && <ModalLogout />}
      </Container>
    </>
  );
}
