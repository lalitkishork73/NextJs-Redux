import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from '../../ReactReduxnatives/api/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
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
        const res = await Post('login', body);
        return res;
    }
)

const authReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = AsyncStorage.getItem('token')
        },
        logout: (state) => {
            state.token = null
            AsyncStorage.removeItem('token')
        }

    },
    extraReducers: {
        [signupUser.fulfilled]: (state, action) => {
            state.loading = false;
            if (action.payload.message) {
                state.error = action.payload.message;
                alert(action.payload.message)
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
                state.user.token = token;
                AsyncStorage.setItem('token', token);
                alert(action.payload.message)
            } else {
                state.error = message;
            }
        },
        [loginUser.pending]: (state) => {
            state.loading = true;
        }
    }
})

export const { addToken, logout } = authReducer.actions
export default authReducer.reducer