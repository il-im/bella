import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const getFavourite = () => dispatch => {
    const fetchGetFavRequest = () => ({ type: ActionTypes.GET_FAV_REQUEST })
    const fetchGetFavSuccess = (data) => ({ type: ActionTypes.GET_FAV_SUCCESS, payload: data})
    const fetchGetFavError = (err) => ({ type: ActionTypes.GET_FAV_ERROR , payload: err})

    dispatch(fetchGetFavRequest)
    // bella.get('/favorites​/')
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error.response))
    fetch("http://34.125.22.50/favorites/", {
        headers:{
            Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`
        }
    }).then(res=>res.json())
      .then(data=>{dispatch(fetchGetFavSuccess(data.results))})
      .catch(err => {dispatch(fetchGetFavError(err))})
}

export const postFavourite = (id) => dispatch => {
    const fetchPostFavRequest = () => ({ type: ActionTypes.POST_FAV_REQUEST })
    const fetchPostFavSuccess = (res) => ({ type: ActionTypes.POST_FAV_SUCCESS , payload: res })
    const fetchPostFavError = (err) => ({ type: ActionTypes.POST_FAV_ERROR , payload: err})

    dispatch(fetchPostFavRequest)

    // bella.post(`products/${favID}/favorite`)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err.response))
    fetch(`http://34.125.22.50/products/${id}/favorite/`, {
        method: 'POST',
        headers:{
            Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`
        }
    })
        // .then(res=> res.json())
      .then(res => {dispatch(fetchPostFavSuccess(res))})
      .catch(err => {dispatch(fetchPostFavError(err))})

}