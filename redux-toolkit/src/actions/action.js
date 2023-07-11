/* 
export default (status) => {
    return {
        type: "UPDATE_STATUS",
        payload: status
    }
} */

/* import { createAction } from "@reduxjs/toolkit";

export const updateStatus = createAction('UPDATE_STATUS',)
export const fetchName = (c) => {
    return async (dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
        dispatch({
            type: 'FETCH_NAME',
            payload: result[c].name
        })
    }
}
 */