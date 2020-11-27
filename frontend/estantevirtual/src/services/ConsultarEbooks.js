import axios from 'axios';

const api = axios.create({
    baseURL: "http://3.91.133.95:5000"
})

export default class ConsultarEbooks {

    async EbooksPorGenero() {
        const resp = await api.get();
        return resp.data;
    }

    async PesquisaEbookAutor() {
        const resp = await api.get();
        return resp.data;
    }

    async EbooksCliente(idLogin) {
        const resp = await api.get('/ConsultarEbooks/ebookscliente', idLogin);
        return resp.data;
    }

    async ConsultarGeneros() {
        const resp = await api.get('/ConsultarEbooks/generos');
        return resp.data;
    }

    async ConsultarAutores() {
        const resp = await api.get('/ConsultarEbooks/autores');
        return resp.data;
    }
}