import { createSlice } from "@reduxjs/toolkit";
import { getTransactionSummary } from "./transactionSummary-operations";

const initialState = {
    isLoading: false,
    error:null,
    transactionSummary: null,
}

const transactionSummary = createSlice({
    name:'summary',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getTransactionSummary.pending,
            (state)=>{
                state.error= null;
                state.isLoading = true;
            })
        .addCase(getTransactionSummary.fulfilled,
            (state, { payload })=>{
                state.isLoading = false;
                state.transactionSummary = payload;
            })
        .addCase(getTransactionSummary.rejected, 
            (state, { payload })=>{
                state.error= payload;
                state.isLoading = false;
            })
    }
});

export default transactionSummary.reducer;