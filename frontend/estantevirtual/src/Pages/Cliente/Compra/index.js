import React from 'react';
import './compra.css';
import {Link} from 'react-router-dom';
import gobook_logo from '../../../storage/images/logo/SizePinterest/gobook_logo.png'
import instagram from '../../../storage/images/icons/instagram_icon.png'

export default function Compra(){
    return(
        <div className="Compra">
           <div className="menu">
                <div className="imagem">
                <p>
                  <img src={gobook_logo} height="215px" width="235px"/>
                </p>
               </div>
            <div className="contato">
                <a to="" href="https://www.instagram.com/gobookcompany/"><img src={instagram} height="49px" width="53px"></img></a>
            </div>
            </div>
            <div className="fundo-compra">
                <div className="container-compra">
                    <div className="container-pagamento">
                        <div className="ebook">
                            <div className="titulo-ebook">
                                <h1>Informações Ebook</h1>
                            </div>
                            <div className="book1">
                                   <img src='/assets/HarryPotterPedraFilosofal' height="160x" width="134px" alt=""></img>
                                <div className="autor-book">
                                   <p>Autor: J. K. Rowling</p>
                                   <p>Livro: Harry Potter e a pedra filosofal</p>
                                </div>
                            </div>
                            <div className="descricao-book">
                                <p>Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um
                                   poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a
                                   casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 
                                   anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas
                                   velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No
                                   dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo,
                                   como o de Alice no país das maravilhas...
                                   </p>
                            </div>
                        </div>
                        <div className="pagamento">
                            <div className="info-pagamento">
                                <h1>Informações do pagamento</h1>
                                <div className="forma-pagamento">
                                     <select class="genero" type="text" placeholder=" Pagamento">
                                     <option value="Feminino">Cartão</option>
                                     <option value="Feminino">Pontos</option>
                                     </select>
                                </div>
                            </div>
                            <div className="botao-prosseguir">
                                <Link to="/PagamentoCartao"><button>Prosseguir</button></Link>
                            </div>
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