import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const currentBalance = createAsyncThunk(
    "finance/fetchAll",
    async (_, thunkAPI) => {
        try {
          const response = await axios.get('/api/users/current');
          return response.data;
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      }
    );
    export default currentBalance;
