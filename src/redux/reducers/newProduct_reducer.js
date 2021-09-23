import { ActionTypes } from "../constants/action_types";

const initialState = {
    newProducts: [],
    loading: true,
    error: ''
}

export const newProduct = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.NEWPRODUCT_REQUEST:
            return{
                ...state,
                loading: payload,
            }
        case ActionTypes.NEWPRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                newProducts: payload
            }
        case ActionTypes.NEWPRODUCT_ERROR:
            return{
                ...state,
                loading: false,
                error: payload,
            }
        
        default:
            return state;
    }
}
export default newProduct