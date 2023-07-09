/* export function action_change_name(name){
    return {
        type:'change',
        payload:name 
    }
} */

export function action_change_name(num) {
    return async (dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const ress = await res.json()
        dispatch({
            type: 'change',
            payload: ress[num].name
        })


    }
}
export function action_add_wish(add) {
    return {
        type: 'wish',
        payload: add
    }


}

