const initState = {
    text: '',
    myWishes: [{ _id: 1, wish: "loading" }]
}
const reducer = (state = initState, action) => {

    switch (action.type) {
        case "UPDATE_INPUT":
            return { ...state, text: action.payload }

        case "ADD_WISH":
            return { ...state, myWishes: [...state.myWishes, action.payload] }

        case "GET_WISH":
            return { ...state, myWishes: action.payload }

        case "REMOVE_WISH":
            console.log(action.payload)
            const update = state?.myWishes.filter(wish => wish?._id !== action.payload?._id);
            return {
                ...state,
                myWishes: update
            }
        default: return state
    }
}


export default reducer;