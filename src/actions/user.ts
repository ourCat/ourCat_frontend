import { createAsyncThunk } from '@reduxjs/toolkit';
const URL = 'https://api.manana.kr/exchange/rate/KRW/JPY,USD,KRW.json';
import axios from 'axios';

export const login = createAsyncThunk('user/login', async (data, thunkAPI) => {
  //   const state: any = thunkAPI.getState();
  //   console.log(state?.user.data);

  const res = await axios.get(URL);
  console.log(res);
  return res;
});
