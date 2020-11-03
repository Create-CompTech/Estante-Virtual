import React from 'react';
import './alterar.css';
import {Link} from 'react-router-dom';

function AlterarSenha () {
    return(
        <div className="fundo3">
            <div className="container4">
                <div className="alterar">
                    <h1>Alterar senha</h1>
                </div>
                <div className="formulario">

                <div class="form">
                  <input type="password" name="name" autocomplete="on" required />
                 <label for="name" class="label-name">
                   <span class="content-name">Nova senha</span>
                 </label>
               </div>

               <div class="form">
                  <input type="password" name="name" autocomplete="on" required />
                 <label for="name" class="label-name">
                   <span class="content-name">Confirmar nova Senha</span>
                 </label>
               </div>
                </div>

                <div className="botao">
                <Link to="/Login"><button class="continuarbotao2">Confirmar</button></Link>
                </div>

            </div>



        </div>
    );
}

export default AlterarSenha;