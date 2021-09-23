import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const fetchAboutUs = () => dispatch => {
    const fetchAboutRequest = () => ({ type: ActionTypes.ABOUT_REQUEST })
    const fetchAboutSuccess = payload => ({ type: ActionTypes.ABOUT_SUCCESS , payload })
    const fetchAboutFailure = err=> ({ type: ActionTypes.ABOUT_ERROR, payload: err })

    dispatch(fetchAboutRequest) 
    // bella.get('/about_us​/')
    //     .then(res => {dispatch(fetchAboutSuccess(res.data.response))})
    //     .catch(err => console.log(err.response))
    fetch("http://34.125.22.50/about_us", {
        headers:{
            Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`
        }
    }).then(res=>res.json())
      .then(data=>{dispatch(fetchAboutSuccess(data.results))})
      .catch(err => {dispatch(fetchAboutFailure(err))})
      // .then(data => console.log(data.results, 'about'))
}