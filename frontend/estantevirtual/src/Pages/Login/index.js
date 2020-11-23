import React, { useState, useRef } from 'react';
import './login.css';

import { Link, useHistory } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import gobook_logo from '../../storage/images/logo/SizePinterest/gobook_logo.png';
import instagram from '../../storage/images/icons/instagram_icon.png';

import RealizarLogin from '../../services/RealizarLogin';
const api = new RealizarLogin();


  function Login(props) {


  const navegacao = useHistory();
  const loadingBar = useRef(null);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const login = async (e) => {
        
    e.preventDefault();

    loadingBar.current.continuousStart();

    const req = {
      email: email,
      senha: senha
    }

    const resp = await api.fazerLogin(req);

    loadingBar.current.complete();

    if(resp.perfil === "cliente"){
        navegacao.push("/InicialCliente", resp);
    } else {
        navegacao.push("/InicialAdm", resp);
    }
  }

  return (
    <div className="Login">

      <LoadingBar 
          height={8}
          color='#9900FA'
          ref={loadingBar}
      />

      <div className="menu">

        <div className="imagem">
          <p>
            <img src={gobook_logo} height="215px" width="235px"/>
          </p>
        </div>
        <div className="contato">
          <a href="https://www.instagram.com/gobookcompany/" target="_blank"><img src={instagram} height="49px" width="53px"></img></a>
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
        <input type="password" name="name"  autocomplete="on" required 
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