import { createSlice } from '@reduxjs/toolkit';
import  money  from './currency-options';

const currency = createSlice({
    name:'currency',
    initialState:{
        Bank: [],
        loader:false,
        dateCurrency: 0,
    },
    extraReducers:{
        [money.rejected](state,action){
            state.loader = true;
        },
        [money.fulfilled](state,action){
            state.loader = true;
            state.Bank = action.payload;
            state.dateCurrency = new Date().getTime();
        }
    },
    reducers:{
        loadingBool(state,action){
          state.loader = action.payload
        }
    }
})
export const {loadingBool} = currency.actions;
export default currency.reducer;