import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from '../api/api'
const initialState = {
    token: "",
    loading: false,
    error: ""
};

export const signupUser = createAsyncThunk(
    'signupuser',
    async (body) => {
        const res = await Post('signup', body);
        return res;
    }
)
export const loginUser = createAsyncThunk(
    'loginuser',
    async (body) => {
        console.log(body)
        const res = await Post('login', body);
        return res;
    }
)

const authReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token')
        }
    },
    extraReducers: {
        [signupUser.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.payload.message) {
                state.error = action.payload.message;
            } else {
                state.error = action.payload.error;
            }
        },
        [signupUser.pending]: (state, action) => {
            state.loading = true;
        },
        [loginUser.fulfilled]: (state, { payload: { token, message } }) => {
            state.loading = false;
            if (token) {
                state.token = token;
                localStorage.setItem('token', token);
            } else {
                state.error = message;
            }
        },
        [loginUser.pending]: (state) => {
            state.loading = true;
        }
    }
})

export const { addToken } = authReducer.actions
export default authReducer.reducer