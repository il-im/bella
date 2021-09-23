import { ActionTypes } from "../constants/action_types";

const initialState = {
    about: [],
    loading: true,
    error: ''
}

export const aboutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ABOUT_REQUEST:
            return {
                ...state,
                loading: payload
            }
        case ActionTypes.ABOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                about: payload
            }
        case ActionTypes.ABOUT_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
                
        default:
            return state;
    }
}
export default aboutReducer