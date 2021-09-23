import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const fetchNewsPosts = () => dispatch => {
    const fetchNewsRequest = () => ({ type: ActionTypes.NEWS_REQUEST })
    const fetchNewsSuccess = payload => ({ type: ActionTypes.NEWS_SUCCESS , payload })
    const fetchNewsFailure = error=> ({ type: ActionTypes.NEWS_ERROR, payload: error })

    dispatch(fetchNewsRequest)

    bella.get("/news/")
        .then(res => {dispatch(fetchNewsSuccess(res.data.results))})
        .catch(error => {dispatch(fetchNewsFailure(error))})
}