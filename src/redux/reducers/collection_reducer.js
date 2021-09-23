import { ActionTypes } from "../constants/action_types";

const initialState = {
    collection: [],
    collectionGet: [],
    loading: true,
    error: ''
}

export const collectionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.COLLECTION_REQUEST:
            return{
                ...state,
                loading: payload
            }
        case ActionTypes.COLLECTION_SUCCESS:
            return{
                ...state,
                loading: false,
                collection: payload,
            }
        case ActionTypes.COLLECTION_ERROR:
            return{
                ...state,
                loading: false,
                error: payload,
            }
//------------------------------------
        case ActionTypes.GET_TO_COLLECTION_REQUEST:
            return{
                ...state,
                loading: payload
            }
        case ActionTypes.GET_TO_COLLECTION_SUCCESS:
            return{
                ...state,
                loading: false,
                collectionGet: payload,
            }
        case ActionTypes.GET_TO_COLLECTION_ERROR:
            return{
                ...state,
                loading: false,
                error: payload,
            }
//---------------------------------              
        default:
            return state;
    }
}
export default collectionReducer