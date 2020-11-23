import React from 'react';
import './cabecalhoAdmin.css';
import gobook_logo from '../../storage/images/logo/SizePinterest/gobook_logo.png';

export default function CabecalhoAdmin({ props }) {
    return (
        <div className="menu_admin">
            <div className="logo_gobook">
                <img src={gobook_logo}/>  
            </div>
            <div className="dados_usuario">
                <h4>Bem vindo(a), { props.nome }!</h4>  
            </div>
        </div>
    );
}