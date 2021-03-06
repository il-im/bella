import React from "react";
import { Footer, Layout } from "./containers";
import { Route, Switch } from "react-router-dom";
import { NewsDetails, ProductCarousel, ProductCart } from "./components";
import "./styles/global.module.scss";
import {
  AboutUs,
  Favorite,
  Main,
  Products,
  Category,
  CollectionPage,
  OrderProcessing,
  Profile,
  MyOrders,
  Order,
  SearchResults,
  PageNotFound,
  Info,
  News,
} from "./Pages";
import RegisterForm from "./containers/NavigationMenuBar/Auth/Register/RegisterForm/RegisterForm";
import AuthForm from "./containers/NavigationMenuBar/Auth/AuthForm/AuthForm";

function App() {
  return (
    <>
      <Layout>
        <div id="recaptcha-container"></div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/saved" component={Favorite} />
          <Route path="/info/:id" component={Info} />
          <Route exact path="/news" component={News} />
          <Route exact path="/search" component={SearchResults} />
          <Route exact path="/news_details/:id" component={NewsDetails}/>
          <Route exact path="/collections" component={CollectionPage}/>
          <Route exact path="/details" component={Products} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/ordering" component={Order} />
          <Route exact path="/similarProducts" component={ProductCarousel}/>
          <Route exact path="/order" component={OrderProcessing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/myOrders" component={MyOrders} />
          {/* <Route path="/" component={PageNotFound} /> */}
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/auth" component={AuthForm} />


        </Switch>
        {/* <div className={data ? "modal" : "hide"}>
          <p>{response.message}</p>
          <button onClick={()=>dispatch({type:"CLEAR_RESPONSE"})}>OK</button>
        </div> */}
      </Layout>
      <Footer />
    </>
  );
}

export default App;
