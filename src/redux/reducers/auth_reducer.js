import { ActionTypes } from "../constants/action_types";

const INITIAL_STATE = {
  state: false,
  login: [],
  loading: true,
  error: "",
};


const authReducer = (state = INITIAL_STATE, {type, payload}) => {
  // console.log(type, payload)
  switch (type) {
    case ActionTypes.LOGIN:
      state = true;
      return state;
    case ActionTypes.LOGOUT:
      state = false;
      return state;
    // --------------------
    case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: payload
            }
    case ActionTypes.LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            login: payload
        }
    case ActionTypes.LOGIN_ERROR:
        return {
            ...state,
            loading: false,
            error: payload
        }
    //----------------------
    default:
      return state;
  }
};

export default authReducer