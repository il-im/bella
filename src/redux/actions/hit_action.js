import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const fetchHit = () => dispatch =>{
    const fetchHitRequest = () => ({ type: ActionTypes.HIT_REQUEST })
    const fetchHitSuccess = payload => ({ type: ActionTypes.HIT_SUCCESS , payload })
    const fetchHitFailure = error=> ({ type: ActionTypes.HIT_ERROR, payload: error })

    dispatch(fetchHitRequest)

    bella.get("/ishit/")
        .then(response => {dispatch(fetchHitSuccess(response.data.results)) })
        // .then(response => console.log(response.data.results))
        .catch(error => fetchHitFailure(error))
}

export const handleGotoDetails = (data) => dispatch => {
    console.log(data, 'sad');
    dispatch({ type: ActionTypes.GO_TO_DETAILS_SUCCESS, payload: data})
}