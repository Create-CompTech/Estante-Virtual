import React from 'react'
import './inicialadmin.css'
import { Link } from 'react-router-dom';
import gobook_logo from '../../storage/images/logo/SizePinterest/gobook_logo.png';


export default function InicialAdm(){
    return(
      <div className="Inicialadm">
        <div className="menu-principal">
           <div className="MenuCadastro">
              <div class="sidebaradm">
                 <div className="imgadm">
                 <img src={gobook_logo} height="290px" width="255px"/>
                 </div>
               <ul>
                 <li><Link to="/GerenciarEbook">Gerenciar ebooks</Link></li>
                 <li><Link to="/">Classificar Feedbacks</Link></li>
                 <li><Link to="/CadastroAdm">Adicionar admin</Link></li>
                 <li><Link to="/Login">Sair</Link></li>
               </ul>
              </div>
            </div>
         </div>
         <div className="administradores">
           <div className="container-adm">
             <div className="adm">
               <div className="titulo-adm">
                 <h1>Administradores</h1>
               </div>
               <div className="adm-nome">
                 <p>Gustavo Furtado</p>
               </div>
               <div className="adm-nome">
                 <p>Sthefany Cristovam</p>
               </div>
               <div className="adm-nome">
                 <p>Lucas de Paula</p>
               </div>
             </div>
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