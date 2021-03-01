import { createSlice } from '@reduxjs/toolkit';
import { login } from 'actions';

type initialStateType = {
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  data: any;
};
const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  data: null,
} as initialStateType;

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    logOut(state) {
      state.data = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoggingIn = true;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoggingIn = false;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, state => {
        state.data = null;
        state.isLoggingIn = false;
        state.isLoggedIn = false;
      });
  },
});
