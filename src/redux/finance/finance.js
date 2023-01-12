import { createSlice } from '@reduxjs/toolkit';
import { fetchingCurrentUser } from 'redux/authController/authController-operations';
import { createTransaction } from 'redux/transactionsController/transactionController-operations';

const finance = createSlice({
  name: 'finance',
  initialState: {
    totalBalance: 0,
  },
  extraReducers: {
    [fetchingCurrentUser.fulfilled](state, action) {
      state.totalBalance = action.payload.balance;
    },
    [createTransaction.fulfilled](state, action) {
      state.totalBalance = action.payload.balanceAfter;
    },
  },
});
export default finance.reducer;
