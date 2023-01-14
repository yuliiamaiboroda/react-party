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
  extraReducers: builder => {
    builder
      .addCase(fetchingCurrentUser.fulfilled, (state, { payload }) => {
        state.totalBalance = payload.balance;
      })
      .addCase(createTransaction.fulfilled, (state, { payload }) => {
        state.totalBalance = payload.balanceAfter;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.totalBalance = state.totalBalance - payload.amount;
      });
  },
});
export const { showBalance, hideBalance } = finance.actions;
export default finance.reducer;
