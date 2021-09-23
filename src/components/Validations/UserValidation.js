import * as yup from "yup";

export const userSchema = yup.object().shape({
    first_name: yup.string().required("Введите ваше имя"),
    last_name: yup.string().required("Введите ваше фамилию"),
    phone_number: yup
        .string()
        .matches(
            /^(\+996)?[\s]?\(?[0-9]{3}\)?[\s]?[0-9]{2}[\s]?[0-9]{2}[\s]?[0-9]{2}$/gm,
            "Номер не соответствует +XXX XXX XXXXXX"
        )
        .max(17, "Номер не должен превышать 13 символов")
        .required("введите номер телефона"),
    password: yup
        .string()
        // .matches(/^[A-Za-z]\w{7,15}$/)
        .matches(/[a-z]/, "at least one lowercase char")
        .matches(/[A-Z]/, "at least one uppercase char")
        .matches(
            /[a-zA-Z]+[^a-zA-Z\s]+/,
            "at least 1 number or special character (@,!,#, etc)."
        )
        .max(15)
        .required("Введите пароль"),
    password2: yup
        .string()
        .oneOf([yup.ref("password"), null], "Пароли не совпадают!")
        .required("Введите повторно пароль"),
});

export const otpSchema = yup.object().shape({
    otp: yup.number().positive().max(6).required("Введите код подтверждения"),
});

export const authSchema = yup.object().shape({
    password: yup
        .string()
        // .matches(/^[A-Za-z]\w{7,15}$/)
        .matches(/[a-z]/, "at least one lowercase char")
        .matches(/[A-Z]/, "at least one uppercase char")
        .matches(
            /[a-zA-Z]+[^a-zA-Z\s]+/,
            "at least 1 number or special character (@,!,#, etc)."
        )
        .max(15)
        .required("Введите пароль"),
});
export const subSchema = yup.object().shape({
    fullName: yup.string().required("Введите ваше Ф.И.О"),
    phone_number: yup
        .string()
        .matches(
            /^(\+996)?[\s]?\(?[0-9]{3}\)?[\s]?[0-9]{2}[\s]?[0-9]{2}[\s]?[0-9]{2}$/gm,
            "Номер не соответствует +XXX XXX XXXXXX"
        )
        .max(17, "Номер не должен превышать 13 символов")
        .required("Введите номер телефона"),
});
export const orderSchema = yup.object().shape({
    first_name: yup.string().required("Обязателен к заполнению"),
    surname: yup.string().required("Обязателен к заполнению"),
    phone_number: yup
        .string()
        .matches(
            /^(\+996)?[\s]?\(?[0-9]{3}\)?[\s]?[0-9]{2}[\s]?[0-9]{2}[\s]?[0-9]{2}$/gm,
            "Номер не соответствует +XXX XXX XXXXXX"
        )
        .max(17, "Номер не должен превышать 13 символов")
        .required("Введите номер телефона"),
    country: yup.string().required("Обязателен к заполнению"),
    city: yup.string().required("Обязателен к заполнению"),
});
