import { ActionTypes } from "../constants/action_types";

  
export const handleChange = ({search}, history) => dispatch => {
    const fetchGetSearchRequest = () => ({ type: ActionTypes.SEARCH_REQUEST })
    const fetchGetSearchSuccess = (data) => ({ type: ActionTypes.SEARCH_SUCCESS, payload: data})
    const fetchGetSearchError = (err) => ({ type: ActionTypes.SEARCH_ERROR })
    // console.log(search)
    dispatch(fetchGetSearchRequest)


    fetch(`http://34.125.22.50/products/?search=${search}`, {
      headers:{
        Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    .then(res => res.json())
    .then(json => {
        // console.log(json.results)
        dispatch(fetchGetSearchSuccess(json.results) , history.push('/search')) 
    })
    .catch(err => console.log(err.response))

    // const optimisedVersion = useCallback(debounce(handleChange), []) 
    // console.log(optimisedVersion, 'optimisedVersion');
}
  