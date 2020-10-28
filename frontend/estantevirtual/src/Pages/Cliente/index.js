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
    </div>
  );
}

export default Inicial;
