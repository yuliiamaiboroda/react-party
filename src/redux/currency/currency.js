import { createSlice } from '@reduxjs/toolkit';
import  money  from './currency-options';
const currency = createSlice({
    name:'currency',
    initialState:{
        totalBalance: [],
        loader:false,
    },
    extraReducers:{
        [money.rejected](state,action){
            state.loader = true;
        },
        [money.fulfilled](state,action){
            state.loader = true;
            state.totalBalance = action.payload.slice(0,2)
        }
    }
})
export default currency.reducer;