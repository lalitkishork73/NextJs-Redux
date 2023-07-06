'use client';

import { configureStore } from '@reduxjs/toolkit';
import { userManagementSlice } from './featurs/user-Management/user-management-slice';


export const store = configureStore({
  reducer: {
    
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

