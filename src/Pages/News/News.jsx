import { useEffect, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";
import Pagination from "./Pagination/Pagination";
import Location from "../../containers/Location/Location";
import axios from "axios";
import classes from "./News.module.scss";
import {fetchNewsPosts} from '../../redux/actions/news_action'
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

const News = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const posts = useSelector((state) => state.newsReducer.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNewsPosts())
  },[])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPag = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPag = () => {
    setCurrentPage(currentPage - 1);
  };

  const spinner = useSelector((state) => state.newsReducer.loading)

  return (
    
    <div className={classes.main_wrapper}>
      <div className={classes.inner_wrapper}>
        <Location currentLocation="Новости" />
        <h3>Новости</h3>
        <div className={classes.inner_wrapper__newsCart}>
        {spinner ? <Spinner/> : <NewsCard  posts={currentPosts}  loading={loading} />}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
          next={nextPag}
          prev={prevPag}
        />
      </div>
    </div>
  );
};

export default News;
