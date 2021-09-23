import { ActionTypes } from "../constants/action_types";

const initialState = {
    getfav: [],
    postfav: [],
    loading: true,
    error: ''
}

export const favReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.POST_FAV_REQUEST:
            return {
                ...state,
                loading: payload
            }
        case ActionTypes.POST_FAV_SUCCESS:
            return {
                ...state,
                loading: false,
                getfav: payload
            }
        case ActionTypes.POST_FAV_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
//------------------------------------------GET
        case ActionTypes.GET_FAV_REQUEST:
            return {
                ...state,
                loading: payload
            }
        case ActionTypes.GET_FAV_SUCCESS:
            return {
                ...state,
                loading: false,
                postfav: payload
            }
        case ActionTypes.GET_FAV_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
                
        default:
            return state;
    }
}
export default favReducer