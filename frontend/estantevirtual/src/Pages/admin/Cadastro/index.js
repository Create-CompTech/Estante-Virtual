import React from 'react';
import {Link} from 'react-router-dom';
import './cadastro.css';

function Cadastro() {
  return (
    <div className="Cadastro">
      <header className="Cadastro-Header">
          <form class="cadastro">
            <div class="cadastre">Cadastre-se</div>
                <p>Preencha com suas informações</p>
                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="Sobrenome"></input>
                <input type="date"></input>
                <select class="genero" type="text" placeholder="Gênero">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
                <Link to="/Cadastro1"><button class="continuarbotao">Continuar</button></Link>
                <Link to="/Login"><button class="cancelarbotao">Cancelar</button></Link>
          </form>
      </header>
    </div>
  );
}

export default Cadastro;