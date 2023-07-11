
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
            const update = state.myWishes.filter(wish => wish._id !== action.payload._id);
            console.log(update)
            return {
                ...state,
                myWishes: update
            }
        default: return state
    }
}


export default reducer;