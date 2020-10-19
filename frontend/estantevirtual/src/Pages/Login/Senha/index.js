import React from 'react';
import {Link} from 'react-router-dom';
import './senha.css';

function Senha() {
  return (
    <div className="Senha">
      <header className="Senha-Header">
          <form class="senha">
              <div class="esquecisenha">Mudar a senha</div>
              <p>Digite o Email cadastrado e sua nova senha para redefini-lá.</p>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Senha"></input>
              <input type="password" placeholder="Confirmar senha"></input>
              <Link to="/Login"><button class="senhabotao">Alterar senha</button></Link>
              <Link to="/Login"><button class="cancelarbotao">Cancelar</button></Link>
          </form>
      </header>
    </div>
  );
}

export default Senha;