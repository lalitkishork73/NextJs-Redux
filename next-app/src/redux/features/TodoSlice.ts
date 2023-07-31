import { createSlice } from '@reduxjs/toolkit';
import { Tokens } from '@/models/user.model';
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: Tokens = {
  token: ''
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addToken: (state, action) => {
      return action.payload;
    }
  }
});

export const { addToken } = tokenSlice.actions;
export default tokenSlice.reducer;
