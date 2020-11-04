import React from 'react';
import './confirmaremail.css';
import {Link} from 'react-router-dom';

function ConfirmarEmail (){
    return (
        <div className="fundo1">
          <div className="ConfirmarEmail">
            <div className="confirmar-email">
                <div className="titulo-email">
                    <h1>Confirmar e-mail</h1>
                </div>
                <div className="descricao">
                    <p>Digite o e-mail de login, que seja cadastrado em nosso site.</p>
                </div>
                <div className="codigo">
                 <label>
                   <input  type="text" placeholder=" E-mail" ></input>
                 </label>
                </div>
                <div className="botao">
                <Link to="/ConfirmacaoSenha"><button class="cancelar">Enviar</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ConfirmarEmail;