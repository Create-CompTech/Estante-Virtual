import React from 'react'
import {Link} from 'react-router-dom'
import './estantes.css'
import gobook_logo from "../../../../storage/images/logo/SizePinterest/gobook_logo.png"

function Estantes(){
    return(
        <div className="Estantes">
            <div className="MenuCadastro">
            <input type="checkbox" id="check"></input>
                <label for="check">
                    <i class="fas fa-bars" id="cancel"></i>
                </label>
                <div class="sidebarperfil">
                    <header>Menu goBook</header>
                    <ul>
                        <li><Link to="/InicialCliente">Inicial</Link></li>
                        <li><Link to="/Perfil">Perfil</Link></li>
                        <li><Link to="/Carrinho">Meu carrinho</Link></li>
                        <div className="img">
                        <img src={gobook_logo} height="240px" width="255px"/>
                        </div>
                    </ul>
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

export default Estantes;