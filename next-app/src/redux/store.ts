import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './services/api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import tokenRuducer from './features/TodoSlice';

export const store = configureStore({
  reducer: {
    token: tokenRuducer,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({}).concat([todoApi.middleware])
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
