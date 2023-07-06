"use client"

import {createSlice} from "@reduxjs/toolkit"

const initialState={
    count:0
}

export const userManagementSlice = createSlice({
    name:"countManagement",
    initialState,
    reducers:{
        inc:(state,action)=>{
            if(action.type==='inc'){
                state.count+1
            }
        }

    }
})