import { ActionTypes } from "../constants/action_types";

const initialState = {
    register: [],
    error: "",
    loading: true,
}

export const registerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        //------------------------
        case "SET_FORM":
            return{
                ...state,
                registerForm:payload
            }
        case ActionTypes.REGISTER_REQUEST:
            return {
                ...state,
                loading: payload
            }
        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                register: payload
            }
        case ActionTypes.REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        //------------------------
        
        default:
            return state
    }
}
export default registerReducer