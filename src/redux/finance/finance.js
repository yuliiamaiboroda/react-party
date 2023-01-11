import { createSlice } from '@reduxjs/toolkit';
import { fetchingCurrentUser } from 'redux/authController/authController-operations';

const finance = createSlice({
    name:'finance',
    initialState:{
        totalBalance: 0,
    },
    extraReducers:{
        [fetchingCurrentUser.fulfilled](state,action){
            state.totalBalance = action.payload.balance;
        }
    }
})
export default finance.reducer;