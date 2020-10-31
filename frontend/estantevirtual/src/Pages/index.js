import React from 'react';
import { Link } from 'react-router-dom';
import './inicial.css';

function Inicial() {
  return (
    <div className="Inicial">
      <header className="Inicial-Header">
      
        <div class="Logo"><h1>goBook</h1></div>

        <div class="Pesquisa1">
          <input type="search" placeholder=" Livro ou Autor" class="Texto"></input> 
            <i class="fas fa-search"></i>
        </div>

        <div class="BotoesCabeçalho">
          <Link class="BotoesCabeçalho1" to="/Cadastro">Cadastre-se</Link>
          <Link class="BotoesCabeçalho2" to="/Login">Faça Login</Link>
        </div>

      </header>
      <body>
        <nav class="Cabeçalho">
            <ul class="OpcoesCabeçalho">
              <Link to="/./InicialCliente"><li class="OpcoesCabeçalho2">Livros e Autores</li></Link>
              <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais recomendados</li></Link>
              <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais vendidos</li></Link>
            </ul>
          </nav>
        </body>
    </div>
  );
}

export default Inicial;
