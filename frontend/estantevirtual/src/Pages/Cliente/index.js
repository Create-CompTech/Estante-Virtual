import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './inicialcliente.css';

import ConsultarEbooks from '../../services/ConsultarEbooks';
const api = new ConsultarEbooks();


function Inicial(props) {

  const [ebooks, setEbooks] = useState([]);

  const ebooksPorGenero = async (e) => {
    
    const resp = await api.EbooksPorGenero();
    setEbooks(resp);    
    console.log(ebooks);
  }

  useEffect(() => {
    ebooksPorGenero();
  }, []);

  return (
    <div className="Inicial">
      <header className="Inicial-Header">
      
        <div class="Logo"><h1>goBook</h1></div>
        <div>Olá, {props.location.state.nome}!</div>

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


        
        <div className="titulo">Vários Ebooksss</div>

        <div className="ebooks_box">
          {ebooks.map( item => 
            <div className="ebook">
              <p>{item.nome}</p>
              <p>{item.autor}</p>
              <p>{item.sinopse}</p>
            </div>
          )}
        </div>
          
        <div className="menu-baixo"></div>

       </div>   
    )};

    export default Inicial;