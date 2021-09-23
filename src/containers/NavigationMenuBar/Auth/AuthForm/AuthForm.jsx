import React from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./AuthForm.module.scss";
import {handleSignIn} from '../../../../redux/actions/auth_action'
import { useState } from "react";
import { useDispatch } from "react-redux";

const AuthForm = () => {

    const dispatch = useDispatch()

    const [login,setLogin] = useState({
        phone_number:"",
        password:""
    })
    function handleChangeLogin(e){
        let newObj = {
            ...login,
            [e.target.name]: e.target.value,
        }
        setLogin(newObj)
        console.log(login , 'login');
    }

    const history = useHistory()
    return (
        <form className={classes.AuthForm}>
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>ВХОД</h5>
                <input
                onChange={handleChangeLogin}
                    type="phone_number"
                    id="phone_number"
                    name="phone_number"
                    placeholder="Введите номер телефона"
                />
                <input
                    onChange={handleChangeLogin}
                    type="phone"
                    id="password"
                    name="password"
                    placeholder="Введите пароль"
                />
            </div>
            <div className={classes.btn_cont} style={{display: 'flex',textAlign:'center'}}>
                <button className={classes.btn_reg} 
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(handleSignIn(login, history))
                    }} >
                    <p>войти </p>
                </button>
                <div >
                    <span style={{fontSize:'17px'}}>Нету Аккаунта? </span>  
                    <Link to='/register' 
                        style={{color: 'blue',fontSize:'17px'}}>
                        Зарегистрироваться
                    </Link>
                </div>
                
            </div>
        </form>
    );
};

export default AuthForm;
