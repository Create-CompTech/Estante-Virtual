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
    <div className="IncialCliente">
                  <div className="MenuCadastro">
            <input type="checkbox" id="check"></input>
                <label for="check">
                    <i class="fas fa-bars" id="cancel"></i>
                </label>
                <div class="sidebarperfil">
                    <header>Menu goBook</header>
                    <ul>
                        <li><Link to="/Perfil">Perfil</Link></li>
                        <li><Link to="/Estantes">Minhas estantes</Link></li>
                        <li><Link to="/Carrinho">Meu carrinho</Link></li>
                        <div className="img">
                        <img src={gobook_logo} height="240px" width="255px"/>
                        </div>
                    </ul>
                </div>
            </div>
    </div>
  );
}
