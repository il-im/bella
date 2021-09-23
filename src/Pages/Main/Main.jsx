import React, { useEffect } from "react";
import classes from "../../styles/styles.module.scss";
import red_coat from "../../assets/image/redCoat.png";
import yellowDress from "../../assets/image/yellowDress.png";
import pinkDress from "../../assets/image/pinkDress.png";
import blackDress from "../../assets/image/blackDress.png";
import News from '../../Pages/News/News'
import { TopSales, Advantages, Button, HeroSection, NewProducts, Collection, Subscription } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollection, fetchGetToCategory } from "../../redux/actions/collection_action";
import { Link } from "react-router-dom";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch()
  const category = useSelector((state) => state.collectionReducer.collection)
  // console.log(category, 'category');
  
  useEffect(() => {
    dispatch(fetchCollection())
  }, [])
  
 const categoryParent = category.slice(7,11)
  console.log(categoryParent, 'parent');

  return (
    <>
      <div className={classes.main_container}>
        <HeroSection />
        <div className={classes.secondary_container}>
          <div className={classes.third_container}>
            <div className={classes.inner_container}>
              {categoryParent.map((item, i) => {
                  return (
                    <div className={classes.category_card}  key={i }>
                      <img src={red_coat} alt="red-coat" />
                      <span className={classes.embededText}>
                        {item.title}
                      </span>
                      <Link to="/category">
                      <button className={classes.btn} onClick={() => {dispatch(fetchGetToCategory(item.id)) } }>
                        Смотреть все &ensp;
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </button>
                      </Link>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
        <span className={classes.collection_font}>
          <h4>Хит продаж</h4>
        </span>
        <div className={classes.card_container}>
          <TopSales />
        </div>
        <Button />
        <span className={classes.collection_font}>
          <h4>Новинки</h4>
        </span>
        <NewProducts />
        <Button />
        <div className={classes.backgroundColor_collection}>
          <span className={classes.collection_font}>
            <h4>Коллекция</h4>
          </span>
          <Collection />
        </div>
        <div className={classes.backgroundColor_subscription}>
          <Subscription />
        </div>
        <span className={classes.collection_font}>
          <h4>Наши преимущества</h4>
        </span>
        <Advantages />
        <span className={classes.collection_font}>
          <h4>Новости</h4>
        </span>
        <News />
      </div>
    </>
  );
};

export default Main;
