import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import gobook_logo from '../../storage/images/logo/SizePinterest/gobook_logo.png';
import './index.css';
import LoadingBar from 'react-top-loading-bar';

import ConsultarEbooks from '../../services/ConsultarEbooks';
const api = new ConsultarEbooks();

export default function mostrarEbooks(){
  //const loadingBar = useRef(null);
  //const [ebooks, setEbooks] = useState([])

  //const Consultar = async () =>{
    //loadingBar.current.continuousStart();

    //const resp = await api.Consultar()
    //setEbooks([...resp])

    //loadingBar.current.complete();

    //document.getElementById("table_box").style.display = "block";
  //} 

  return (
    <div className="menu-principal">
      <div className="MenuCadastro">
        <header>
          <input type="checkbox" id="check"></input>
            <label for="check">
              <i class="fas fa-bars" id="cancel"></i>
            </label>
            <div class="sidebarperfil">
              <div className="img">
                <img src={gobook_logo} height="240px" width="255px"/>
              </div>
                <ul>
                  <li><Link to="/Perfil">Perfil</Link></li>
                  <li><Link to="/Estantes">Minhas estantes</Link></li>
                  <li><Link to="/Carrinho">Meu carrinho</Link></li>
                  <li><Link to="/Login">Sair</Link></li>
                </ul> 
            </div>
          </header>
        <body>
          <div>
              <nav class="Cabeçalho">
                <ul class="OpcoesCabeçalho">
                  <Link to="/./InicialCliente"><li class="OpcoesCabeçalho2">Livros e Autores</li></Link>
                  <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais recomendados</li></Link>
                  <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais vendidos</li></Link>
                </ul>
              </nav>
            </div>

      </body>
    </div>
  </div>
  );
}
