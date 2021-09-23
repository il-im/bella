import classes from "./Nav.module.scss";
import search_icon from "../../../../assets/image/search-icon.svg";
import like_icon from "../../../../assets/image/fav-icon.svg";
import basket_icon from "../../../../assets/image/bag.svg";
import profile_icon from "../../../../assets/image/prof-icon.svg";
import logo from "../../../../assets/image/bella.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "../../Auth/Register/RegisterForm/RegisterForm";
import AuthForm from '../../Auth/AuthForm/AuthForm'
import { useState } from "react";
import Basket from '../../../../Pages/Basket/Basket'
import { openCart } from "../../../../redux/actions/cart_action";
import { getFavourite } from "../../../../redux/actions/favourite_action";


const Nav = ({ search, profile, register }) => {
  // const isAuthed = useSelector((state) => state.authReducer.login);
  const isAuthed = localStorage.getItem('token')
  const [activeState,setActiveState] = useState(1)
  console.log(window.location)
  function log() {
    if (isAuthed) {
      profile();
    }
  }
  const dispatch = useDispatch()
  const [basket, setBasket] = useState(false);
  const [nasketEmpty, setBasketEmpty] = useState(false)
  let handleBasketClick = () => {
    setBasket(!basket);
    dispatch(openCart())
    
    // if(setBasketEmpty == false){
    // }else{
    //   setBasket(false)
    // }

  };

  return (
    <>
      <nav className={classes.Nav}>
        <div className={classes.big__cont}>
          <div className={classes.drawerItems}>
            <ul>
              <li>
                <NavLink
                  to="/category"
                  activeClassName="navlinkSelected"
                  exact={true}
                >
                  Товары
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  activeClassName="navlinkSelected"
                >
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  activeClassName="navlinkSelected"
                >
                  Новости
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/info/delivery"
                  activeClassName="navlinkSelected"
                >
                  Доставка
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/info/contacts"
                  activeClassName="navlinkSelected"
                >
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={classes.logoDiv}>
            <img alt="logo" src={logo} />
          </div>
          <div>
            <ul>
              <li>
                <span
                  className={classes.search}
                  to="/"
                  onClick={search}
                >
                  <img alt="icon" src={search_icon} />
                  <span>Поиск</span>
                </span>
              </li>
              <li>
                <NavLink
                  className={classes.saved}
                  to="/saved"
                  activeClassName="navlinkSelected"
                >
                  <img alt="icon" src={like_icon} />
                  <span onClick={() => {dispatch(getFavourite())}}>Избранное</span>
                </NavLink>
              </li>
              <li>
                <span
                  className={classes.profile}
                  to="/profile"
                  onMouseOver={log}
                >
                  <img alt="icon" src={profile_icon} />
                    {isAuthed ? <Link to="/profile" onMouseOver={log}>
                                    Профиль
                                </Link>
                              : 
                                <Link to="/auth" onMouseOver={log}>
                                    Войти
                                </Link>
                    }
                </span>
              </li>
              <li>
                <span
                  onClick={handleBasketClick} 
                  className={classes.basket}
                  activeClassName="navlinkSelected"
                >
                  <img alt="icon" src={basket_icon} />
                  <span>Корзина</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          <Basket setBasket={setBasket} basket={basket} />
      <div style={{ display: "none" }}>
        <RegisterForm />
      </div>
    </>
  );
};
export default Nav;
