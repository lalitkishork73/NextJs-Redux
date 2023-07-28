import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

import {
  TodoType,
  TodoGetRes,
  TodoRemRes
} from '@/models/user.model';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/'
  }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    createTodo: builder.mutation<string, TodoType>({
      query: (data) => ({
        url: 'createtodo',
        method: 'post',
        body: data
      })
    }),
    getTodo: builder.query<TodoGetRes, undefined>({
      query: () => ({
        url: 'todos',
        method: 'get'
      })
    }),
    deleteTodo: builder.query<TodoRemRes, string>({
      query: (id: string) => ({
        url: `remove/${id}`,
        method: 'delete'
      })
    })
  })
});

export const {
  useCreateTodoMutation,
  useGetTodoQuery,
  useDeleteTodoQuery
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
