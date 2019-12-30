import Axios from "axios";
import {BASE_URL} from "../constants/paths";

export const createAxios = (() => {
    const axios = Axios.create({
        baseURL: BASE_URL,
    });
    axios.interceptors.request.use(
        conf => {

            return conf;
        },
        error => {

            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        response => {

            return response;
        },
        error => {

            return Promise.reject(error);
        }
    );
    return axios;
})();