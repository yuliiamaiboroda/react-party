import { configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';

import currency from "./currency/currency";

  
export const store = configureStore({
    reducer: {
        currency:currency
  }});