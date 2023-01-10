export const selectIsLoading = state => state.auth.isLoading;

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectError = state => state.auth.error;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

export const selectIsModalLogoutOpen = state => state.auth.isModalLogoutOpen;
