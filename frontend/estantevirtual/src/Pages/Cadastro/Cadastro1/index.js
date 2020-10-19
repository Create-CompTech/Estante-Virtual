import React from 'react';
import {Link} from 'react-router-dom';
import './cadastro1.css';

function Cadastro1() {
  return (
    <div className="Cadastro1">
      <header className="Cadastro-Header1">
          <form class="cadastro1">
            <div class="cadastre1">Cadastre-se</div>
                <p>Preencha com as informações de seu endereço</p>
                <input type="text" placeholder="Endereço"></input>
                <input type="number" placeholder="Número"></input>
                <input type="text" placeholder="Complemento"></input>
                <input type="text" placeholder="Estado"></input>
                <input type="text" placeholder="Cidade"></input>
                <input type="text" placeholder="CEP"></input>
                <div class="opcoes">
                    <Link to="/Cadastro2"><button class="continuarbotao1">Pular</button></Link>
                    <Link to="/Cadastro2"><button class="continuarbotao1">Confirmar</button></Link>
                </div>
                <Link to="/Cadastro"><button class="voltarbotao">Voltar</button></Link>
          </form>
      </header>
    </div>
  );
}

export default Cadastro1;