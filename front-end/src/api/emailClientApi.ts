import axios from "axios";

const emailClientApi = axios.create({
    baseURL: 'http://localhost:5000'
});

export default emailClientApi;