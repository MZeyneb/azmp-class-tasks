import { BASE_URL } from "./constants";
import axios from "axios"
const getAllData = async (endpoint) => {
    const res = await axios(`${BASE_URL}/${endpoint}`)
    return res.data

}

export default getAllData