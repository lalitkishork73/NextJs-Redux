

import { createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "lalit",
    age: 25,
    status: "coder"
}

export const FetchUser = createAsyncThunk('users/fetch',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
        return result[Math.floor(Math.random() * 10)].name
    })


const userReducerr = createSlice({
    name: "naruto",
    initialState: initialState,
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload
        },
        updateAge: (state, action) => {
            state.age = action.payload
        },
        updateStatus: (state, action) => {
            state.status = action.payload
        },
    },
    extraReducers: {
        [FetchUser.fulfilled]: (state, action) => {
            state.name = action.payload
        },
        [FetchUser.pending]: (state, action) => {
            state.name = 'Loading!!'
        },
        [FetchUser.rejected]: (state, action) => {
            state.name = 'try again later'
        },
    }


})
export const { updateAge, updateName, updateStatus } = userReducerr.actions
export default userReducerr.reducer










//Old Method
/* export const userAge = (state = initialState, action) => {
    if (action.type === "UPDATE_AGE") {
        return {
            ...state,
            age: action.payload
        }
    }
    return state

} */

//New Method
/* 
export const user = createReducer(initialState, (builder) => {
    builder.addCase("UPDATE_AGE", (state, action) => {
        state.age = state.age + 1
    })
    builder.addCase("UPDATE_NAME", (state, action) => {
        state.name = action.payload
    })
    builder.addCase("UPDATE_STATUS", (state, action) => {
        state.status = action.payload
    })

    builder.addCase("FETCH_NAME", (state, action) => {
        state.name = action.payload
    })
}) */

