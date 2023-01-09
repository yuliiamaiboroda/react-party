import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://api.monobank.ua/bank";

const money = createAsyncThunk(
    "currency/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/currency");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export default money;