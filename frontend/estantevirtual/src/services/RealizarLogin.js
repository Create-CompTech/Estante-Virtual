import axios from 'axios';

const api = axios.create({
    baseURL: "http://3.91.133.95:5000/Login"
})


export default class RealizarLogin {

    async fazerLogin(req) {
        const resp = await api.post(req);
        return resp.data;
    }
}