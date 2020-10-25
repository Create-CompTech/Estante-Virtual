import React from 'react';
import './senha.css';
import {Link} from 'react-router-dom';

function ConfirmacaoSenha() {
  return (
    <div className="fundo1">
      <div className="confirmacaosenha">
        <div className="confirmaremail">
          <h1>Confirmação de e-mail</h1>
        </div>
        <div className="descricao">
          <p>Foi enviado um e-mail para gustavofurtado***@gmail com o código para realizar  a confirmação</p>
        </div>

        <div className="codigo">
          <label>
            <input  type="text" placeholder=" Código Recebido" ></input>
          </label>
        </div>

        <div className="botao">
          <div className="reenviar">
            <button>REENVIAR EMAIL</button>
          </div>
          <div className="confirmar">
          <Link to="/Login"><button class="cancelar">Cancelar</button></Link>
          <Link to="/Alterar"><button class="cancelar">Confirmar</button></Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ConfirmacaoSenha;