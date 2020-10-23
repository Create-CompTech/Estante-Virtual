import React from 'react';
import {Link} from 'react-router-dom';
import './cadastro2.css';

function Cadastro2() {
  return (
    <div className="Cadastro2">
      <header className="Cadastro-Header2">
          <form class="cadastro2">
            <div class="cadastre2">Cadastre-se</div>
                <p>Preencha com as informações para Login</p>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Senha"></input>
                <input type="password" placeholder="Confirme a senha"></input>
                <Link to="/Login"><button class="continuarbotao2">Confirmar</button></Link>
                <Link to="/Cadastro"><button class="cancelarbotao">Cancelar</button></Link>
          </form>
      </header>
    </div>
  );
}

export default Cadastro2;