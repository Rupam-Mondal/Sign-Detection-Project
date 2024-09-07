import axios from "axios";
import { customcameraurl } from "./const";

const AxiosWord = axios.create({
    baseURL: customcameraurl,
})

export default AxiosWord