import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const logout = () => dispatch =>{
  localStorage.removeItem(`Token`)
}
export const handleSignIn = (options, history) => dispatch => {
  // console.log(options, 'options');
  const fetchRequest = () => ({ type: ActionTypes.LOGIN_REQUEST })
  const fetchSuccess = payload => ({ type: ActionTypes.LOGIN_SUCCESS , payload })
  const fetchFailure = error=> ({ type: ActionTypes.LOGIN_ERROR, payload: error })

  dispatch(fetchRequest)

  bella.post("/login/", options)
      .then(res=>{dispatch(fetchSuccess(res))
      history.push("/")
      console.log(res)
    localStorage.setItem('token', JSON.stringify(res.data.access))
  }).catch(err=>{
    console.log(err.response, 'auth');
    dispatch(fetchFailure(err))
  })

}
