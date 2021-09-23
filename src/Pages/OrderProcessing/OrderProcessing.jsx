import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../OrderProcessing/OrderProcessing.module.scss";
import styles from "../../styles/styles.module.scss";
import ModalOrder from "../../components/ModalOrder/ModalOrder";
import cardImage from "../../assets/image/summer.png";
import { orderSchema } from "../../components/Validations/UserValidation";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../redux/actions/cart_action";
const OrderProcessing = () => {
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [values, setValues] = useState();
  const onChange = (e) => {
    setValues((oldState) => {
      const newObj = { ...oldState };
      newObj[e.target.name] = e.target.value;
      return newObj;
    });
  };
  // JSON.parse(JSON.stringify({}));
  const formik = useFormik({
    initialValues: {
      first_name: "",
      surname: "",
      phone: "",
      country: "",
      city: "",
    },
    validationSchema: orderSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 1000);
      setShowInfo((prev) => !prev);
    },
  });
  console.log(formik.values);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openState = useSelector((state) => state.cartReducer.openCart)
  const dispatch = useDispatch()
  console.log(openState);
  useEffect(() => {
    dispatch(openCart())
  }, [])

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.breadCrumbs}>
          <Link to="/">
            <span className={styles.breadCrumbs__left_col}>
              Главная /&ensp;
            </span>
          </Link>
          <Link to="#">
            <span className={styles.breadCrumbs__right_col}>
              Товары /&ensp;
            </span>
          </Link>
          <Link to="#">
            <span className={styles.breadCrumbs__right_col}>
              {""}/&ensp;
            </span>
          </Link>
          <Link to="#">
            <span className={styles.breadCrumbs__right_col}>
              {""}/&ensp;
            </span>
          </Link>
        </div>
      </div>
      <div className={classes.main_container}>
        <div className={classes.main_container__inner}>
          <div className={classes.main_container__order_composition}>
            <section
              className={classes.main_container__inner__header}
            >
              <h4>Оформление заказа</h4>
            </section>

            {showInfo ? (
              <>
                <div className={classes.address_title}>
                  Адрес доставки
                </div>
                <p>
                  Александр Пистолетов &#44; +996 (708) 567
                  890
                </p>
                <p>Кыргызстан &#44; &nbsp;Бишкек</p>
                <button className={classes.edit_btn}>
                  Редактировать
                </button>
              </>
            ) : (
              <div className={classes.ordering}>
                <form onSubmit={formik.handleSubmit}>
                  <div className={classes.ordering__rows}>
                    <section>
                      <p>Ваше имя</p>
                      <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.first_name ||
                          ""
                        }
                      />
                      {formik.touched.first_name &&
                        formik.errors.first_name ? (
                        <p className={classes.alert}>
                          {formik.errors.first_name}
                        </p>
                      ) : null}
                    </section>
                    <section>
                      <p>Ваша Фамилия</p>
                      <input
                        id="surname"
                        type="text"
                        name="surname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.surname || ""
                        }
                      />
                      {formik.touched.surname &&
                        formik.errors.surname ? (
                        <p className={classes.alert}>
                          {formik.errors.surname}
                        </p>
                      ) : null}
                    </section>
                  </div>
                  <div className={classes.ordering__rows}>
                    <section>
                      <p>Номер телефона</p>
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.phone || ""
                        }
                      />
                      {formik.touched.phone &&
                        formik.errors.phone ? (
                        <p className={classes.alert}>
                          {formik.errors.phone}
                        </p>
                      ) : null}
                    </section>
                    <section>
                      <p>Страна</p>
                      <input
                        id="country"
                        type="text"
                        name="country"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={
                          formik.values.country || ""
                        }
                      />
                      {formik.touched.country &&
                        formik.errors.country ? (
                        <p className={classes.alert}>
                          {formik.errors.country}
                        </p>
                      ) : null}
                    </section>
                  </div>
                  <div className={classes.ordering__rows}>
                    <section>
                      <p>Город</p>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city || ""}
                      />
                      {formik.touched.city &&
                        formik.errors.city ? (
                        <p className={classes.alert}>
                          {formik.errors.city}
                        </p>
                      ) : null}
                    </section>
                    <button
                      className={classes.save_btn}
                      type="submit"
                    >
                      Сохранить адрес
                    </button>
                  </div>
                </form>
              </div>
            )}

            <section>
              <div className={classes.order_title}>
                <p>Состав заказа</p>
              </div>
              {/* MAP IS HERE */}
              {openState.map((item, index) => {
                return (
                  <div className={classes.card_wrapper} key={item.id} key={index}>
                    <div
                      className={
                        classes.card_wrapper__image_wrapper
                      }
                    >
                      <img src={cardImage} alt="clothes" />
                    </div>
                    <div
                      className={classes.card_wrapper__right_col}
                    >
                      <span className={classes.title}>
                        {" "}
                        {item.title}
                      </span>

                      <div className={classes.remove}>
                        <div>&times;</div>
                      </div>

                      <span className={classes.composition}>
                        <p className={classes.greyFont}>
                          Артикул:
                        </p>
                        &nbsp;
                        <p className={classes.blackFont}>
                          PL984/dakota
                        </p>
                      </span>
                      <span className={classes.composition}>
                        <p className={classes.greyFont}>
                          Цвет:
                        </p>
                        &nbsp;
                        <p className={classes.blackFont}>
                          Бежевый
                        </p>
                      </span>
                      <span className={classes.composition}>
                        <p className={classes.greyFont}>
                          Количество товара в линейке: &nbsp;
                        </p>{" "}
                        <p className={classes.blackFont}>6ед</p>
                      </span>
                      <div className={classes.bottom_paragraph}>
                        <div className={classes.composition}>
                          <p className={classes.greyFont}>
                            Количество линеек:&nbsp;
                          </p>
                          <button
                            className={classes.decrement}
                          >
                            -
                          </button>
                          &nbsp;
                          <p className={classes.blackFont}>
                            20
                          </p>
                          &nbsp;
                          <button
                            className={classes.increment}
                          >
                            &#43;
                          </button>
                        </div>
                        <div className={classes.bottom_price}>
                          <span className={classes.prevPrice}>
                            {item.old_price} c.
                          </span>
                          <span
                            className={classes.currentPrice}
                          >
                            {item.price} c.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

            </section>
          </div>
          <div className={classes.right_column_card}>
            <div className={classes.right_column_card__inner}>
              <div>
                <div
                  className={
                    classes.right_column_card__inner__sum
                  }
                >
                  Итого
                </div>
                <div
                  className={
                    classes.right_column_card__inner__prices
                  }
                >
                  <div className={classes.all_prices}>
                    <span className={classes.left_text}>
                      Общая сумма
                    </span>
                    <span>12000s</span>
                  </div>
                  <div className={classes.all_prices}>
                    <span className={classes.left_text}>
                      Скидка
                    </span>
                    <span></span>
                  </div>
                  <div className={classes.all_prices}>
                    <span className={classes.left_text}>
                      Итог
                    </span>
                    <span>10000s</span>
                  </div>
                </div>
                <div className={classes.button_order}>
                  <button onClick={openModal}>
                    Оформить заказ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalOrder showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default OrderProcessing;
