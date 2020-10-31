import React from 'react';
import {Link} from 'react-router-dom'


import './login.css'

function Login() {

  return (
    <div className="Login">
      <div className="menu">

        <div className="imagem">
          <p>imagemlogo</p>
        </div>
        <div className="contato">
          <p>contato</p>
        </div>
      </div>


      <div className="container2">
        <div className="login">

          <div className="bemvindo">
          <h1>Bem-vindo(a)</h1>
          </div>


        <div class="form">
        <input type="text" name="name" autocomplete="on" required />
        <label for="name" class="label-name">
            <span class="content-name">E-mail</span>
        </label>
       </div>

       <div class="form">
        <input type="password" name="name" autocomplete="on" required />
        <label for="name" class="label-name">
            <span class="content-name">Senha</span>
        </label>
       </div>

       <div class="opçoes">
                  <Link to="/Cadastro">Cadastrar-se</Link>
                  <Link to="/ConfirmacaoSenha">Esqueci a senha</Link>
              </div>

       <div class="botao">
          <Link to="./InicialCliente"><button>Login</button></Link>
       </div>

        </div>
      </div>
    </div>
  );
}


export default Login;