import React, { useEffect, useState } from "react";
import classes from "./Category.module.scss";
import { Link } from "react-router-dom";
import styles from "../../styles/styles.module.scss";
import NavigationTitleAndSortPopup from "../../components/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup";
import { ProductCart, PagesBtn } from "../../components";
import arrow from "../../assets/image/arrow.png";
import { useDispatch, useSelector } from "react-redux";
// import { fetchGetToCategory } from "../../redux/actions/collection_action";
import dress_model from '../../assets/image/dress_model.svg'
import favourite from '../../assets/image/favourite.png'
import { fetchCollection } from "../../redux/actions/collection_action";


const categorySortItems = [
  { name: "По алфавиту", type: "alphabet", order: "desc" },
  { name: "По обновлению", type: "update", order: "desc" },
  { name: "По цене (высокая > низкая) ", type: "price", order: "desc" },
  { name: "По цене (низкая > высокая)", type: "name", order: "asc" },
];

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [visibleMultilevel, setVisibleMultilevel] = useState(false);
  // const [wobble, setWobble] = useState(0);
  let arr = [];
  for (let i = 0; i < 12; i++) {
    arr.push(i);
  }
  const [count, setCount] = React.useState(arr);

  const toggleMultilevel = () => {
    setVisibleMultilevel(!visibleMultilevel);
    // setWobble(1);
  };
  const dispatch = useDispatch()
  const collectionGet = useSelector((state) => state.collectionReducer.collectionGet)
  // console.log(collectionGet, 'gg');
  const category = useSelector((state) => state.collectionReducer.collection)
  const categoryParent = category.slice(7, 11)
  useEffect(() => {
    dispatch(fetchCollection())
  }, [])
  console.log(categoryParent, 'parent');

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.breadCrumbs}>
          <Link to="/">
            <span className={styles.breadCrumbs__left_col}>
              Главная /&ensp;
            </span>
          </Link>
          <span className={styles.breadCrumbs__right_col}>
            Товары
          </span>
        </div>
      </div>
      <div className={classes.category_wrap}>
        <div className={classes.category_wrap__inner}>
          <div className={classes.inner__multilevel}>
            <button
              className={classes.multilevel__btn}
              onClick={toggleMultilevel}
            >
              <span className={classes.multilevel__btn__span}>
                Категории
              </span>
              <img
                src={arrow}
                alt="arrow_icon"
                className={classes.arrow_btn}
              // wobble={wobble}
              />
            </button>
            <div className={classes.multilevel_fullWidth}>
              {categoryParent.map((item, i) => {
                return (
                  <div className={classes.item}>
                    <input
                      type="checkbox"
                      className={classes.id}
                      id={item.id}
                    />
                    <div className={classes.category_name_arrow}>
                      <label htmlFor={item.id}>{item.title}</label>
                      <img
                        src={arrow}
                        className={classes.arrow}
                        alt="arrow_icon"
                      />
                    </div>
                    <ul>
                      {item.children.map((chil, i) => {
                        return (
                          <li>
                            <Link className={classes.link} to="#">
                              {chil.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
              {/* END MAP OSEN */}
            </div>
            {visibleMultilevel && (
              <div className={classes.multilevel_toggle}>
                <div className={classes.item}>
                  <input
                    type="checkbox"
                    className={classes.id}
                    id="F"
                  />
                  <div
                    className={classes.category_name_arrow}
                  >
                    <label htmlFor="F">
                      Верхняя одежда
                    </label>
                    <img
                      src={arrow}
                      className={classes.arrow}
                      alt="arrow_icon"
                    />
                  </div>
                  <ul>
                    <li>
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Верхняя одежда
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Верхняя одежда
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Верхняя одежда
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={classes.item}>
                  <input
                    type="checkbox"
                    className={classes.id}
                    id="H-A"
                  />
                  <div
                    className={classes.category_name_arrow}
                  >
                    <label htmlFor="H-A">
                      Верхняя одежда
                    </label>
                    <img
                      src={arrow}
                      className={classes.arrow}
                      alt="arrow_icon"
                    />
                  </div>
                  <ul>
                    <div className={classes.item}>
                      <input
                        type="checkbox"
                        id="D-Z"
                        className={classes.id}
                      />
                      <div
                        className={
                          classes.category_name_arrow
                        }
                      >
                        <label htmlFor="D-Z">
                          Футболки
                        </label>
                        <img
                          src={arrow}
                          className={classes.arrow}
                          alt="arrow_icon"
                        />
                      </div>
                      <ul>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.item}>
                      <input
                        type="checkbox"
                        id="B-Y"
                        className={classes.id}
                      />
                      <div
                        className={
                          classes.category_name_arrow
                        }
                      >
                        <label htmlFor="B-Y">
                          Рубашки
                        </label>
                        <img
                          src={arrow}
                          className={classes.arrow}
                          alt="arrow_icon"
                        />
                      </div>
                      <ul>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Клетчатые
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Белые
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Цветные
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <span
                      className={
                        classes.category_name_arrow
                      }
                    >
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Шорты
                      </Link>
                    </span>
                    <div className={classes.item}>
                      <input
                        type="checkbox"
                        className={classes.checkbox}
                        id="D-C"
                      />
                      <div
                        className={
                          classes.category_name_arrow
                        }
                      >
                        <label htmlFor="D-C">
                          Платье
                        </label>
                        <img
                          src={arrow}
                          className={classes.arrow}
                          alt="arrow_icon"
                        />
                      </div>
                      <ul>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Обувь
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Аксессуары
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className={classes.category_wrap__container}>
            <div className={classes.popup_container}>
              <div
                className={
                  classes.category_wrap__container__secondary
                }
              >
                <div
                  className={
                    classes.category_wrap__container__inner
                  }
                >
                  <NavigationTitleAndSortPopup
                    item={categorySortItems}
                  />
                </div>
              </div>
              <div
                className={
                  classes.category_wrap__container__product
                }
              >
              {/*categoryParent*/}  {collectionGet.map((item, index) => {
                  return (
                    <>
                      <ProductCart item={item} key={index + 10} />
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.pageWrapper}>
        <PagesBtn />
      </div>
    </div>
  );
};

export default Category;
