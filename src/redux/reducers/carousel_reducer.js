import { ActionTypes } from "../constants/action_types";

const initialState = {
    carousel: [],
    loading: true,
    error: ''
}

export const carouselReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CAROUSEL_REQUEST:
            return {
                ...state,
                loading: payload
            }
        case ActionTypes.CAROUSEL_SUCCESS:
            return {
                ...state,
                loading: false,
                carousel: payload
            }
        case ActionTypes.CAROUSEL_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
                
        default:
            return state;
    }
}
export default carouselReducer