import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import logoImg from '../../storage/images/logo/SizePinterest/logo_size.jpg';
import estanteLivro from '../../storage/images/icons/livrosHorizontal.png';
import carrinhoCompra from '../../storage/images/icons/carrinhoCompras.png';
import adicionarEbook from '../../storage/images/icons/biblioteca.png';
import meuPerfil from '../../storage/images/icons/user.png';

export default function Header() {


    return (
        <header>
            <div className="menu_lateral">
                <Link to="" className="nome_empresa">
                    <img src={logoImg} />
                    <h5>GoBook Company</h5>
                </Link>
                <div className="opcoes_menu">
                    <h4>Navague pelo Site!</h4>
                    <div className="opcao">
                        <img src={estanteLivro} />
                        <Link to="">
                            <p>Minha Estante</p>
                        </Link>
                    </div>
                    <div className="opcao">
                        <img src={carrinhoCompra}/>
                        <Link to="">
                            <p>Meu Carrinho</p>
                        </Link>
                    </div>
                    <div className="opcao">
                        <img src={adicionarEbook}/>
                        <Link to="">
                            <p>Adicionar Ebook</p>
                        </Link>
                    </div>
                    <div className="opcao">
                        <img src={meuPerfil}/>
                        <Link to="">
                            <p>Meu Perfil</p>
                        </Link>
                    </div>
                </div>
                <div className="ajuda">
                    <h5>Ajuda</h5>
                    <ul>
                        <li>
                            <Link to="">FAQ</Link>
                        </li>
                        <li>
                            <a href="mailto:gobookcompany@gmail.com?subject=Feedback">
                                Feedback sobre nós
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav_bar">
                <h5>Página Inicial</h5>
                <div className="usuario">
                    <img className="mensagem_alerta" src="" />
                    <img onclick="" src="" />
                </div>
            </div>

            <div id="User">
                <div>
                    <img onclick="" src="../Images/PaginaInicial/icon close.png" />
                    <div className="opcoes">
                        <Link to="">Alterar Conta</Link>
                        <Link to="">Sair</Link>
                    </div>
                </div>    
            </div>
        </header>
    );

    // Ícones feitos por <a href="https://www.flaticon.com/br/autores/pause08" title="Pause08">Pause08</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
    // Ícones feitos por <a href="https://flat-icons.com/" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
    // Ícones feitos por <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
    // Ícones feitos por <a href="https://flat-icons.com/" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/br/" title="Flaticon"> www.flaticon.com</a>
    //
    //
    // 
}   
            
    