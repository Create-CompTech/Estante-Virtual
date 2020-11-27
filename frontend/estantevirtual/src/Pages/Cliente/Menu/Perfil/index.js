import React from 'react'
import {Link} from 'react-router-dom'
import './perfil.css'
import gobook_logo from '../../../../storage/images/logo/SizePinterest/gobook_logo.png'

function Perfil (){
    return(
        <div className="perfil">
            <div className="MenuCadastro">
            <input type="checkbox" id="check"></input>
                <label for="check">
                    <i class="fas fa-bars" id="cancel2"></i>
                </label>
                <div class="sidebarperfil">
                    <header>Menu goBook</header>
                    <ul>
                        <li><Link to="/InicialCliente">Inicial</Link></li>
                        <li><Link to="/Carrinho">Meu carrinho</Link></li>
                        <li><Link to="/Estantes">Minhas estantes</Link></li>
                        <div className="img">
                        <img src={gobook_logo} height="240px" width="255px"/>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="container-perfil">
                <div className="perfil-branco">
                    <div className="container-perfil-info">
                        <div className="perfil-titulo">
                            <h1>Suas informações</h1>
                        </div>
                        <div className="suas-informacao">
                            <div className="foto-perfil">

                            </div>
                            <div className="info-usuario">
                                <div className="info-1">
                                    <div className="ds-usuario">
                                        <input type="text" placeholder="Nome" ></input>
                                    </div>
                                    <div className="ds-usuario" id="data-usuario">
                                        <input type="date" ></input>
                                    </div>
                                </div>
                                <div className="info-1">
                                <div className="ds-usuario">
                                        <input type="text" placeholder="E-mail" ></input>
                                    </div>
                                    <div className="ds-usuario" id="data-usuario">
                                        <input type="text" placeholder="Assinatura"></input>
                                    </div>
                                </div>
                                <div className="alterar-info">
                                    <a href="#">Alterar e-mail</a>
                                    <a href="#">Alterar senha</a>
                                </div>
                            </div>
                        </div>
                        <div className="descricao-usuario">
                            <div className="container-du">
                                <div className="descricao-input">
                                    <textarea name="descricao-us" cols="61" rows="3" maxLength="175"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="assinatura">
                            <div className="titulo-assinatura">
                                <h1>Assinatura</h1>
                            </div>
                            <div className="input-assinatura">
                                <div className="info-1">
                                    <div className="ds-usuario" id="nome">
                                        <input type="text" placeholder="Titular: Gustavo" ></input>
                                    </div>
                                    <div className="ds-usuario" >
                                        <input type="text" placeholder="Sobrenome"></input>
                                    </div>
                                </div>
                                <div className="info-1">
                                    <div className="ds-usuario" id="cartao">
                                        <input type="number" placeholder="Número do cartão" ></input>
                                    </div>
                                    <div className="ds-usuario" id="data-usuario">
                                        <input type="date" ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ponto">
                            <div className="titulo-ponto">
                                <h1>Seus pontos</h1>
                            </div>
                            <div className="qtd-ponto">
                                <div className="div-ponto">
                                    <input type="number" placeholder=" n°" min="0"  ></input>
                                </div>
                            </div>
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

export default Perfil;