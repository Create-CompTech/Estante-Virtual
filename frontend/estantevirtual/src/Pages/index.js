import React from 'react';
import { Link } from 'react-router-dom';
import './inicial.css';
import gobook_logo from '../storage/images/logo/SizePinterest/gobook_logo.png'
import Item from "../Item";
import ItemA from "../ItemA";

import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const breakPoints1 = [
  { width: 1, itemsToShow: 1 },
];

function Inicial() {
  return (
    <div className="Inicial">
      <header className="Inicial-Header">
      
        <div class="Logo">
          <img src={gobook_logo} height="270px" width="275px"/>
        </div>

        <div class="Pesquisa1">
          <input type="search" placeholder=" Livro ou Autor" class="Texto"></input> 
            <i class="fas fa-search"></i>
        </div>

        <div class="BotoesCabeçalho">
          <Link class="BotoesCabeçalho1" to="/Cadastro">Cadastre-se</Link>
          <Link class="BotoesCabeçalho2" to="/Login">Faça Login</Link>
        </div>

      </header>
      <body>
        <nav class="Cabeçalho">
            <ul class="OpcoesCabeçalho">
              <Link to="/./InicialCliente"><li class="OpcoesCabeçalho2">Livros e Autores</li></Link>
              <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais recomendados</li></Link>
              <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais vendidos</li></Link>
            </ul>
          </nav>
        </body>
        <body>
        <div class="carousel-anuncios">
            <Carousel breakPoints={breakPoints1}>
              <ItemA>
                <img src='/assets/anuncio.png' height="450px" width="900px"/>
              </ItemA>
            </Carousel>
          </div> 

            <div class="carousel-livros">
              <h1 class="titulo">Livros de Aventura</h1>
                <div className="App">
                  <Carousel breakPoints={breakPoints}>
                    <Item>
                    <div class="ebook">
                      <div class="slide-img">
                        <img src='/assets/HarryPotterPedraFilosofal' height="300px" width="200px"/>
                        <div class="overlay">
                          <a href="/harryPotterPedraFilosofal" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                    </Item>
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
            </div>
            <div class="carousel-livros">
              <h1 class="titulo">Livros de Romance</h1>
                <div className="App">
                <Carousel breakPoints={breakPoints}>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/FilmeCulpaDasEstrelas.png' height="300px" width="200px"/>
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
            </div>
            <div class="carousel-livros">
              <h1 class="titulo">Livros de Fantasia</h1>
                <div className="App">
                <Carousel breakPoints={breakPoints}>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/AGuerraDosTronosAsCronicasDeGeloEFogo.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/AsBrumasDeAvalonMarionZimmer.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/OLeaoAFeiticeiraEoGurdaRoupaCronicasDeNarnia.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/OMaravilhosoMagicoDeOz1900.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/OFeiticeiroDeTerramarUrsulaKLEGuin.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                </Carousel>
                </div>
            </div>

            <div className="destaque">
            <div className="container-destaque">
              <div className="titulo-destaque">
                <h1>Destaques da semana</h1>
              </div>
              <div className="destaque-box">
                <div className="livros-destaque">
                <div className="destaque1"><img src='/assets/OQueAconteceuComAnnie.png' height="220px" width="200px" ></img></div> 
                <div className="destaque1"><img src='/assets/AGarotaDoLago.png' height="220px" width="200px" ></img></div> 
                <div className="destaque1"><img src='/assets/OHobbitJJRTolkien.png' height="220px" width="200px" ></img></div> 
                <div className="destaque1"><img src='/assets/AsCronicasDeNarnia2009.png' height="220px" width="200px" ></img></div> 
                <div className="destaque1"><img src='/assets/ZaynMalik.png' height="220px" width="200px" ></img></div> 
                </div>
              </div>
            </div>
          </div>

            <div class="carousel-livros">
              <h1 class="titulo">Livros de Terror</h1>
                <div className="App">
                <Carousel breakPoints={breakPoints}>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/ItACoisaStephenKing.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                    <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/OCemiterioStephenKing.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                    <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/AAssombracaoDaCasaDaColina.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/QuatroEstacoesStephenKing.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                    <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/GuerraMundialZ.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                </Carousel>
                </div>
            </div>
            <div class="carousel-livros">
              <h1 class="titulo">Livros de Zumbis</h1>
                <div className="App">
                <Carousel breakPoints={breakPoints}>
                  <Item>
                    <div class="ebook">
                      <div class="slide-img">
                      <img src='/assets/TheWalkingDeadV1.png' height="300px" width="200px"/>
                      <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                    <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/TerioEPraticaDeComoSerUmZumbiTiagoToy.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/AIlhaDosMortosRodrigoDeOliveira.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                  <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/StrangerThingsGarotosZumbis.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                  <Item>
                    <div class="ebook">
                      <div class="slide-img">
                    <img src='/assets/ApocalipseZumbi3AlexandreCallari.png' height="300px" width="200px"/>
                    <div class="overlay">
                          <a href="#" class="vermais-btn">Ver mais</a>	
                        </div>
                      </div>
                    </div>
                  </Item>
                </Carousel>
                </div>
            </div>
          
        </body>

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

export default Inicial;
