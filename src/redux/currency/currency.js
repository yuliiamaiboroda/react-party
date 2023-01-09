import { createSlice } from '@reduxjs/toolkit';
import  money  from './currency-options';

const currency = createSlice({
    name:'currency',
    initialState:{
        totalBalance: []
    },
    extraReducers:{
        [money.fulfilled](state,action){
            state.totalBalance.push(action.payload)
        }
    }
})
export default currency.reducer;