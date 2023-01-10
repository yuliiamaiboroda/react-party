import { createSlice } from '@reduxjs/toolkit';
import  money  from './currency-options';

const currency = createSlice({
    name:'currency',
    initialState:{
        totalBalance: [],
        loader:true,
    },
    extraReducers:{
        [money.fulfilled](state,action){
            state.totalBalance = action.payload.slice(0,2)
        }
    }
})
export default currency.reducer;