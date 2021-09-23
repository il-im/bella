import React, { useEffect } from "react";
import style from "./BasketCart.module.scss";
import basketCartImg from "../../assets/image/basketCartImg.png";
import { useDispatch, useSelector } from "react-redux";
import basketEmpty from "../../assets/ProductImg/basketEmpty.png";
import { openCart,addToCart } from "../../redux/actions/cart_action";
import { Link } from "react-router-dom";

const BasketCart = ({setBasket, basket}) => {
    const openState = useSelector((state) => state.cartReducer.openCart)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(openCart())
    }, [])

    let basketFull = (
        openState.map((item, index) => {
            console.log(item , 'basket');
            return(
                <>
                <div className={style.cart}>
                    <div className={style.cart__mother}>
                        <div className={style.cart__blockOne}>
                            <img src={basketCartImg} alt="" />
                        </div>
                        <div className={style.cart__blockTwo}>
                            <h1 className={style.cart__blockTwo__title}>
                                {item.title}
                            </h1>
                            <p className={style.cart__blockTwo__size}>Размер:
                            {item.size.map((size, index) => {
                                return (
                                         <span> {size.size}</span> 
                                        )
                                    })}
                                    </p>
                            <p className={style.cart__blockTwo__color}>Цвет:
                                {item.color.map((color, index) => {
                                    return (
                                        <span 
                                            style={{background: color.color, 
                                                    width: '10px',height: '10px',
                                                    marginLeft: '4px',
                                                    marginTop: '6px',
                                                    marginRight: '4px'}}/>
                                    )
                                })}
                            </p>
                            <div className={style.cart__blockTwo__btns}>
                                <button className={style.cart__blockTwo__btnMinus}>
                                    -
                                </button>
                                <p className={style.cart__blockTwo__btnText}>
                                    {item.count}
                                </p>
                                <button className={style.cart__blockTwo__btnMPlus}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={style.cart__blockThree}>
                        <div>
                            <button className={style.cart__blockThree__close} onClick={() => dispatch(addToCart(item.id))} >
                                <h1>&times;</h1>
                            </button>
                            <div className={style.cart__blockThree__price}>
                                <p> {item.price} c.</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                </>
            )
        })
        
    )

    return (
        <>
            {openState.length ? (
                <>
                {basketFull}
                    <div className={style.cart__modalPrice}>
                        <h1 className={style.cart__modalPrice_titleOne}>
                        Всего товаров:  <span 
                                        className={style.span}>{openState.reduce(function(prev, current) {
                                                return  prev + +current.price 
                                                },0)}
                                        с.</span>
                        </h1>
                        <h1 className={style.cart__modalPrice_titleTwo}>
                        Итого: <span 
                                className={style.span}>{openState.reduce(function(prev, current) {
                                        return  prev + +current.price 
                                        },0)}
                                с.</span>
                        </h1>
                        <div className={style.cart__modalPrice_Left}>
                            <Link to="/order" onClick={() => setBasket(false)}>
                                <button className={style.cart__modalPrice_Btn}>Оформить заказ</button>
                            </Link>
                            <h1 className={style.cart__modalPrice_titleThree}>Продолжить покупку</h1>
                        </div>
                    </div>
                </>
                
            ) : (
                <div className={style.modal}>
                      <div className={style.modal__inner}>
                          <div className={style.modal__inner__container}>
                              <img src={basketEmpty} alt="" />
                              <h1>Ваша корзина пуста</h1>
                              <button>Продолжить покупки</button>
                          </div>
                      </div>
                 </div>
            )}
        </>
    );
};

export default BasketCart;
  //const openCart = openCart.slice()
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