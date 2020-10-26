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

        <div class="BotoesCabeçalho">
          <button>Menu</button>
          <Link to="/">Logout</Link>
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
