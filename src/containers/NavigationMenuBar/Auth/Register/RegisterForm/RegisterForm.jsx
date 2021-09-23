import React, { useState, useEffect } from "react";
import classes from "./RegisterForm.module.scss";
import {
  userSchema,
  otpSchema,
} from "../../../../../components/Validations/UserValidation";
import app from "../../../../../firebase";
import { useFormik, FormikProvider } from "formik";
import Confirmation from "../../Confirmation/Confirmation";
import { useDispatch } from "react-redux";
import { login } from "../../../../../redux/actions/auth_action";
import { handleRegister } from "../../../../../redux/actions/register_action";
import { Link, useHistory } from "react-router-dom";

const RegisterForm = () => {
  // console.log(2)
  const [next, setNext] = useState(true);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState();
  const [values, setValues] = useState(null);
  
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValues((oldState) => {
      const registerObj = { ...oldState };
      registerObj[e.target.name] = e.target.value;
      return registerObj;
    });
  };

  const handleChangeOTP = (e) => {
    setName({
      ...name,
      otp: e.target.value,
    });
  };

  useEffect(() => {
    window.recaptchaVerifier = new app.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // console.log(3)
          // SignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "KG",
      }
    );
  }, []);



  const registerFormik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      password: "",
      password2: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log(1)
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        // SignInSubmit();
      }, 1000);
    },
  });
  const history = useHistory()
  // const SignInSubmit = (e) => {
  //   // e.preventDefault();
  //   const phoneNumber = registerFormik.values.phone_number;
  //   console.log(registerFormik.values.phone_number);
  //   const appVerifier = window.recaptchaVerifier;
  //   app.auth()
  //     .signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then((confirmationResult) => {
  //       visible();
  //       window.confirmationResult = confirmationResult;
  //       appVerifier.clear();
  //     })
  //     .catch((error) => {
  //     });
  // };
  let isValid = null
    const createOTP = async (e) => {
       isValid = await otpSchema.isValid(name);
      console.log(isValid , 'isValid');
    };

  // const SubmitOTP = (e) => {
  //   e.preventDefault();
  //   const code = name.otp;
  //   window.confirmationResult
  //     .confirm(code)
  //     .then((result) => {
  //       // User signed in successfully.
  //       console.log(result, 'resulttt')

  //       const user = result.user;
  //       createOTP() ;
  //       // successToggle();
  //       dispatch(login())
  //       dispatch({type:"SET_FORM", payload:registerFormik})
        

  //       // ...
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //       // User couldn't sign in (bad verification code?)
  //       // ...
  //     });
  // };

  let visible = () => {
    setNext(!next);
  };

  const successToggle = () => {
    setSuccess((prev) => !prev);
  };

  // console.log(registerFormik.values ,'eeboy');
  return (
    <>
      {next ? (
        <>
          <FormikProvider value={registerFormik}>
            <form
              className={classes.registerForm}
              onSubmit={registerFormik.handleSubmit}
            >
              <div id="sign-in-button"></div>
              <h3>Регистрация</h3>
              <div className={classes.input_cont}>
                <p>Ваше имя</p>
                <input
                  type="text"
                  placeholder="введите имя"
                  name="first_name"
                  id="first_name"
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  value={
                    registerFormik.values.first_name || ""
                  }
                />
                {registerFormik.touched.first_name &&
                  registerFormik.errors.first_name ? (
                  <p className={classes.alert}>
                    {registerFormik.errors.first_name}
                  </p>
                ) : null}
              </div>

              <div className={classes.input_cont}>
                <p>Ваше Фамилия</p>
                <input
                  type="text"
                  placeholder="введите фамилию"
                  name="last_name"
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.last_name || ""}
                  id="last_name "
                />
                {registerFormik.touched.last_name &&
                  registerFormik.errors.last_name ? (
                  <p className={classes.alert}>
                    {registerFormik.errors.last_name}
                  </p>
                ) : null}
              </div>

              <div className={classes.input_cont}>
                <p>Номер телефона</p>
                <input
                  id="phone_number"
                  type="text"
                  name="phone_number"
                  placeholder="введите номер телефона"
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.phone_number || ""}
                />
                {registerFormik.touched.phone_number &&
                  registerFormik.errors.phone_number ? (
                  <p className={classes.alert}>
                    {registerFormik.errors.phone_number}
                  </p>
                ) : null}
              </div>
              <div className={classes.input_cont}>
                <p>Введите пароль</p>
                <input
                  id="password"
                  type="text"
                  name="password"
                  placeholder="введите пароль"
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  value={registerFormik.values.password || ""}
                />
                {registerFormik.touched.password &&
                  registerFormik.errors.password ? (
                  <p className={classes.alert}>
                    {registerFormik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className={classes.input_cont}>
                <p>Подтвердите пароль</p>
                <input
                  id="password2"
                  type="text"
                  name="password2"
                  placeholder="подтвердите пароль"
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  value={
                    registerFormik.values.password2 ||
                    ""
                  }
                />
                {registerFormik.touched.password2 &&
                  registerFormik.errors.password2 ? (
                  <p className={classes.alert}>
                    {registerFormik.errors.password2}
                  </p>
                ) : null}
              </div>
              <div className={classes.btn_cont}>
                <span className={classes.span}>
                  <input
                    type="checkbox"
                    name="checked"
                    id="checked"
                    className={classes.check}
                  />
                  <p>Согласен с условиями публичной оферты</p>
                </span>
                <button
                  
                  className={classes.btn}
                  type="submit"
                  id="sign-in-button"
                  onClick={()=>dispatch(handleRegister(registerFormik.values, history))}
                >
                  <p>Продолжить</p>
                </button>
                {/* <Link to="/authForm" className={classes.link}>
                        Уже есть Аккаунт? <br/>
                    <button className={classes.btn_2}>
                      Войти
                    </button>
                </Link> */}
              </div>
            </form>
          </FormikProvider>
        </>
      ) : (
        <div>
          <Confirmation
            registerFormik={registerFormik}
            handleChangeOTP={handleChangeOTP}
            // SubmitOTP={SubmitOTP}
            success={success}
            setSuccess={setSuccess}
            successToggle={successToggle}
            isValid={isValid}
          />
        </div>
      )}
    </>
  );
};

export default RegisterForm;
