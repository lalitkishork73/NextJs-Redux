const initialState={
    name:'lalit'
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
            case 'change':
                return{
                  ...state,
                    name:action.payload
                }
            default:
                return state
        }
}