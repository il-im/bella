import { ActionTypes } from "../constants/action_types"
import bella from '../../adapters/axios.config'

// export const addToCart = (carts, product, productID) => dispatch =>{

//     const cartsItems = carts.slice()
//     let productAlreadyInCart = false;

//     cartsItems.forEach(el => {
//         if(el.id === product.id){
//             el.count += 1
//             productAlreadyInCart = true
//         }
//     });

//     if(!productAlreadyInCart) {
//         cartsItems.push({...product, count: 1})
//     }
//     dispatch({ type: "ADD_TOCART", payload: cartsItems })
// }

export const removeCartItem = (carts, itemID) => dispatch => {
    const cartsItems = carts.slice().filter((el) => el.id !== itemID)
    dispatch({ type: "REMOVE_FROM_CART", payload: cartsItems })
}
// export const addToCart = ()

export const addToCart = (prodId) =>async dispatch => {
    const fetchBasketRequest = () => ({ type: ActionTypes.BASKET_REQUEST })
    const fetchBasketSuccess = (data) => ({ type: ActionTypes.BASKET_SUCCESS, payload: data })
    const fetchBasketError = (err) => ({ type: ActionTypes.BASKET_ERROR, payload: err })
    dispatch(fetchBasketRequest)
    // console.log(prodId);
   try {
       const token = JSON.parse(localStorage.getItem("token"))

    let response = await fetch("http://34.125.22.50/cart/", {
        method: 'POST',
        body: JSON.stringify({ id: prodId }),
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
        }
    });
    console.log(response)
    // let data =  await response.json();
    // console.log(data);
   }catch(err){
       console.log(err);
   }
    // bella.post('/cart/', {id: prodId})
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err.response))
}
export const openCart = () => dispatch => {
    const fetchOpenBasketRequest = () => ({ type: ActionTypes.OPEN_BASKET_REQUEST })
    const fetchOpenBasketSuccess = (data) => ({ type: ActionTypes.OPEN_BASKET_SUCCESS, payload: data })
    const fetchOpenBasketError = (err) => ({ type: ActionTypes.OPEN_BASKET_ERROR, payload: err })
    dispatch(fetchOpenBasketRequest)

    bella.get(`/cart/`)
        .then(response => { dispatch(fetchOpenBasketSuccess(response.data.products)) })
        .catch(err => { dispatch(fetchOpenBasketError(err)) })
}
