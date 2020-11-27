import React, { useState } from 'react';
import './confirmaremail.css';
import { useHistory } from 'react-router-dom';

import RecuperarSenha from '../../../services/RecuperarSenha';
const api = new RecuperarSenha();

function ConfirmarEmail(props) {

    const navegacao = useHistory();
    const [email, setEmail] = useState("");

    const enviarEmail = async (e) => {

        const resp = await api.VerificarEmail(email);
        navegacao.push('/ConfirmacaoCodigo', resp);
    } 

    return (
        <div className="fundo1">
          <div className="ConfirmarEmail">
            <div className="confirmar-email">
                <div className="titulo-email">
                    <h1>Recuperar Senha</h1>
                </div>
                <div className="descricao">
                    <p>Vamos enviar um código de verificação pra você. Digite seu email abaixo:</p>
                </div>
                <div className="codigo">
                 <label>
                   <input  type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></input>
                 </label>
                </div>
                <div className="botao">
                 <button onClick={enviarEmail} class="cancelar">Enviar</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ConfirmarEmail;