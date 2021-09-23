import classes from "./Profile.module.scss";
import { Link } from "react-router-dom";
import img1 from "../../assets/image/bellaprofile3.png";
import img2 from "../../assets/image/bellaprofile2.png";
import { userSchema } from "../../components/Validations/UserValidation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleProfile, handlePut } from "../../redux/actions/profile_action";
import { useState } from "react";
import { ActionTypes } from "../../redux/constants/action_types";

const Profile = () => {
//---------------------------------
  // const loadData = function (url, cb) {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(`GET`, url);
  //   xhr.responseType = `json`;
  //   // После получения данных выполним cb.
  //   xhr.addEventListener(`load`, cb);
  //   xhr.send();
  // }

  // loadData(`http://34.125.22.50/news/`, function (evt) {
  //   const response = evt.currentTarget.response;
  //   console.log(response);

  // });
//---------------------------------

  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      phone: e.target[2].value
    };
    const isValid = await userSchema.isValid(formData);
    // console.log(isValid);
  };

  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profileReducer.profile)
  console.log(profile);
  useEffect(() => {
    dispatch(handleProfile())
  }, [])

  const handleChangeProfile = (e) => {
    // console.log(e);
    dispatch({ type: ActionTypes.CHANGE_NAME, payload: { name: [e.target.name], value: e.target.value } })
  }

  return (
    <div className={classes.profilePage}>
      <div className={classes.product}>
        <div className={classes.product1}>
          <Link to="/product">Главная</Link>
          <span>/</span>
          <span>Профиль </span>
        </div>
      </div>
      <div className={classes.profile} >
        <form onSubmit={createUser}>
          <div className={classes.h3}>Профиль</div>
          <div className={classes.input_cont}>
            <p>Имя</p>
            <input value={profile.first_name} onChange={handleChangeProfile} type="text" placeholder="введите имя" name="first_name" required />
          </div>
          <div className={classes.input_cont}>
            <p>Фамилия</p>
            <input
              value={profile.last_name}
              onChange={handleChangeProfile}
              type="text"
              placeholder="введите фамилию"
              name="last_name"
              required
            />
          </div>
          <div className={classes.input_cont}>
            <p>Номер телефона</p>
            <input
              value={profile.phone_number}
              onChange={handleChangeProfile}
              type="phone_number"
              placeholder="+996 (773) 870 100"
              name="phone_number"
              required
            />
          </div>

          <button onClick={() => { dispatch(handlePut(profile)) }} className={classes.btn_reg}>
            <span>Изменить номер</span>
          </button>

          <div className={classes.h3}>Адресс доставки</div>
          <div className={classes.input_cont}>
            <p>Страна</p>
            <input value={profile.country} onChange={handleChangeProfile} type="text" placeholder="Кыргызстан" name="country" required />
          </div>
          <div className={classes.input_cont}>
            <p>Город</p>
            <input value={profile.city} onChange={handleChangeProfile} type="text" placeholder="Бишкек" name="city" required />
          </div>
          <button className={classes.btn__save} onClick={() => { dispatch(handlePut(profile)) }}>
            {/* <Link to="/profile"> */}
            Сохранить
            {/* </Link> */}
          </button>
        </form>

        <div className={classes.second__cont}>
          <div className={classes.bella1}>
            <img src={img1} alt="loading..." className={classes.bella} />
          </div>
          <div>
            <img src={img2} alt="loading.." className={classes.img2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
