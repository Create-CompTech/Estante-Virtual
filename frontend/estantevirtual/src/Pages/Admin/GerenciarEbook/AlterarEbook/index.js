import React from 'react'
import './alterar.css'
import { Link } from 'react-router-dom';
import gobook_logo from '../../../../storage/images/logo/SizePinterest/gobook_logo.png';

export default function AlterarEbook() {
    return(
        <div className="gerenciarebook">
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
              <Link to="./InicialAdm"><li class="OpcoesCabeçalho2">Inicial</li></Link>
            </ul>
          </nav>
        </body>
        </div>
        <div className="container-alterar">
          <div className="alterar-livro">
            <div className="ebook-container2">
              <div className="ebook-1">
              <div class="img-livro">
                <img src='/assets/Eragon.png' height="140x" width="130px" ></img>
              </div>
              <div className="informacoes">
              <div className="titulo-livro">
                <h1>Eragon</h1>
              </div>
              <div className="botao-alterar1">
                <Link to="./AlterarInformacao">
                  <button>Alterar informações</button>
                </Link>
              </div>
              </div>
              </div>
              <div className="ebook-1">
              <div class="img-livro">
                <img src='/assets/HarryPotterPedraFilosofal' height="140x" width="130px" ></img>
              </div>
              <div className="informacoes">
              <div className="titulo-livro">
                <h1>Eragon</h1>
              </div>
              <div className="botao-alterar1">
                <Link to="./AlterarInformacao">
                  <button>Alterar informações</button>
                </Link>
              </div>
              </div>
              </div>
            </div>
          </div>
          <div className="alterar-livro">
            <div className="ebook-container2">
            <div className="ebook-1">
              <div class="img-livro">
                <img src='/assets/GravityFallsAventuraEmDobro.png' height="140x" width="130px" ></img>
              </div>
              <div className="informacoes">
              <div className="titulo-livro">
                <h1>Eragon</h1>
              </div>
              <div className="botao-alterar1">
                <Link to="/AlterarInformacao">
                  <button>Alterar informações</button>
                  </Link>
              </div>
              </div>
            </div>
            <div className="ebook-1">
              <div class="img-livro">
                <img src='/assets/PiratasDoCaribeJackSparrowOGuardiaoDoTempo.png' height="140x" width="130px" ></img>
              </div>
              <div className="informacoes">
              <div className="titulo-livro">
                <h1>Eragon</h1>
              </div>
              <div className="botao-alterar1">
                <Link to="/AlterarInformacao">
                  <button>Alterar informações</button>
                  </Link>
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