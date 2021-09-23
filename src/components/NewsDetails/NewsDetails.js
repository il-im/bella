import React from 'react';
import style from './NewsDetails.module.scss'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import newsDetailsImg from '../../assets/newsDetailsImg/newsDetailsImg.png'
import { useParams } from 'react-router-dom';
import bella from '../../adapters/axios.config';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const NewsDetails = () => {
    const { id } = useParams()
    const [res, setRes] = useState({})
    
    const getSingleNews = () => {
        bella.get(`news/${id}`).then((response) => setRes(response.data))
            .catch((error) => console.log(error.response, 'errSingle'));
    }
    useEffect(() => {
        getSingleNews()
    }, [])
    return (
        <>
           <div className={style.mainDetails}>
               <BreadCrumbs/>

                <div className={style.mainDetails__container}>
                    <div className={style.mainDetails__news}>
                        <div className={style.mainDetails__blockImg} >
                            <img src={res.image} alt="img"/> { /* res.image */}
                        </div>
                        <div className={style.mainDetails__right}>
                            <p className={style.mainDetails__data}>{res.date}</p>
                            <h1 className={style.mainDetails__title}>
                                {res.title}
                            </h1>
                            <p className={style.mainDetails__text}>{res.description}</p>
                        </div>
                    </div>
                    <h2>Другие новости</h2>
                    {/* <div className="list">                
                        {topicsData.map((item) =>(
                        <TopicCard key={item.id} item={item} />
                    
                        ))}                
                    </div> */}
                </div>

           </div> 
        </>
    );
};

export default NewsDetails;