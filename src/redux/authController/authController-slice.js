import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  signOut,
  fetchingCurrentUser,
} from './authController-operations';

const initialState = {
  token: null,
  user: {
    name: '',
    id: '',
    username: '',
    email: '',
    balance: 0,
  },
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
  isModalLogoutOpen: false,
};

const authController = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(signOut.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, state => {
        state.isLoading = false;
        state.token = null;
        state.isLoggedIn = false;
        state.isModalLogoutOpen = false;
        state.user = {
          name: '',
          id: '',
          username: '',
          email: '',
          balance: 0,
        };
      })
      .addCase(signOut.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchingCurrentUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchingCurrentUser.fulfilled, (state, { payload }) => {
        console.log('auth fetch: ', payload);
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchingCurrentUser.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = payload;
        state.isFetchingCurrentUser = false;
      });
  },
});

export const { openModalLogout, closeModalLogout } = authController.actions;
export default authController.reducer;
