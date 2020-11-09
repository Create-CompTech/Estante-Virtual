import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gobook_logo from '../../storage/images/logo/SizePinterest/gobook_logo.png';

import './index.css';
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
    <div className="menu-principal">
          <div className="MenuCadastro">
            <input type="checkbox" id="check"></input>
              <label for="check">
                <i class="fas fa-bars" id="cancel"></i>
              </label>
        <div class="sidebarperfil">
            <header>goBook</header>
            <ul>
                <li><Link to="/Perfil">Perfil</Link></li>
                <li><Link to="/Estantes">Minhas estantes</Link></li>
                <li><Link to="/Carrinho">Meu carrinho</Link></li>
                <li><Link to="/Login">Sair</Link></li>
                <div className="img">
                <img src={gobook_logo} height="240px" width="255px"/>
                </div>
            </ul>
        </div>
    </div>
    </div>
    );
}

export default Inicial;