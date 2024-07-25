import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const baseUrl = 'http://localhost:5000';
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}/api/login`, credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const signup = createAsyncThunk('auth/signup', async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}/api/signup`, userData);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
