import { ActionTypes } from "../constants/action_types";

const initialState = {
    search: [],
    loading: true,
    error: ''
}

export const searchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_REQUEST:
            return {
                ...state,
                loading: payload
            }
        case ActionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                search: payload
            }
        case ActionTypes.SEARCH_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
                
        default:
            return state;
    }
}
export default searchReducer