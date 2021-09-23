import classes from "./Search.module.scss"
import close_img from "../../assets/image/close.svg"
import { useState } from "react";
import { useCallback } from "react";
import SearchCart from "../SearchCart/SearchCart";
import { useHistory } from "react-router-dom";
import { handleChange } from "../../redux/actions/search_action";
import { useDispatch } from "react-redux";

const Search = ({close}) => {
  const [search, setSearch] = useState({
    search: ''
  })
  const history = useHistory()
  // const debounce = (func) => {
  //   let timer;
  //   return function (...arg) {
  //     const context = this;
  //     if(timer) clearTimeout(timer)
  //     timer = setTimeout( () => {
  //       timer = null
  //       func.apply(context, arg);
  //     }, 400)
  //   }
  // }
  // const handleChange = (event) => {
  //   const {value} = event.target;
  //   fetch(`http://34.125.22.50/products/?search=${value}`, {
  //     headers:{
  //       Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(json => {setSearch(json.results); history.push('/search')})
  //   .catch(err => console.log(err.response))
  // }
  // const optimisedVersion = useCallback(debounce(dispatch((handleChange( search, history)))), []) 
  const dispatch =useDispatch()

  const onchangeHandlerSearch = (name,value) => {

    setSearch({
      [name]: value
    })
    
    dispatch(handleChange( search, history))
  }
  

  return ( 
      <>
        <div className={classes.Search}>
          <input
           type="text"
            name="search" 
            placeholder="Искать" 
          onChange={({target:{name,value}})=>onchangeHandlerSearch(name,value)} />
          <img alt="close" src={close_img} onClick={close}/>
        </div> 
        {/* {search?.length > 0 && 
        <div className={classes.searchResult}>
          {search?.map((el, i) => 
            <div key={i} className={classes.searchResult_inner}>
                <span>{el.title}</span>
                <SearchCart key={i} el={el}/>
            </div>)}
        </div>} */}
      </>
  );
}
 
export default Search;