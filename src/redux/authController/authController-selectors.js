export const selectIsLoading = state => state.auth.isLoading;

export const selectUser = state => state.auth.user;

export const selectUserBalance = state => state.auth.user.balance;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectError = state => state.auth.error;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

export const selectIsModalLogoutOpen = state => state.auth.isModalLogoutOpen;

export const selectToken = state => state.auth.token;
