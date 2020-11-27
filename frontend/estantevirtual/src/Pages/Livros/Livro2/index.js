import React from 'react'
import './livro2.css'
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

export default function Livro2(){
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
                        <li><Link href="/InicialCliente">Inicial</Link></li>
                        <li><Link href="/Perfil">Perfil</Link></li>
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
                            <img src='/assets/FilmeCulpaDasEstrelas.png' height="300px" width="200px"/>
                        </div>
                        <div className="info-container">
                            <div className="ebook-titulo">
                                <h1>A Culpa É das Estrelas</h1>
                            </div>
                            <div className="pagamento-container">
                                <div className="titulo-opcao">
                                    <p> -Escolhe a forma de pagamento</p>
                                </div>
                                <div className="opcao-pagamento">
                                    <Link to="" ><button>R$30</button></Link>
                                    <button id="ponto">50 Pontos</button>
                                </div>
                            </div>
                            <div className="ds-ebook">
                                <p>Hazel é uma paciente terminal. Ainda que, por um milagre da medicina,
                                   seu tumor tenha encolhido bastante — o que lhe dá a promessa de viver
                                   mais alguns anos —, o último capítulo de sua história foi escrito no 
                                   momento do diagnóstico. Mas em todo bom enredo há uma reviravolta, e 
                                   a de Hazel se chama Augustus Waters, um garoto bonito que certo dia 
                                   aparece no Grupo de Apoio a Crianças com Câncer. Juntos, os dois vão 
                                   preencher o pequeno infinito das páginas em branco de suas vidas.
                                   Inspirador, corajoso, irreverente e brutal, A culpa é das estrelas é 
                                   a obra mais ambiciosa e emocionante de John Green, sobre a alegria e a 
                                   tragédia que é viver e amar.</p>
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
                    <img src='/assets/AGuerraDosTronosAsCronicasDeGeloEFogo.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="/ACulpaEDasEstrelas" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/AGarotaQueVoceDeixouParaTras.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/ACincoPassosDeVoce.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/AnnaEOBeijoFrances' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/UmQuartoComVista' height="300px" width="200px"/>
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
                                <p>Intrínseca; 1ª edição</p>
                            </div>
                            <div className="detalhe">
                                <p>Página</p>
                                <p>288</p>
                            </div>
                            <div className="detalhe">
                                <p>Idioma:</p>
                                <p>Português</p>
                            </div>
                            <div className="detalhe">
                                <p>Autor:</p>
                                <p>Jonh Green</p>
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