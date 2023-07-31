import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

import {
  TodoType,
  TodoGetRes,
  TodoRemRes,
  TodoPostRes
} from '@/models/user.model';
import { RootState } from '../store';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  tagTypes: ['Todo'],
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders: (headers, { getState }) => {
      const token: any = (getState() as RootState).token;
      if (token) {
        headers.set('authorization', token);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTodo: builder.query<TodoGetRes, void>({
      query: () => ({
        url: 'todos',
        method: 'get'
      }),
      providesTags: ['Todo']
    }),
    createTodo: builder.mutation<TodoPostRes, TodoType>({
      query: (data) => ({
        url: 'createtodo',
        method: 'post',
        body: data
      }),
      invalidatesTags: ['Todo']
    }),
    deleteTodo: builder.mutation<TodoRemRes, string>({
      query: (id: string) => ({
        url: `remove/${id}`,
        method: 'delete'
      }),
      invalidatesTags: ['Todo']
    })
  })
});

export const {
  useGetTodoQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation
} = todoApi;

/* type User = {
  status: boolean | string | number;
  message: string;
  token: string;
  id: string;
};

type Us = {
  email: string;
  password: string;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/'
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    signUpUser: builder.mutation<User, Us>({
      query: (data) => ({
        url: 'signup',
        method: 'POST',
        body: data
      }),
      transformResponse: (response: User) => response,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      invalidatesTags: ['User']
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data
      }),
      transformResponse: (response: User, meta, arg) => response,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      invalidatesTags: ['User']
    })
  })
});

export const { useSignUpUserMutation, useLoginUserMutation } =
  userApi; */
