import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const handleProfile = () => dispatch => {
    dispatch({ type: ActionTypes.PROFILE_REQUEST})

    bella.get('/profile/')
        .then(res => {dispatch({ type: ActionTypes.PROFILE_SUCCESS, payload: res.data}) } )
        .catch(err => {dispatch({ type: ActionTypes.PROFILE_ERROR, payload: err })} )
}
export const handlePut = (values) => dispatch => {
    dispatch({ type: ActionTypes.PUT_PROFILE_REQUEST })

    bella.put('/profile/', values)
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
}
