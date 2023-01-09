import { configureStore } from "@reduxjs/toolkit";
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

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer:{
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