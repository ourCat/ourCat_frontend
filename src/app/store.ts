import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userSlice } from 'slicers';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.NODE_ENV !== 'production',
});
