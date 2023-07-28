import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './services/api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({}).concat([todoApi.middleware])
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
