import { ActionTypes } from "../constants/action_types";

const initialState = {
  posts: [],
  loading: true,
  error: '',
};


const newsReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.NEWS_REQUEST:
            return{
                ...state,
                loading: payload
            }
        case ActionTypes.NEWS_SUCCESS:
            return{
                ...state,
                loading: false,
                posts: payload
            }
        case ActionTypes.NEWS_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }
        default: 
            return state
    }
}
export default newsReducer