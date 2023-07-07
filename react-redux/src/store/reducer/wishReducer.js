
export const wishReducer = (state = [], action) => {
    switch (action.type) {
        case 'wish':
            return [...state, action.payload]
        default:
            return state
    }
}
/*  
export const reducer=(state={name:"lalit"},action)=>{
    switch(action.type){
            case 'change':
                return{
                  ...state,
                    wishname:action.payload
                }
            default:
                return state
        }
} */