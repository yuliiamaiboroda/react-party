import AddTransactionButton from 'components/AddTransactionButton';
import Balance from 'components/Balance/Balance';
import Box from 'components/Box';
import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function DashBoardPage() {
  return (
    <Box p={5}>
      <Header />
      <div>DashBoardPage</div>
      <Balance/>
      <Currency />
      <AddTransactionButton />
      <Outlet/>
    </Box>
  );
}
