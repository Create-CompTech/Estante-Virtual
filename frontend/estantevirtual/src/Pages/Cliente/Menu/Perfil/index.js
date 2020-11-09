import React from 'react'
import {Link} from 'react-router-dom'
import './perfil.css'
import gobook_logo from '../../../../storage/images/logo/SizePinterest/gobook_logo.png'

function Perfil (){
    return(
        <div className="Perfil">
            <div className="Perfil-Header">
            <input type="checkbox" id="check"></input>
                <label for="check">
                    <i class="fas fa-bars" id="cancel"></i>
                </label>
                <div class="sidebarperfil">
                    <header>Menu goBook</header>
                    <ul>
                        <li><Link to="/InicialCliente">Inicial</Link></li>
                        <li><Link to="/Estantes">Minhas estantes</Link></li>
                        <li><Link to="/Carrinho">Meu carrinho</Link></li>
                        <div className="img">
                        <img src={gobook_logo} height="240px" width="255px"/>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="container-menu">
                 <div className="container-perfil">
                     <div className="titulo-perfil">
                         <h1>Suas Informações</h1>
                     </div>
                     <div className="informacao">
                         <div className="informacao-container">
                             <div className="foto">
                                 <p>foto</p>
                             </div>
                             <div className="dados-container">
                                 <div className="dados"></div>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    );
}

export default Perfil;