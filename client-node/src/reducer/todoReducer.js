import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodo, Post, removeTodo } from '../api/api'


const initialState = {
    data: []
}
// createtodo || todos || remove/:id

export const TodoAdd = createAsyncThunk(
    "todo/todoadd",
    async (body) => {
        const res = await Post('createtodo', body);
        return res;
    }
)
export const TodoGet = createAsyncThunk(
    "todo/todoget",
    async () => {
        const res = await getTodo('todos');
        return res;
    }
)
export const TodoRemove = createAsyncThunk(
    "todo/todoremove",
    async (id) => {
        const params = `remove/${id}`
        const res = await removeTodo(params);
        return res;
    }
)

const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(TodoAdd.fulfilled, (state, action) => {
            state.data = [...state.data, action.payload.data]
        })
        
    }
})

export default todoReducer.reducer