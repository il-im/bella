import React, { useState } from "react";
import classes from "./Confirmation.module.scss";
import Successfully from "../Successfully/Successfully";
import RegisterForm from "../Register/RegisterForm/RegisterForm";
import { handleRegister } from "../../../../redux/actions/register_action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Confirmation = ({ SubmitOTP, handleChangeOTP, success, registerFormik, isValid }) => {
    const dispatch = useDispatch()
    // const [seconds, setSeconds] = useState(60);
    // const [isActive, setIsActive] = useState(false);
    // useEffect(() => {
    //     timer();
    // }, [seconds]);
    // const timer = (e) => {
    //     if (seconds > 0 && seconds <= 60) {
    //         setTimeout(() => setSeconds(seconds - 1), 1000);
    //     } else if (seconds !== 1) {
    //         clearInterval();
    //         setSeconds("");
    //     }
    // };
    // function toggle(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setIsActive((prev) => !prev);
    // }
    // const register = useSelector((state) => state.registerReducer.register)
    // console.log(registerFormik.values)
    // console.log(register, 'Confirmation');
    return (
        <>
            <form className={classes.confirmation} onSubmit={(e)=>SubmitOTP(e)}>
                <div id="sign-in-button"></div>

                <div className={classes.input_cont}>
                    <h5>Введите код подтвержения</h5>
                    <input
                        type="text"
                        placeholder="введите код"
                        onChange={handleChangeOTP}
                        name="otp"
                    />
                </div>
                <div className={classes.btn_cont}>
                    <button className={classes.btn_3}>
                        <p>Продолжить</p>
                    </button>

                    <button className={classes.btn_2}>
                        <p>Не пришло SMS?</p>
                    </button>
                    {/* {isActive && ( */}
                    <button className={classes.btn}>
                        <p>Отправить снова </p>
                        <p></p>
                    </button>
                    {/* )} */}
                </div>
            </form>
            <>
                {isValid==="error" ? (
                    <div>
                        {alert("Ошибка при подтверждении кода!")}
                    </div>
                ) : (
                    <div>
                        <Successfully />
                        {dispatch(handleRegister(registerFormik.values))}
                    </div>
                )}
            </>
        </>
    );
};

export default Confirmation;
