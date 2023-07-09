/* import { getData } from '../../api/api' 
import axios from 'axios'

 */

export function action_input(input) {
    return {
        type: "UPDATE_INPUT",
        payload: input
    }
}

export function action_Remove_Wish(id) {
    return (dispatch) => {
        fetch(`/remove/${id}`, { method: "delete" }).then(res => { res.json() })
            .then(data => {
                dispatch({
                    type: "REMOVE_WISH",
                    payload: data
                })

            })
    }
}

export function action_Add_Wish(e) {
    return (dispatch) => {
        e.preventDefault();

        var data = new URLSearchParams();
        for (const pair of new FormData(e.target)) {
            console.log("wish", pair[1])
            data.append("wish", pair[1])
        }
        console.log(data)
        fetch('/sent', {
            method: 'POST',
            body: data
        }).then(res => res.json())
            .then((data) => {
                dispatch(
                    {
                        type: "ADD_WISH",
                        payload: data.data
                    })
            })
    }
}

export function action_Get_wish() {
    // const data = getData();
    return (dispatch) => {
        fetch('/data').then(res => res.json())
            .then(data => {
                dispatch(
                    {
                        type: "GET_WISH",
                        payload: data.data
                    }
                )
            })
    }

}