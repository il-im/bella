import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const fetchNewProducts = () => dispatch => {
    const fetchNewRequest = () => ({ type: ActionTypes.NEWPRODUCT_REQUEST })
    const fetchNewSuccess = payload => ({ type: ActionTypes.NEWPRODUCT_SUCCESS , payload })
    const fetchNewFailure = error=> ({ type: ActionTypes.NEWPRODUCT_ERROR, payload: error })

    dispatch(fetchNewRequest)

    bella.get('/products/')
        .then(res => {dispatch(fetchNewSuccess(res.data.results)) })
        // .then(res => console.log(res.data.results, 'newProductsAction'))
        .catch(error => {dispatch(fetchNewFailure(error))})
}