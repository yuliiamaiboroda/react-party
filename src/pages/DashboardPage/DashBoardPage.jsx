import AddTransactionButton from 'components/AddTransactionButton';
import Box from 'components/Box';
import Header from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authController/authController-selectors';

export default function DashBoardPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box p={5}>
      {/*👇 Тимчасова інверсія , поки немає авторизації */}
      {!isLoggedIn && <Header />}
      <div>DashBoardPage</div>
      <AddTransactionButton />
    </Box>
  );
}
