import React, { useEffect } from "react";
import style from "./Products.module.scss";
import lock from "../../assets/lock_nextImg/lock.png";
import VerticalSlider from "../../components/VerticalSlider/VerticalSlider";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
// import ProductImg from '../../assets/ProductImg/vertical1.png'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { useDispatch, useSelector } from "react-redux";
import { handleGotoDetails } from "../../redux/actions/hit_action";

const Products = () => {
  // const dispatch = useDispatch()
  const details = useSelector((state) => state.hitReducer.details)
  console.log(details.title, 'details');
  // useEffect(() => {
  //   dispatch(handleGotoDetails())
  // })

  return (
    <>
      <BreadCrumbs />
      <div className={style.w_100}>
        {/* {Object.values(details).map((item, index) => {
          return ( */}
        <div className={style.main} >
          <div className={style.main__carousel}>
            <VerticalSlider />
          </div>
          <div className={style.main__descriptions}>
            <h1 className={style.main__desTitle}>
              {details.title}
            </h1>
            <p>
              Артикул:{" "}
              <span className={style.main__span}>
                Платье PL984/dakota
              </span>{" "}
            </p>
            <p>
              Количество в линейке:
              <span className={style.main__span}>1</span>
            </p>
            <div className={style.main__colorsDiv}>
              Цвет:
              {details.color.map((item, i) => {
                return (
                  <span className={style.main__colorsHover}>
                    <span
                      className={style.main__colors}
                      style={{ background: item.color }}
                    ></span>
                  </span>
                )
              })}
            </div>
            <div className={style.main__priceDiv}>
              <h2 className={style.main__price}> {details.price} сом</h2>
              <h2 className={style.main__xPrice}> {details.old_price} сом</h2>
            </div>
            <h1 className={style.main__aboutProduct}>О товаре</h1>
            <p className={style.main__span}>
              {details.description}
            </p>
            <div className={style.main__typeOfProduct}>
              <div className={style.main__typeOfProductDiv}>
                <p>
                  Зазмерный ряд:{" "}
                  {details.size.map((item, i) => {
                    return (
                      <span className={style.main__span}>{item.size}</span>
                    )
                  })}
                </p>
                <p>
                  Длина:{" "}
                  <span className={style.main__span}>113 См</span>
                </p>
              </div>
              <div className={style.main__typeOfProductDiv}>
                <p>
                  Состав ткани:{" "}
                  <span className={style.main__span}>
                    Полиэстер
                  </span>
                </p>
                <p>
                  Фасон :{" "}
                  <span className={style.main__span}>
                    А-Силуэт
                  </span>
                </p>
              </div>
            </div>
            <button className={style.main__addToBasketBtn}>
              <img src={lock} alt="lock" />
              Добавить в корзину
            </button>
          </div>
        </div>
        {/* )
        })} */}
      </div>
      <ProductCarousel />
    </>
  );
};

export default Products;
