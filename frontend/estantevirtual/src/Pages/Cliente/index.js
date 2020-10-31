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
                <li><a href="a">Perfil</a></li>
                <li><a href="a">Mensagens</a></li>
                <li><a href="a">Minhas estantes</a></li>
                <li><a href="a">Meu carrinho</a></li>
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
                <div className="livro1"></div>
                <div className="livro1"></div>
                <div className="livro1"></div>
                <div className="livro1"></div>
                <div className="livro1"></div>
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
                <div className="livro1"></div>
                <div className="livro1"></div>
                <div className="livro1"></div>
                <div className="livro1"></div>
                <div className="livro1"></div>
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
               <div className="destaque1"></div> 
               <div className="destaque1"></div> 
               <div className="destaque1"></div> 
               <div className="destaque1"></div> 
               <div className="destaque1"></div> 
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
              <div className="livro1"></div>
              <div className="livro1"></div>
              <div className="livro1"></div>
              <div className="livro1"></div>
              <div className="livro1"></div>
              <div className="livro-mais"><Link to="#"><p>Mostrar mais</p></Link> </div>
            </div>
          </div>
        </div>


        <div className="menu-baixo"></div>

  </div>
  );
}

export default Inicial;
