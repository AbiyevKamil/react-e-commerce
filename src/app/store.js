import { configureStore } from '@reduxjs/toolkit';
import contenSlice from '../features/contentSlice'

export const store = configureStore({
  reducer: {
    content: contenSlice
  },
});
