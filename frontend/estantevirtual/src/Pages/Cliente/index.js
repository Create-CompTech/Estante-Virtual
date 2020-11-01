import React from 'react';
import { Link } from 'react-router-dom';
import './inicialcliente.css';


function Inicial() {
  return (
    <div className="Inicial">
      <header className="Inicial-Header">
      
        <div class="Logo"><h1>goBook</h1></div>

        <div class="Pesquisa">
          <input type="search" placeholder="Livro ou Autor" class="Texto"></input> 
            <i class="fas fa-search"></i>
        </div>
        
        <input type="checkbox" id="check"></input>
          <label for="check">
              <i class="fas fa-bars" id="btn"></i>
              <i class="fas fa-bars" id="cancel"></i>
          </label>
          <div class="sidebar">
              <header>Menu goBook</header>
              <ul>
                  <li><Link to="/Perfil">Perfil</Link></li>
                  <li><Link to="/Estantes">Minhas estantes</Link></li>
                  <li><Link to="/Carrinho">Meu carrinho</Link></li>
              </ul>
              <div class="botaologout">
                <Link class="botaologout1" to="/">Logout</Link>
                <i class="fas fa-sign-in-alt" id="btn1"></i>
              </div>
          </div>

      </header>
      <body>
        <nav class="Cabeçalho">
            <ul class="OpcoesCabeçalho">
              <Link to=""><li class="OpcoesCabeçalho2">Livros e Autores</li></Link>
              <Link to=""><li class="OpcoesCabeçalho2">Livros mais recomendados</li></Link>
              <Link to=""><li class="OpcoesCabeçalho2">Livros mais vendidos</li></Link>
            </ul>
          </nav>
        </body>

        <div class="livros-aventura">
          <div class="container-aventura">
            <div className="titulo-aventura">
              <h1>Livros de aventura</h1>
            </div>
            <div className="livros-box">
              <div className="livros">
                <div className="livro1"><img src='/assets/HarryPotterPedraFilosofal' height="160x" width="134px" alt=""></img></div>
                <div className="livro1"><img src='/assets/SenhorDosAneisTolkienV1' height="160x" width="134px" alt=""></img></div>
                <div className="livro1"><img src='/assets/PiratasDoCaribeJackSparrowOGuardiaoDoTempo.png' height="160x" width="134px" alt=""></img></div>
                <div className="livro1"><img src='/assets/GravityFallsAventuraEmDobro.png' height="160x" width="134px" alt=""></img></div>
                <div className="livro1"><img src='/assets/Eragon.png' height="160x" width="134px" alt=""></img></div>
                <div className="livro-mais"><Link to="#"><p>Mostrar mais</p></Link></div>
              </div>
            </div>
          </div>
        </div>

        <div class="livros-romance">
          <div class="container-romance">
            <div className="titulo-romance">
              <h1>Livros de romance</h1>
            </div>
            <div className="livros-box">
              <div className="livros">
                <div className="livro1"><img src='/assets/FilmeCulpaDasEstrelas.png' height="160x" width="134px" alt=""></img></div>
                <div className="livro1"><img src='/assets/AGarotaQueVoceDeixouParaTras.png' height="160x" width="134px" alt=""></img></div>
                <div className="livro1"><img src='/assets/ACincoPassosDeVoce.png' height="160x" width="134px" alt=""></img></div>
                <div className="livro1"><img src='/assets/AnnaEOBeijoFrances' height="160x" width="134px" alt=""></img></div>
                <div className="livro1"><img src='/assets/UmQuartoComVista' height="160x" width="134px" alt=""></img></div>
                <div className="livro-mais"><Link to="#"><p>Mostrar mais</p></Link> </div>
              </div>
            </div>
          </div>
        </div>

        <div className="destaque">
          <div className="container-destaque">
            <div className="titulo-destaque">
              <h1>Destaques da semana</h1>
            </div>
            <div className="destaque-box">
              <div className="livros-destaque">
               <div className="destaque1"><img src='/assets/OQueAconteceuComAnnie.png' height="279.5x" width="231px" alt=""></img></div> 
               <div className="destaque1"><img src='/assets/AGarotaDoLago.png' height="279.5x" width="231px" alt=""></img></div> 
               <div className="destaque1"><img src='/assets/OHobbitJJRTolkien.png' height="279.5x" width="231px" alt=""></img></div> 
               <div className="destaque1"><img src='/assets/AsCronicasDeNarnia2009.png' height="279.5x" width="231px" alt=""></img></div> 
               <div className="destaque1"><img src='/assets/ZaynMalik.png' height="279.5x" width="231px" alt=""></img></div> 
              </div>
            </div>
          </div>
        </div>

        <div className="livros-terror">
          <div className="container-terror">
            <div className="titulo-terror">
              <h1>Livros de terror</h1>
            </div>
            <div className="livros">
              <div className="livro1"><img src='/assets/ItACoisaStephenKing.png' height="160x" width="134px" alt=""></img></div>
              <div className="livro1"><img src='/assets/OCemiterioStephenKing.png' height="160x" width="134px" alt=""></img></div>
              <div className="livro1"><img src='/assets/AAssombracaoDaCasaDaColina.png' height="160x" width="134px" alt=""></img></div>
              <div className="livro1"><img src='/assets/QuatroEstacoesStephenKing.png' height="160x" width="134px" alt=""></img></div>
              <div className="livro1"><img src='/assets/GuerraMundialZ.png' height="160x" width="134px" alt=""></img></div>
              <div className="livro-mais"><Link to="#"><p>Mostrar mais</p></Link> </div>
            </div>
          </div>
        </div>


        <div className="menu-baixo"></div>

  </div>
  );
}

export default Inicial;
