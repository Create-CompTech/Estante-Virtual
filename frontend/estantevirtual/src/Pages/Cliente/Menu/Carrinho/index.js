import React from 'react'
import {Link} from 'react-router-dom'
import './carrinho.css'

function Carrinho(){
    return(
        <div className="Carrinho">
            <div className="Carrinho-Header">
            <input type="checkbox" id="check"></input>
                <label for="check">
                    <i class="fas fa-bars" id="btn"></i>
                    <i class="fas fa-bars" id="cancel"></i>
                </label>
                <div class="sidebarperfil">
                    <header>Menu goBook</header>
                    <ul>
                        <li><Link to="/InicialCliente">Inicial</Link></li>
                        <li><Link to="/Perfil">Perfil</Link></li>
                        <li><Link to="/Estantes">Minhas estantes</Link></li>
                    </ul>
                </div>
            </div>
            <div className="carrinho">
                <div className="carrinho-container">
                    <div className="titulo-carrinho">
                        <h1>Meu carrinho</h1>
                    </div>
                    <div className="item-container">
                        <div className="item1"><img src='/assets/Eragon.png' height="145x" width="128px" alt=""></img></div>
                        <div className="descricao1">
                            <div className="nomes">
                                <p>Livro: Eragon</p>
                                <p>Autor: Christopher Paolini</p>
                            </div>
                            <div className="preco">
                                <p>Preço R$ 23,99</p>
                                <a href='#' >Excluir</a>
                            </div>
                        </div>
                        <div className="item2"><img src='/assets/GravityFallsAventuraEmDobro.png' height="145x" width="128px" alt=""></img></div>
                        <div className="descricao2">
                        <div className="nomes">
                                <p>Livro: Gravity Falls: aventuras em dobro</p>
                                <p>Autor: Tracey West</p>
                            </div>
                            <div className="preco">
                                <p>Preço R$ 35,50</p>
                                <a href='#' >Excluir</a>
                            </div>
                        </div>
                    </div>

                    <div className="item-container">
                        <div className="item1"><img src='/assets/ZaynMalik.png' height="145x" width="128px" alt=""></img></div>
                        <div className="descricao1">
                            <div className="nomes">
                                <p>Livro: Zayn</p>
                                <p>Autor: Zayn Malik</p>
                            </div>
                            <div className="preco">
                                <p>Preço R$ 20,99</p>
                                <a href='#' >Excluir</a>
                            </div>
                        </div>
                        <div className="item1"><img src='/assets/FilmeCulpaDasEstrelas.png' height="145x" width="128px" alt=""></img></div>
                        <div className="descricao2">
                        <div className="nomes">
                                <p>Livro: A culpa é das estrelas</p>
                                <p>Autor: John Green</p>
                            </div>
                            <div className="preco">
                                <p>Preço R$ 22,90</p>
                                <a href='#' >Excluir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="botao-comprar">
                <button>Comprar</button>
            </div>

            <div className="menu-baixo">

            </div>

        </div>       
    );
}

export default Carrinho;