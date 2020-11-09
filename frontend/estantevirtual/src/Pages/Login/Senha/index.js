import React, { useState, useRef } from 'react';
import './senha.css';
import {Link} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import RecuperarSenha from '../../../services/RecuperarSenha';
const api = new RecuperarSenha();


function ConfirmacaoCodigo(props) {

  const loadingBar = useRef(null);
  const [destinatario, setDestinatario] = useState("");
  const [codigo, setCodigo] = useState("");

  const [info, setInfo] = useState(props.location.state);


  const verificarEmail = async (e) => {

    loadingBar.current.continuousStart();

    const resp = await api.verificarEmail(destinatario);
    setCodigo(resp);

    loadingBar.current.complete();
  };


  return (
    <div className="fundo1">
      <LoadingBar 
          height={8}
          color='#9900FA'
          ref={loadingBar}
      />
      <div className="codigo-container">
        <div className="titulo-codigo">
          <h1>Confirmação de código</h1>
        </div>
        <div className="descricao">
          <p>Foi enviado um e-mail para  com o código para realizar  a confirmação</p>
        </div>

        <div className="codigo">
          <label>
            <input  type="text" placeholder="Código Recebido" ></input>
          </label>
        </div>

        <div className="botao">
          <div className="reenviar">
            <button>Reenviar e-mail</button>
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

export default ConfirmacaoCodigo;