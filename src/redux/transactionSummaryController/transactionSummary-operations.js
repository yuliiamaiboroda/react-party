import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// The year and month must be in a format that can be converted to numbers!!!!!!!!

export const getTransactionSummary = createAsyncThunk(
    'summary/all',
    async(date, {rejectWithValue})=>{
        try {    
            const {data} = await axios.get('/api/transactions-summary',
            {params:
                {   month:Number(date.month),
                    year: Number(date.year)
                }
            });
            return data;
        } catch (error) {
           rejectWithValue(error.message);
        }
    }
)