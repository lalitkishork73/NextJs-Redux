import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodo, Post, removeTodo } from '../../ReactReduxnatives/api/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    data: []
}
// createtodo || todos || remove/:id

export const TodoAdd = createAsyncThunk(
    "todo/todoadd",
    async (body) => {
        const res = await Post('createtodo', body);
        return await res;
    }
)
export const TodoGet = createAsyncThunk(
    "todo/todoget",
    async () => {
        const token = AsyncStorage.getItem('token')
        if (token !== null) {
            const res = await getTodo('todos');
            return await res;
        }
    }
)
export const TodoRemove = createAsyncThunk(
    "todo/todoremove",
    async (id) => {
        const params = `remove/${id}`
        const res = await removeTodo(params);
        return await res;
    }
)

const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(TodoAdd.fulfilled, (state, action) => {
            state.data = [...state?.data, action?.payload?.data]
        })
        builder.addCase(TodoGet.fulfilled, (state, action) => {
            state.data = action?.payload?.data
        })
        builder.addCase(TodoRemove.fulfilled, (state, action) => {
            state.data = state?.data.filter(item => item?._id !== action?.payload?.data?._id)
        })
    }
})

export default todoReducer.reducer