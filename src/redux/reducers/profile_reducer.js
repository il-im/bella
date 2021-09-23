import { ActionTypes } from "../constants/action_types"

const initialState = {
    profile: {},
    loading: true,
    err: ''
}
export const profileReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.PROFILE_REQUEST:
            return{
                ...state,
                loading: payload,

            }
        case ActionTypes.PROFILE_SUCCESS:
            return{
                ...state,
                loading: false,
                profile: payload
            }
        case ActionTypes.PROFILE_ERROR:
            return{
                ...state,
                loading: false,
                err: payload
            }
            case ActionTypes.CHANGE_NAME:
                return{
                    ...state,
                    profile: {...state.profile, [payload.name]: payload.value},
                }
    
        default:
            return state;
    }
}
export default profileReducer