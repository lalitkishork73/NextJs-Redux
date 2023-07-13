import { configureStore } from '@reduxjs/toolkit';
import authReducerr from '../reducer/authReducer';
import todoReducerr from '../reducer/todoReducer';

export const store = configureStore({
  reducer: {
    user: authReducerr,
    todo: todoReducerr
  },
});
