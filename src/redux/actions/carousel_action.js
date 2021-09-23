import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const fetchCarousel = () => dispatch =>{
    const fetchCarouselRequest = () => ({ type: ActionTypes.CAROUSEL_REQUEST })
    const fetchCarouselSuccess = payload => ({ type: ActionTypes.CAROUSEL_SUCCESS , payload })
    const fetchCarouselFailure = error=> ({ type: ActionTypes.CAROUSEL_ERROR, payload: error })

    dispatch(fetchCarouselRequest)
    bella.get("")
        .then(response => {dispatch(fetchCarouselSuccess(response.data.results))})
        .catch(error => {dispatch(fetchCarouselFailure(error)) })
}