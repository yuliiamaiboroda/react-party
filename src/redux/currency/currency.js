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
            state.Bank = action.payload;
        }
    }
})
export default currency.reducer;