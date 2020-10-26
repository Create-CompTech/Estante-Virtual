import React from 'react';
import {Link} from 'react-router-dom';
import './cadastro2.css';

function Cadastro2() {
  return (
    <div className="fundo4">
      <div className="cadastro2">
        <div className="titulo4">
          <h1>Cadastre-se</h1>
        </div>
        <div className="subtitulo">
          <h6>Preencha com as informações para</h6>
          <h6>login</h6>
      </div>
      <div className="inputlogin">

      <div class="form">
         <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">E-mail</span>
          </label>
        </div>

        <div class="form">
         <input type="password" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Senha</span>
          </label>
        </div>

        <div class="form">
         <input type="password" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Confirme a senha</span>
          </label>
        </div>

      </div>

      <div class="botao">
      <Link to="/Login"><button class="continuarbotao2">Confirmar</button></Link>
      </div>
    
    </div>
    </div>
  );
}

export default Cadastro2;