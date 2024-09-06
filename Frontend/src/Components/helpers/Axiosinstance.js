import axios, { Axios } from "axios";
import { cameratrigerurl } from "./const";

const AxiosInstance = axios.create({
    baseURL: cameratrigerurl,
})

export default AxiosInstance