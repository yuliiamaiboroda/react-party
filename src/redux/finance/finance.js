import { createSlice } from '@reduxjs/toolkit';
import currentBalance from './finance-operations';
const finance = createSlice({
    name:'finance',
    initialState:{
        totalBalance: 0,
    },
    extraReducers:{
        [currentBalance.fulfilled](state,action){
            state.totalBalance = action.payload.balance;
        }
    }
})
export default finance.reducer;