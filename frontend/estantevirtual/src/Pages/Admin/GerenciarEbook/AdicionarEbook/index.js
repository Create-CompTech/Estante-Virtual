import React from 'react'
import './gerenciar.css'
import { Link } from 'react-router-dom';
import gobook_logo from '../../../../storage/images/logo/SizePinterest/gobook_logo.png'

export default function GerenciarEbook(props){


    return(
        <div className="gerenciarebook">
        <div className="Inicial">
      <header className="Inicial-Header">
      
        <div class="Logo">
          <img src={gobook_logo} height="270px" width="275px"/>
        </div>

        <div className="nome-adm">
            <h3>Sinta-se em casa, {props.location.state.nome}!</h3>
        </div>

      </header>
      <body>
        <nav class="Cabeçalho">
            <ul class="OpcoesCabeçalho">
            <Link to="./InicialAdm"><li class="OpcoesCabeçalho2">Voltar</li></Link>
              <Link to="./AlterarEbook"><li class="OpcoesCabeçalho2">Ebooks</li></Link>
            </ul>
          </nav>
        </body>
        </div>
        <div className="adicionar">
          <div className="adicionar-container">
            <div className="add-esquerdo">
              <div className="container-esquerdo">
                <div className="input-add">
                <p>Ebook</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Descrição</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Foto ebook</p>
                  <label> 
                    <input id="file" type="file"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Preços</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Paginas</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Editora</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Edição</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
              </div>
            </div>
            <div className="add-direito">
              <div className="container-direito">
              <div className="input-add">
                <p>Generos</p>
                  <label> 
                    <input type="text"></input>
                  </label>
               </div>
               <div className="input-add">
                <p>Genero principal</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>N° de Série</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Idioma</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Idioma Original</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Edição</p>
                  <label> 
                    <input type="date"></input>
                  </label>
                </div>
                <div className="botao-adicionar">
                  <button>Cancelar</button>
                  <button>adicionar</button>
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