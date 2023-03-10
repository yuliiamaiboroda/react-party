import { configureStore } from "@reduxjs/toolkit";
import currency from "./currency/currency";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import authReducer from "./authController/authController-slice";
import transactionCategoriesReducer from "./transactionCategories/transactionCategories-slice";
import transactionControllerReducer from "./transactionsController/transactionController-slice";
import transactionSummaryReducer from "./transactionSummaryController/transactionSummary-slice";
import finance from "./finance/finance.js";
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};
const persistConfigCurrency = {
  key: 'currency',
  storage,
  whitelist: ['Bank','dateCurrency'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedReducerCurrency = persistReducer(persistConfigCurrency, currency);

export const store = configureStore({
  reducer:{
  finance,
  currency:persistedReducerCurrency,
  transactionCategories: transactionCategoriesReducer,
  transactionController:transactionControllerReducer,
  transactionSummary: transactionSummaryReducer,
  auth: persistedReducer,
  }, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

export const persistor = persistStore(store);

