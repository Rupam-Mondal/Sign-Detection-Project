import axios from "axios";
import { customcameraurl } from "./const";

const Axiosintancetwo = axios.create({
    baseURL: customcameraurl,
})

export default Axiosintancetwo