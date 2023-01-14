import { createSlice } from '@reduxjs/toolkit';
import { fetchingCurrentUser } from 'redux/authController/authController-operations';
import {
  createTransaction,
  deleteTransaction,
} from 'redux/transactionsController/transactionController-operations';

const finance = createSlice({
  name: 'finance',
  initialState: {
    totalBalance: 0,
    isHidden: false,
  },
  reducers: {
    showBalance(state) {
      state.isHidden = false;
    },
    hideBalance(state) {
      state.isHidden = true;
    },
  },
  extraReducers: {
    [fetchingCurrentUser.fulfilled](state, action) {
      state.totalBalance = action.payload.balance;
    },
    [createTransaction.fulfilled](state, action) {
      state.totalBalance = action.payload.balanceAfter;
    },
    [deleteTransaction.fulfilled](state, { payload }) {
      state.totalBalance = state.totalBalance - payload.amount;
    },
  },
});
export const { showBalance, hideBalance } = finance.actions;
export default finance.reducer;
