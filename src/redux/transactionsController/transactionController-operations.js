import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// create new transaction for logged in user
export const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/transactions', transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Get all transactions for logged in user
export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransiction',
  async (_, { rejectWithValue, getState }) => {
    const isToken = getState().auth.token;
    if (isToken) {
      try {
        const { data } = await axios.get('/api/transactions');
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Update transaction
export const updateTransaction = createAsyncThunk(
  'transactions/updateTransiction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `/api/transactions/${transaction.id}`,
        transaction
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Remove transaction
export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/transactions/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
