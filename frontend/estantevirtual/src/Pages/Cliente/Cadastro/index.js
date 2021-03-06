import React from 'react';
import './cadastro.css';
import {Link} from 'react-router-dom';



function Cadastro() {
  return (
    <div className="container-tudo">
           <div className="container-principal">
        <div className="direito">
          <h1>Bem-vindo de volta!</h1>
          <p>Para se manter ligado nos melhores</p>
          <p>livros da atualidade faça o Login agora mesmo</p>
          <div class="botao">
          <Link to="/Login"><button class="botao">Login</button></Link>
          </div>
        </div>
        <div className="cadastro">
          <h1>Cadastre-se</h1>
          <div className="box2">

          <div class="form">
        <input type="text" name="name" autocomplete="on" required />
        <label for="name" class="label-name">
            <span class="content-name">Nome:</span>
        </label>
       </div>

       <div class="form">
        <input type="text" name="name" autocomplete="of" required />
        <label for="name" class="label-name">
            <span class="content-name">CPF:</span>
        </label>
       </div>

       <div class="form">
         <input type="date" name="name" autocomplete="of" required />
         <label for="name" class="label-name">
           <span class="content-name"></span>
         </label>
       </div>

       <select class="genero" type="text" placeholder="Gênero">
         <option value="Masculino">Masculino</option>
         <option value="Feminino">Feminino</option>
         <option value="Outro">Outro</option>
         <option value="Prefiro não">Prefiro não</option>
       </select>

       <div className="botaocadastro">
        <Link to="/Cadastro2"><button class="cancelarbotao">Continuar Cadastro</button></Link>
       </div>
       <div className="botaocadastro">
        <Link to="/Cadastro1"><button class="cancelarbotao">Quero ser assinante</button></Link>
       </div>


          </div>
        </div>
    </div>
    </div>
  );
}

export default Cadastro;