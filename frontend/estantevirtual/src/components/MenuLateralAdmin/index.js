import React from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

export default function MenuLateralAdmin({ props }) {

    return (
      <div className="opcoes_menu">
            <ul>
                 <li><Link to={{
                            pathname: "/CadastrarEbook",
                            state: props
                      }}><p>Cadastrar ebooks</p></Link></li>
                 <li><Link to="/"><p>Classificar Feedbacks</p></Link></li>
                 <li><Link to="/CadastroAdm"><p>Adicionar admin</p></Link></li>
                 <li><Link to="/Login"><p>Sair</p></Link></li>
            </ul>
      </div>
    );
}

