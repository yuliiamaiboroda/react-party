export const selectTransactionCategories = state =>
  state.transactionCategories.categories;

export const selectIsLoadingCategories = state =>
  state.transactionCategories.isLoading;
