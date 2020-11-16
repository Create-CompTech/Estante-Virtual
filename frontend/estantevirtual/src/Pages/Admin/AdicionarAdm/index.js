import React from 'react'
import "./adicionaradm.css"
import { Link } from 'react-router-dom';
import gobook_logo from '../../../storage/images/logo/SizePinterest/gobook_logo.png'
import icon_fotoadm from '../../../storage/images/icons/icon_perfiladm.png'


export default function AdicionarAdm(){
    return(
        <div className="AdiconarAdm">
            <div className="menu-add-adm">
            <div className="menu-principal">
                <div className="MenuCadastro">
                    <div class="sidebaradm">
                    <div className="imgadm">
                        <img src={gobook_logo} height="290px" width="255px"/>
                    </div>
                    <ul>
                      <li><Link to="/GerenciarEbook">Gerenciar ebooks</Link></li>
                      <li><Link to="/InicialAdm">Voltar</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className="container-add-adm">
                <div className="container-branco-adm">
                    <div className="container-campos">
                        <div className="titulo-adm-add">
                            <h1>Novo administrador</h1>
                        </div>
                        <div className="foto-adm">
                        <img src={icon_fotoadm} height="100px" width="110px"/>
                        </div>
                        <div className="cadastro-adm">
                            <div className="input-adm-cd">
                                <input type="text" placeholder="Nome"></input>
                            </div>
                            <div className="input-adm-cd">
                                <input type="text" placeholder="RG"></input>
                            </div>
                            <div className="input-adm-cd">
                                <input type="text" placeholder="CPF"></input>
                            </div>
                        </div>
                        <div className="genero-cargo">
                             <select class="genero" type="text" placeholder=" Pagamento">
                             <option value="Feminino">Gênero</option>
                             <option value="Feminino">Masculino</option>
                             <option value="Feminino">Feminino</option>
                             <option value="Feminino">Binário</option>
                             <option value="Feminino">Prefiro não</option>
                             </select>
                             <select class="genero" type="text" placeholder=" Pagamento">
                             <option value="Feminino">Cargo</option>
                             <option value="Feminino">Administrador</option>
                             </select>
                       </div>
                       <div className="botao-cadastrar-adm">
                           <button>Cadastrar</button>
                       </div>
                    </div>
                </div>
            </div>
            <div className="menu-baixo">
                <div className="componentes">
                 <a href="#">Sobre /</a>
                 <a href="#">Termos /</a>
                 <a href="#">Contate-nos /</a>
                </div>
                <div className="orderby">
                <p>São Paulo - SP</p>
                </div>
            </div>
        </div>
    );
}