import React from "react";
import style from "./Basket.module.scss";
import BasketCart from "../../components/BasketCart/BasketCart";
import { useSelector } from "react-redux";

const Basket = ({ setBasket, basket, open, closeDrawer }) => {
    const carts = useSelector((state) => state.cartReducer.carts)

    return ( 
        <>
            { basket ? (
                <div className={style.mainModal} onClick={(e) => setBasket(false)}>
                    {/* <div className={style.mainModal__preMain}> */}
                        <div className={style.mainModal__inner} onClick={(e) => e.stopPropagation()}>
                            <div className={style.mainModal__inner__container}>
                                <BasketCart basket={basket} setBasket={setBasket}/>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            ) :  (
                null
            )} 
        </>
    );
};

export default Basket;
