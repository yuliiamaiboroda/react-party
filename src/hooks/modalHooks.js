import { useDispatch } from 'react-redux';
import {
  openModalAddTransaction,
  closeModalAddTransaction,
} from 'redux/transactionsController/transactionController-slice';
import {
  openModalLogout,
  closeModalLogout,
} from 'redux/authController/authController-slice';

export const useOpenModalAddTrans = () => {
  const dispatch = useDispatch();

  return () => dispatch(openModalAddTransaction());
};

export const useCloseModalAddTrans = () => {
  const dispatch = useDispatch();

  return () => dispatch(closeModalAddTransaction());
};

export const useOpenModalLogout = () => {
  const dispatch = useDispatch();

  return () => dispatch(openModalLogout());
};

export const useCloseModalLogout = () => {
  const dispatch = useDispatch();

  return () => dispatch(closeModalLogout());
};
