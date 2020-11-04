import React, { useState, useRef } from 'react';
import './login.css'

import { Link, useHistory } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

import RealizarLogin from '../../services/RealizarLogin';
const api = new RealizarLogin();



  function Login() {

  const navegacao = useHistory();
  const loadingBar = useRef(null);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const login = async (e) => {
        
    e.preventDefault();

    loadingBar.current.continuousStart();

    const resp = await api.fazerLogin({
        email: email,
        senha: senha
    });

    if(resp.perfil === "cliente"){
        navegacao.push("/InicialCliente", resp);
    } else {
        navegacao.push("/f/admin", resp);
    }

    
    loadingBar.current.complete();
    
    console.log(resp);
  }

  const confirmarSenha = async (e) => {
    navegacao.push("/ConfirmacaoSenha", email);
  }

  


  return (
    <div className="Login">

      <LoadingBar />

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
        <input type="text" name="name" autocomplete="on" required 
                onChange={e => setEmail(e.target.value)}/>
        <label for="name" class="label-name">
            <span class="content-name">E-mail</span>
        </label>
       </div>

       <div class="form">
        <input type="password" name="name" autocomplete="on" required 
                onChange={e => setSenha(e.target.value)}/>
        <label for="name" class="label-name">
            <span class="content-name">Senha</span>
        </label>
       </div>

       <div class="opçoes">
                  <Link to="/Cadastro">Cadastrar-se</Link>
                  <Link to="/ConfirmarEmail"> 
                   Esqueci a senha
                  </Link>
              </div>

       <div class="botao">
          <Link to="./InicialCliente">
            <button onClick={login}> Login </button>
          </Link>
       </div>

        </div>
      </div>
    </div>
  );
}


export default Login;