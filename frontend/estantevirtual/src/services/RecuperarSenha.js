import axios from 'axios';

const api = axios.create({
    baseURL: "http://3.91.133.95:5000"
})


export default class RecuperarSenha {

    async VerificarEmail(destinatario) {
        const resp = await api.post("/RecuperarSenha/" + destinatario);
        return resp.data;
    }

    async AlterarSenha(req) {
        const resp = await api.put('/RecuperarSenha', req);
        return resp.data;
    }
}