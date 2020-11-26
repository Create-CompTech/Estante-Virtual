import React from 'react';
import {Link} from 'react-router-dom';
import './cadastro1.css';

function Cadastro1() {
  return (
    <div className="fundo2">
      <div className="boxcadastro">
        <div className="nomecadastro">
          <h1>Fazer Assinatura</h1>
        </div>
        <div className="inputassinatura">

          <div class="form">
          <input type="text" name="name" autocomplete="off" required />
            <label for="name" class="label-name">
              <span class="content-name">Nome do Titular:</span>
            </label>
          </div>

          <div class="form">
          <input type="text" name="name" autocomplete="off" required />
            <label for="name" class="label-name">
              <span class="content-name">Sobrenome:</span>
            </label>
          </div>

          <div class="form">
          <input type="text" name="name" autocomplete="off" required />
            <label for="name" class="label-name">
              <span class="content-name">Número do Cartão</span>
            </label>
          </div>

          <div class="form">
          <input type="text" name="name" autocomplete="off" required />
            <label for="name" class="label-name">
              <span class="content-name">Validade do Cartão:</span>
            </label>
          </div>

          <div class="form">
          <input type="text" name="name" autocomplete="off" required />
            <label for="name" class="label-name">
              <span class="content-name">Código de Segurança(CVV):</span>
            </label>
          </div>

          <span>Forma de Pagamento</span>
          <div class="pagamento-checkbox">
            <input id="checkbox" type="checkbox"></input>
            <label for="checkbox">Crédito</label>
            <input id="checkbox" type="checkbox"></input>
            <label for="checkbox">Débito</label>
          </div>
        </div>

        <div className="botoes">
          <div className="botaovoltar">
          <Link to="/Cadastro"><button class="continuarbotao1">Voltar</button></Link>
          </div>
          <div className="botaoconfirmar">
          <Link to="/Cadastro2"><button class="continuarbotao1">Confirmar</button></Link>
          </div>
        </div>
        

      </div>
    </div>
  );
}

export default Cadastro1;