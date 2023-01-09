import { createSlice } from "@reduxjs/toolkit";
import { createTransaction, getAllTransactions, updateTransaction, deleteTransaction } from "./transactionController-operations";

const initialState = {
    items:[],
    isLoading: false,
    error: null, 
};

const transactionController = createSlice({
    name:'transactions',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(createTransaction.pending,
            (state)=>{
                state.isLoading = true;
                state.error= null;
            })
        .addCase(createTransaction.fulfilled,
            (state, { payload })=>{
                state.isLoading= false;
                state.items = [...state.items, payload];
            })
        .addCase(createTransaction.rejected,
            (state, { payload })=>{
                state.isLoading = false;
                state.error= payload;
            })
        .addCase(getAllTransactions.pending,
            (state)=>{
                state.isLoading = true;
                state.error= null;
            })
        .addCase(getAllTransactions.fulfilled,
            (state, { payload })=>{
                state.isLoading= false;
                state.items = payload; 
            })
        .addCase(getAllTransactions.rejected,
            (state, { payload })=>{
                state.isLoading = false;
                state.error= payload;
            })
        .addCase(updateTransaction.pending,
            (state)=>{
                state.isLoading = true;
                state.error= null;
            })
        .addCase(updateTransaction.fulfilled,
            (state, { payload })=>{
                state.isLoading = false;
                const index = state.items.findIndex(
                transaction => transaction.id === payload.id
              );
                state.items[index] = payload;
            })
        .addCase(updateTransaction.rejected,
            (state, { payload })=>{
                state.isLoading = false;
                state.error= payload;
            })
        .addCase(deleteTransaction.pending, 
            (state)=>{
                state.isLoading = true;
                state.error= null;
            })
        .addCase(deleteTransaction.fulfilled,
            (state, { payload })=>{
            state.isLoading= false;
            const index = state.items.findIndex(
                transaction => transaction.id === payload);
            state.items.splice(index, 1);
            })
        .addCase(deleteTransaction.rejected,
            (state, { payload })=>{
                state.isLoading = false;
                state.error= payload;
            })    
    }
});

export default transactionController.reducer;