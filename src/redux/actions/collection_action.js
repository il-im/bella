import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const fetchCollection = () => dispatch => {

    dispatch({ type: ActionTypes.COLLECTION_REQUEST})

    bella.get('/categories/')
        // .then(res => console.log(res.data.results))
        .then(res => {dispatch({ type: ActionTypes.COLLECTION_SUCCESS ,payload: res.data.results}) })
        .catch(err => {dispatch({ type: ActionTypes.COLLECTION_ERROR ,payload: err})})
}

export const fetchGetToCategory = (idCategory) => dispatch => {
    const id = idCategory
    dispatch({ type: ActionTypes.GET_TO_COLLECTION_REQUEST })
    console.log(id,'action');
    bella.get(`/products/?category=${id}`)
        .then(res => {dispatch({ type: ActionTypes.GET_TO_COLLECTION_SUCCESS, payload: res.data.results}) })
        .catch(err => {dispatch({ type: ActionTypes.GET_TO_COLLECTION_ERROR, payload: err}) })
}