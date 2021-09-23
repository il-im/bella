import { ActionTypes } from "../constants/action_types";

const initialState = {
    details: [],
    hits: [],
    loading: true,
    error: ''
}

export const hitReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.HIT_REQUEST:
            return {
                ...state,
                loading: payload
            }
        case ActionTypes.HIT_SUCCESS:
            return {
                ...state,
                loading: false,
                hits: payload
            }
        case ActionTypes.HIT_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case ActionTypes.GO_TO_DETAILS_SUCCESS:
            return {
                ...state,
                details: payload
            }
        default:
            return state;
    }
}
export default hitReducer