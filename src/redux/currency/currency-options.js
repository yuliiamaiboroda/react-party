import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const money = createAsyncThunk(
    "currency/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('https://api.monobank.ua/bank/currency');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export default money;