import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTransactionCategories = createAsyncThunk(
    'categories/getAll',
    async(_, {rejectWithValue})=>{
        try {
            const {data} = await axios.get('/api/transaction-categories');
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)