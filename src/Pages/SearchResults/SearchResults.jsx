import React from "react";
import { Link } from "react-router-dom";
import classes from "./SearchResults.module.scss";
import { ProductCart, PagesBtn } from "../../components";
import styles from "../../styles/styles.module.scss";
import SearchCart from '../../components/SearchCart/SearchCart'
import { search } from "../../assets";
import { useSelector } from "react-redux";

const SearchResults = () => {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr.push(i);
  }

  const [count, setCount] = React.useState(arr);
  const search = useSelector((state) => state.searchReducer.search)
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.breadCrumbs}>
          <Link to="/">
            <span className={styles.breadCrumbs__left_col}>
              Главная /&ensp;
            </span>
          </Link>
          <Link to="/search">
            <span className={styles.breadCrumbs__right_col}>
              Результаты поиска
            </span>
          </Link>
        </div>
      </div>
      <div className={classes.main_container}>
        <div className={classes.main_container__inner}>
          <h4>Результаты поиска</h4>
          <p>Найдено {search.length} моделей</p>
          <div className={classes.main_container__inner__cards}>
            <div className={classes.wrap__container}>
              <SearchCart/> ;
            </div>
          </div>
          <PagesBtn />
        </div>
        {/* <h4>Ничего не найдено</h4> */}
      </div>
    </>
  );
};

export default SearchResults;
