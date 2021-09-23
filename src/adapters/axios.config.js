import axios from "axios";

// export const instance = axios.create({
    // baseURL: "https://fakestoreapi.com/products",

// });

const bella =axios.create({
    baseURL: "http://34.125.22.50", 
    headers:{ 
        Authorization: localStorage.getItem("token") ? `Token ${JSON.parse(localStorage.getItem("token"))}`: ""
    }
})

export default bella
