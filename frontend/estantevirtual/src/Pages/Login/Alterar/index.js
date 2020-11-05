import React, { useState } from 'react';
import './alterar.css';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RecuperarSenha from '../../../services/RecuperarSenha';
const api = new RecuperarSenha(); 


function AlterarSenha (props) {

  const [novaSenha, setNovaSenha] = useState("");
  const [novaSenhaConfirmacao, setNovaSenhaConfirmacao] = useState("");


  const alterarSenha = async (e) => {

    if (novaSenha === novaSenhaConfirmacao) {
      
      try {
        
        const resp = await api.AlterarSenha({
          idLogin: props.location.state.id,
          novaSenha: novaSenha
        });

        toast.success("Senha alterada com sucesso!");
        

      } catch (ex) {
        toast.error("Opss, parece que não conseguimos alterar sua senha. Tente novamente mais tarde!")
      }

    } else {
      toast.error("As senhas não coincidem!");
    }

  }

    return(
        <div className="fundo3">
          <ToastContainer />
            <div className="container4">
                <div className="alterar">
                    <h1>Alterar senha</h1>
                </div>
                <div className="formulario">

                <div className="form">
                  <input type="password" name="name" autocomplete="on" required onChange={e => setNovaSenha(e.target.value)} />
                 <label for="name" class="label-name">
                   <span class="content-name">Nova senha</span>
                 </label>
               </div>

               <div className="form">
                  <input type="password" name="name" autocomplete="on" required onChange={e => setNovaSenhaConfirmacao(e.target.value)}/>
                 <label for="name" class="label-name">
                   <span class="content-name">Confirmar nova Senha</span>
                 </label>
               </div>
                </div>

                <div className="botao">
                <button onClick={alterarSenha} class="continuarbotao2">Confirmar</button>
                </div>

            </div>



        </div>
    );
}

export default AlterarSenha;