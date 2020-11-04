import axios from 'axios';

const api = axios.create({
    baseURL: "http://3.91.133.95:5000/ConsultarEbooks"
})

export default class ConsultarEbooks {

    async EbooksPorGenero() {
        const resp = await api.get();
        return resp.data;
    }
}