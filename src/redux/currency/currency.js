import { createSlice } from '@reduxjs/toolkit';
import  money  from './currency-options';

const currency = createSlice({
    name:'currency',
    initialState:{
        Bank: [],
        loader:false,
    },
    extraReducers:{
        [money.rejected](state,action){
            state.loader = true;
        },
        [money.fulfilled](state,action){
            state.loader = true;
            state.Bank = action.payload.slice(0,2)
        }
    }
})
export default currency.reducer;