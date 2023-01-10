export const selectTransictions = state => state.transactionController.items;

export const selectIsLoading = state => state.transactionController.isLoading;

export const selectError = state => state.transactionController.error;

export const selectIsModalAddTransactionOpen = state => {
  console.log(state);
  return state.transactionController.isModalAddTransactionOpen;
};
