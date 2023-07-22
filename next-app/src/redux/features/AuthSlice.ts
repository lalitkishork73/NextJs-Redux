import { createSlice,PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";

type AuthState={
    token:string;
    loading:boolean;
    error:string;
}

const initialState = {
    token: "",
    loading: false,
    error: ""
} as AuthState;

export const AuthSlice=createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:{}
})