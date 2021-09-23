import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./redux/reducers/auth_reducer";
import cartReducer from "./redux/reducers/cart_reducer";
import newsReducer from "./redux/reducers/news_reducer"
import hitReducer from "./redux/reducers/hit_reducer"
import newProductReducer from "./redux/reducers/newProduct_reducer";
import carouselReducer from './redux/reducers/carousel_reducer'
import aboutReducer from './redux/reducers/about_reducer'
import favReducer from './redux/reducers/favourite_reducer'
import searchReducer from './redux/reducers/search_reducer'
import registerReducer from './redux/reducers/register_reducer'
import profileReducer from './redux/reducers/profile_reducer'
import collectionReducer from './redux/reducers/collection_reducer'


const rootReducer = combineReducers({ 
    registerReducer,authReducer, cartReducer, newsReducer, hitReducer, newProductReducer,carouselReducer,
    aboutReducer,favReducer, searchReducer, profileReducer, collectionReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
