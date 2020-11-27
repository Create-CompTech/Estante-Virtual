import React from 'react'
import './livro1.css'
import './script.js'
import { Link } from 'react-router-dom';
import gobook_logo from '../../../storage/images/logo/SizePinterest/gobook_logo.png'

import Carousel from 'react-elastic-carousel';
import Item from "../../../Item";
import ItemA from "../../../ItemA";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const breakPoints1 = [
    { width: 1, itemsToShow: 1 },
  ];

export default function Livro1(){
    return(
        <div className="HarryPotter">
            <header className="Inicial-Header">
                <input type="checkbox" id="check"></input>
                    <label for="check">
                        <i class="fas fa-bars" id="btn"></i>
                        <i class="fas fa-bars" id="cancel"></i>
                    </label>
                <div class="sidebar">
                <header>
                    <div class="Logo">
                        <img src={gobook_logo} height="270px" width="275px"/>
                    </div>
                </header>
                    <ul>
                        <li><Link to="/InicialCliente">Inicial</Link></li>
                        <li><Link to="/Perfil">Perfil</Link></li>
                        <li><Link to="/Estantes">Estantes</Link></li>
                        <li><Link to="/Carrinho">Carrinho</Link></li>
                    </ul>
                </div>

                <div class="Pesquisa">
                    <input type="search" placeholder="Livro ou Autor" class="Texto"></input> 
                    <i class="fas fa-search"></i>
                </div>
  
                <div class="Logo">
                    <img src={gobook_logo} height="270px" width="275px"/>
                </div>

            </header>
            <div className="Livro1">
                <div className="Livro1-container">
                    <div className="livro-info-container">
                        <div className="livro">
                            <img src='/assets/HarryPotterPedraFilosofal' height="300px" width="200px"/>
                        </div>
                        <div className="info-container">
                            <div className="ebook-titulo">
                                <h1>Harry Potter e a pedra filosofal </h1>
                            </div>
                            <div className="pagamento-container">
                                <div className="titulo-opcao">
                                    <p> -Escolhe a forma de pagamento</p>
                                </div>
                                <div className="opcao-pagamento">
                                    <Link to="/Comprar" ><button>R$30</button></Link>
                                    <button id="ponto">50 Pontos</button>
                                </div>
                            </div>
                            <div className="ds-ebook">
                                <p>Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados
                                     por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi
                                     levado, então, para a casa dos tios que nada tinham a ver com o 
                                     sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de
                                     gata borralheira: maltratado pelos tios, herdava roupas velhas do primo
                                     gorducho, tinha óculos remendados e era tratado como um estorvo. No dia
                                     de seu aniversário de 11 anos, entretanto, ele parece deslizar por um 
                                     buraco sem fundo, como o de Alice no país das maravilhas, que o conduz 
                                     a um mundo mágico. Descobre sua verdadeira história e seu destino: ser
                                     um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior 
                                     força do mal, o homem que assassinou seus pais. O menino de olhos verde,
                                     magricela e desengonçado, tão habituado à rejeição, descobre, também,
                                     que é um herói no universo dos magos. Potter fica sabendo que é a única
                                     pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa
                                     da marca em forma de raio que ele carrega na testa. Ele não é um garoto
                                     qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo
                                     de poder, resistência e um líder natural entre os sobrenaturais. A fábula,
                                    recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="livros-recomendado">
                        <div className="titulo-relacionado">
                            <h1>Clientes que compraram este item também compraram</h1>
                        </div>
                    <Carousel breakPoints={breakPoints}>
                    <Item>
                    <div class="ebook">
                      <div class="slide-img">
                      <img src='/assets/SenhorDosAneisTolkienV1' height="300px" width="200px"/>
                      <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                    </Item>
                    <Item>
                      <div class="ebook">
                        <div class="slide-img">
                      <img src='/assets/PiratasDoCaribeJackSparrowOGuardiaoDoTempo.png' height="300px" width="200px"/>
                      <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                    </Item>
                    <Item>
                    <div class="ebook">
                      <div class="slide-img">
                      <img src='/assets/GravityFallsAventuraEmDobro.png' height="300px" width="200px"/>
                      <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                    </Item>
                    <Item>
                    <div class="ebook">
                      <div class="slide-img">
                      <img src='/assets/Eragon.png' height="300px" width="200px"/>
                      <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                    </Item>
                  </Carousel>
                    </div>
                    <div className="detalhes-ebook">
                        <div className="titulo-detalhe">
                            <h1>Detalhes do produto</h1>
                        </div>
                        <div className="container-detalhe">
                            <div className="detalhe">
                                <p>Editora:</p>
                                <p>Rocco; 1ª edição</p>
                            </div>
                            <div className="detalhe">
                                <p>Página</p>
                                <p>208</p>
                            </div>
                            <div className="detalhe">
                                <p>Idioma:</p>
                                <p>Português</p>
                            </div>
                            <div className="detalhe">
                                <p>Autor:</p>
                                <p>J.K. Rowling</p>
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
    )
}