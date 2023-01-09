import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://wallet.goit.ua/";

const token ={
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization ="";
    },
};

// Sign up new user
export const signUp = createAsyncThunk(
    'auth/sign-up',
    async (user, {rejectWithValue})=>{
        try {
            const {data} = await axios.post('/api/auth/sign-up', user);
            token.set(data.token);
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
);

// Sign in existing user
export const signIn = createAsyncThunk(
    'auth/sign-in',
    async(user, {rejectWithValue})=>{
        try {
            const {data} = await axios.post('/api/auth/sign-in', user);
            token.set(data.token);
            return data;
        } catch (error) {
           rejectWithValue(error.message);
        }
    }
);

// Signs out user
export const signOut = createAsyncThunk(
    'auth/sign-out',
    async(_, {rejectWithValue})=>{
        try {
            await axios.delete('/api/auth/sign-out');
            token.unset();
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
);

// Fetching current User

export const fetchingCurrentUser = createAsyncThunk(
    'auth/current',
    async (_, {rejectWithValue, getState})=>{
        const state = getState();
        const persistedToken = state.auth.token;
        if (!persistedToken) {
            return rejectWithValue();
        }
        token.set(persistedToken);
        try {
            const {data} = await axios.get('/api/users/current');
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)