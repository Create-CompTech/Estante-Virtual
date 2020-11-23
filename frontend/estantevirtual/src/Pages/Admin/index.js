import React from 'react'

import './inicialadmin.css'
import { Link } from 'react-router-dom';
import Rodape from '../../components/Rodape';

import gobook_logo from '../../storage/images/logo/SizePinterest/gobook_logo.png';
import fundo from '../../storage/images/logo/SizePinterest/fundo.png'
import CabecalhoAdmin from '../../components/CabecalhoAdmin';


export default function InicialAdm(props){

    const infos = props.location.state;


    return(
      <div className="Inicialadm">
        
        <CabecalhoAdmin props = { props.location.state } />

        <div className="opcoes_admin">
            <Link to={{
                  pathname: "/CadastrarEbook",
                  state: props
            }}>Cadastrar ebooks</Link>
        </div>

        <Rodape />
      </div>
    );
}