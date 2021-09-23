import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./AboutUs.module.scss";
import diva from "../../assets/image/diva.png";
import dress from "../../assets/image/about_us_dress.png";
import beach from "../../assets/image/beach.png";
import { fetchAboutUs } from "../../redux/actions/about_action";
import { useDispatch, useSelector } from "react-redux";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAboutUs())
     }, [])

    const about = useSelector((state) => state.aboutReducer.about)
    console.log(about, 'com');
    return (
        <>
        <div className={classes.mainContainer}>
            <div className={classes.breadCrumbs}>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        listStyle: "none",
                        color: "#000",
                    }}
                >
                    <span>Главная /&ensp;</span>
                </Link>
                <span style={{ color: "grey" }}>О нас</span>
            </div>

            {about.map((item, index) => {

                return (
            <div className={classes.main_header}>
                <div className={classes.heading}>
                    <h2>О нас</h2>
                </div>
                {item.images.map((img, index) => {
                    return (
                <>
                <div className={classes.main__first_box}>
                    <div className={classes.first_image}>
                        <img
                            src={img.image}
                            alt="lady"
                            className={classes.lady_img}
                        />
                    </div>
                    
                    <div className={classes.main_font}>
                        <span>BELLA</span>
                    </div>
                    <div className={classes.main__pg}>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className={classes.second_box}>
                    <div className={classes.second_box__image}>
                        <img src={img.image} alt="dress" />
                    </div>
                    <div className={classes.second_box__image2}>
                        <img src={img.image} alt="dress" style={{width: '100%'}}/> {/*НАДО В CSS ПЕРЕНЕСТИ*/}
                    </div>
                    <div className={classes.second_box__pg}>
                        <p>{item.description2}</p>
                    </div>
                </div>
                </>
                    )
                })}
            </div>
            )
            })}
        </div>
        </>
    );
};

export default AboutUs;
