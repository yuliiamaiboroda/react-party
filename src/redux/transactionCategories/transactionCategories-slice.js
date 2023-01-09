import { createSlice } from "@reduxjs/toolkit";
import { getTransactionCategories } from "./transactionCategories-operations";

const initialState = {
    isLoading:false,
    error: null,
    categories:[],
}

const transactionCategories =createSlice({
    name:'categories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getTransactionCategories.pending,
            (state)=>{
                state.isLoading = true;
                state.error= null;
            })
        .addCase(getTransactionCategories.fulfilled,
            (state, { payload })=>{
                state.isLoading = false;
                state.categories = payload;
            })
        .addCase(getTransactionCategories.rejected,
            (state, { payload })=>{
                state.isLoading = false;
                state.error = payload;
            })
    }
});

export default transactionCategories.reducer;