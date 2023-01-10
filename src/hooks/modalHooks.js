import { useDispatch } from 'react-redux';
import {
  openModalAddTransaction,
  closeModalAddTransaction,
} from 'redux/transactionsController/transactionController-slice';

export const useOpenModalAddTrans = () => {
  const dispatch = useDispatch();

  return () => dispatch(openModalAddTransaction());
};

export const useCloseModalAddTrans = () => {
  const dispatch = useDispatch();

  return () => dispatch(closeModalAddTransaction());
};
