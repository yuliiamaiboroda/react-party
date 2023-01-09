import Header from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authController/authController-selectors';

export default function DashBoardPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {/*👇 Тимчасова інверсія , поки немає авторизації */}
      {!isLoggedIn && <Header />}
      <div>DashBoardPage</div>;
    </>
  );
}
