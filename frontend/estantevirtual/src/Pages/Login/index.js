import React from 'react';
import {Link} from 'react-router-dom'
import './login.css';

function Login() {
  return (
    <div className="Login">
      <header className="Login-Header">
          <form class="login">
              <img class="Avatar" src="https://lh3.googleusercontent.com/proxy/ww5ibRelg4_gcR6IZIwUDntvwZDgFCD4h-3YpBsfOO-rQEdxSK21TH8_CPDKex5753j3LXxyHGiv82dR9H1jsBjl_nxsBLyoo-L8rypVS6-NDpV7TAQ" alt="user login" />
              <div class="bemvindo">Bem-Vindo(a)</div>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Senha"></input>
              <div class="opçoes">
                  <Link to="/Cadastro">Cadastrar</Link>
                  <Link to="/EsqueciaSenha">Esqueci a senha</Link>
              </div>
              <Link to="/"><button class="loginbotao">Login</button></Link>
          </form> 
      </header>
    </div>
  );
}

export default Login;