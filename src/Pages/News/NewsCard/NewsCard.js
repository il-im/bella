// import SeeAll from "../../../components/SeeAll/SeeAll"
import { Link } from "react-router-dom";
import news_img from "../../../assets/image/news-img.png";
import classes from "./NewsCard.module.scss";
import arrow from "../../../assets/lock_nextImg/arrow_brown.png";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";

const NewsCard = ({ posts, loading }) => {


  const output = posts.map((post) => {

    let num = post.description.substr(0, 110) + "..."

    return (
      <div className={classes.w_100} key={post}>
        {/* <div className={classes.mainCart}> */}
          <div className={classes.newscart}> {/*${props.item.id} */}
            <div className={classes.newscart__blockLeft}>
              <img src={post.image} alt="img-news" />
            </div>
            <div className={classes.newscart__blockRight}>
              <p className={classes.newscart__data}>{post.date}</p>
              <h1 className={classes.newscart__title}>{post.title}</h1>
              <p className={classes.newscart__text}>{num}</p>
              <Link to={`/news_details/${post.id}`} className={classes.newscart__blockForbtn}>
                <button className={classes.newscart__btn}>Подробнее
                  <img src={arrow} alt="img-arrow" />
                </button>
              </Link>
            </div>
          </div>
        {/* </div> */}
      </div>
    )
  });

  if (loading) {
    return <>Loading...</>;
  }
  return <div className={classes.NewsCard}>{output}</div>;
};

export default NewsCard;

 // <div className={classes.card}>
      //   <img alt="news" src={news_img} />
      //   <div className={classes.info}>
      //     <span className={classes.info__date}>14.11.21</span>
      //     <h2 key={post.id}>{post.title}</h2>
      //     <p>{num}</p>
      //     <Link to="news_details">
      //       <button className={classes.info__btn}>
      //         Подробнее &ensp;
      //         <i className="fa fa-chevron-right" aria-hidden="true"></i>
      //       </button>
      //     </Link>
      //   </div>
      // </div>