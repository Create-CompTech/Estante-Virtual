import React from 'react'
import './alterarInformacao.css'
import { Link } from 'react-router-dom'
import gobook_logo from '../../../../../storage/images/logo/SizePinterest/gobook_logo.png';

export default function alterarInformacao(){
    return(
        <div className="Alterar-Informação">
                    <div className="Inicial">
        <header className="Inicial-Header">
      
        <div class="Logo">
          <img src={gobook_logo} height="270px" width="275px"/>
        </div>

        <div className="nome-adm">
            <h3>Seja bem-vindo Gustavo Furtado</h3>
        </div>

        </header>
        <body>
        <nav class="Cabeçalho">
            <ul class="OpcoesCabeçalho">
              <Link to="./AlterarEbook"><li class="OpcoesCabeçalho2">Voltar</li></Link>
            </ul>
          </nav>
        </body>
        </div>
        <div className="container-info">
            <div className="container-alterar-info">
                <div className="info-esquerdo">
                    <div className="input-alterar">
                        <p>Ebook</p>
                        <label>
                            <input type="text"></input>
                        </label>
                    </div>
                    <div className="input-alterar">
                        <p>Descrição</p>
                        <label>
                            <input type="text"></input>
                        </label>
                    </div>
                    <div className="input-alterar">
                        <p>Foto Ebook</p>
                        <label for="arquivo"> 
                            <input type="file" ></input>
                        </label>
                    </div>
                    <div className="input-alterar">
                        <p>Preço</p>
                        <label>
                            <input type="text"></input>
                        </label>
                    </div>
                    <div className="input-alterar">
                        <p>Páginas</p>
                        <label>
                            <input type="text"></input>
                        </label>
                    </div>
                    <div className="input-alterar">
                        <p>Editora</p>
                        <label>
                            <input type="text"></input>
                        </label>
                    </div>
                    <div className="input-alterar">
                        <p>Edição</p>
                        <label>
                            <input type="text"></input>
                        </label>
                    </div>
                </div>
                <div className="info-direito">
                <div className="input-alterar">
                        <p>Idioma</p>
                        <label>
                            <input type="text"></input>
                        </label>
                    </div>
                    <div className="input-alterar">
                        <p>Original</p>
                        <label>
                            <input type="text"></input>
                        </label>
                    </div>
                    <div className="input-alterar">
                        <p>Data</p>
                        <label>
                            <input type="date"></input>
                        </label>
                    </div>
                    <div className="botao-adicionar">
                      <button>Cancelar</button>
                      <button>Alterar</button>
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
