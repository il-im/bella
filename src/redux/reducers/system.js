const INITIAL_STATE={

}

export const system = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case "SUCCESS":
            return{
                data:action.payload
            }
            case "CLEAR_RESPONSE":
                return {}
        default:
            return state
    }
}