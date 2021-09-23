import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

export const handleRegister = (values ,history) => dispatch => {
  dispatch({ type: ActionTypes.REGISTER_REQUEST });
  
  // fetch('http://34.125.22.50/register/', {
  //   method: 'POST',
  //   body: JSON.stringify(values),
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // })
  //   .then(res => res.json())
  //   .then(data =>  localStorage.setItem(`Token`,JSON.stringify(res.data.access)))
  //   .catch(err => console.log(err.response))
  bella.post('/register/', values)
    .then(res =>  {localStorage.setItem(`token`, JSON.stringify(res.data.access)); history.push('/')})
    .catch(err => console.log(err.response))
}
