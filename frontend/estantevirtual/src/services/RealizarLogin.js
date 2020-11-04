import axios from 'axios';

const api = axios.create({
    baseURL: "http://3.91.133.95:5000"
})


export default class RealizarLogin {

    async fazerLogin(req) {
        const resp = await api.post('/Login', req);
        return resp.data;
    }
}