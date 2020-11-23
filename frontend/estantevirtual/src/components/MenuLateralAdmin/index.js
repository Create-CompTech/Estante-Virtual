import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuLateralAdmin({ props }) {

    return (
      <div className="opcoes_menu">
            <ul>
                 <li><Link to={{
                            pathname: "/CadastrarEbook",
                            state: props
                      }}>Cadastrar ebooks</Link></li>
                 <li><Link to="/">Classificar Feedbacks</Link></li>
                 <li><Link to="/CadastroAdm">Adicionar admin</Link></li>
                 <li><Link to="/Login">Sair</Link></li>
            </ul>
      </div>
    );
}

