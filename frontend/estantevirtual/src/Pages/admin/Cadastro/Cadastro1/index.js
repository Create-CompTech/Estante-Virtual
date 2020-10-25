import React from 'react';
import {Link} from 'react-router-dom';
import './cadastro1.css';

function Cadastro1() {
  return (
    <div className="fundo2">
      <div className="boxcadastro">
        <div className="nomecadastro">
          <h1>Cadastrar Endereço</h1>
        </div>
        <div className="inputendereco">

        <div class="form">
         <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">CEP</span>
          </label>
        </div>

        <div class="form">
         <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Endereço</span>
          </label>
        </div>

        <div class="form">
         <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Número</span>
          </label>
        </div>

        <div class="form">
         <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Complemento</span>
          </label>
        </div>

        <div class="form">
         <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Estado</span>
          </label>
        </div>

        <div class="form">
         <input type="text" name="name" autocomplete="off" required />
          <label for="name" class="label-name">
            <span class="content-name">Cidade</span>
          </label>
        </div>

        </div>

        <div className="botoes">
          <div className="botaovoltar">
          <Link to="/Cadastro"><button class="continuarbotao1">Voltar</button></Link>
          </div>
          <div className="botaoconfirmar">
          <Link to="/Cadastro2"><button class="continuarbotao1">Pular</button></Link>
          <Link to="/Cadastro2"><button class="continuarbotao1">Confirmar</button></Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cadastro1;