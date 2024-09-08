import axios from "axios";
import { cameratrigerurl } from "./const";

const Axiosletter = axios.create({
    baseURL: cameratrigerurl,
})

export default Axiosletter