import React from 'react'
import './livro1.css'
import { Link } from 'react-router-dom';
import gobook_logo from '../../../storage/images/logo/SizePinterest/gobook_logo.png'

export default function Livro1(){
    return(
        <div className="HarryPotter">
            <header className="Inicial-Header">
                <input type="checkbox" id="check"></input>
                    <label for="check">
                        <i class="fas fa-bars" id="btn"></i>
                        <i class="fas fa-bars" id="cancel"></i>
                    </label>
                <div class="sidebar">
                <header>
                    <div class="Logo">
                        <img src={gobook_logo} height="270px" width="275px"/>
                    </div>
                </header>
                    <ul>
                        <li><Link href="/Perfil">Perfil</Link></li>
                        <li><Link to="/Estantes">Estantes</Link></li>
                        <li><Link to="/Carrinho">Carrinho</Link></li>
                    </ul>
                </div>

                <div class="Pesquisa">
                    <input type="search" placeholder="Livro ou Autor" class="Texto"></input> 
                    <i class="fas fa-search"></i>
                </div>
  
                <div class="Logo">
                    <img src={gobook_logo} height="270px" width="275px"/>
                </div>

            </header>
            <div className="Livro1">
                <div className="Livro1-container">
                    <div className="livro-info-container">
                        <div className="livro">
                            <img src='/assets/HarryPotterPedraFilosofal' height="300px" width="200px"/>
                        </div>
                        <div className="info-container">
                            <div className="ebook-titulo">
                                <h1>Harry Potter e a pedra filosofal </h1>
                            </div>
                            <div className="pagamento-container">
                                <div className="titulo-opcao">
                                    <p> -Escolhe a forma de pagamento</p>
                                </div>
                                <div className="opcao-pagamento">
                                    <button>R$30</button>
                                    <button id="ponto">50 Pontos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}