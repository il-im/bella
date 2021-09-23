import { ActionTypes } from "../constants/action_types";

const initialState = {
    carts: [],
    loading: true,
    error: "",

    openCart: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
    // console.log(payload, 'CART');
    switch(type){
        case ActionTypes.BASKET_REQUEST :
            return {
                ...state,
                loading: payload
            }
            case ActionTypes.BASKET_SUCCESS :
                return {
                    ...state,
                    loading: false,
                    carts: payload
            }
        case ActionTypes.BASKET_ERROR :
            return {
                ...state,
                loading: false,
                error: payload
            }


        case ActionTypes.OPEN_BASKET_REQUEST :
            return {
                ...state,
                loading: payload
            }
        case ActionTypes.OPEN_BASKET_SUCCESS :
            return {
                ...state,
                loading: false,
                openCart: payload
            }
        case ActionTypes.OPEN_BASKET_ERROR :
            return {
                ...state,
                loading: false,
                error: payload
            }

        case "REMOVE_FROM_CART" :
            return {
                ...state,
                carts: payload
            }
        default:
            return state
    }

}
export default cartReducer