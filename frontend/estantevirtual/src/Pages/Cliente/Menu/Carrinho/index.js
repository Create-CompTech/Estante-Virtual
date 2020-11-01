import React from 'react'
import {Link} from 'react-router-dom'
import './carrinho.css'

function Carrinho(){
    return(
        <div className="Carrinho">
            <div className="Carrinho-Header">
            <input type="checkbox" id="check"></input>
                <label for="check">
                    <i class="fas fa-bars" id="btn"></i>
                    <i class="fas fa-bars" id="cancel"></i>
                </label>
                <div class="sidebarperfil">
                    <header>Menu goBook</header>
                    <ul>
                        <li><Link to="/InicialCliente">Inicial</Link></li>
                        <li><Link to="/Perfil">Perfil</Link></li>
                        <li><Link to="/Estantes">Minhas estantes</Link></li>
                        <li><Link to="/Carrinho">Meu carrinho</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Carrinho;