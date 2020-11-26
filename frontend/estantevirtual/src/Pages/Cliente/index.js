import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import gobook_logo from '../../storage/images/logo/SizePinterest/gobook_logo.png';
import './index.css';

import Carousel from 'react-elastic-carousel';
import Item from "../../Item";
import ItemA from "../../ItemA";

//import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ConsultarEbooks from '../../services/ConsultarEbooks';
const api = new ConsultarEbooks();

export default function mostrarEbooks(){
  //const loadingBar = useRef(null);
  //const [ebooks, setEbooks] = useState([])

  //const Consultar = async () =>{
    //loadingBar.current.continuousStart();

    //const resp = await api.Consultar()
    //setEbooks([...resp])

    //loadingBar.current.complete();

    //document.getElementById("table_box").style.display = "block";
  //}
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const breakPoints1 = [
    { width: 1, itemsToShow: 1 },
  ];
  
  return (
    <div className="Inicial">
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
      <body>
        <section>
          <div>
              <nav class="Cabeçalho">
                <ul class="OpcoesCabeçalho">
                  <Link to="/./InicialCliente"><li class="OpcoesCabeçalho2">Livros e Autores</li></Link>
                  <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais recomendados</li></Link>
                  <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais vendidos</li></Link>
                </ul>
              </nav>
            </div>
        </section>
      </body>
      <body>
        <section>
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
                      <img src='/assets/HarryPotterPedraFilosofal' height="300px" width="200px"/>
                    </Item>
                    <Item>
                      <img src='/assets/SenhorDosAneisTolkienV1' height="300px" width="200px"/>
                    </Item>
                    <Item>
                      <img src='/assets/PiratasDoCaribeJackSparrowOGuardiaoDoTempo.png' height="300px" width="200px"/>
                    </Item>
                    <Item>
                      <img src='/assets/GravityFallsAventuraEmDobro.png' height="300px" width="200px"/>
                    </Item>
                    <Item>
                      <img src='/assets/Eragon.png' height="300px" width="200px"/>
                    </Item>
                  </Carousel>
                </div>
            </div>
            <div class="carousel-livros">
              <h1 class="titulo">Livros de Romance</h1>
                <div className="App">
                <Carousel breakPoints={breakPoints}>
                  <Item>
                    <img src='/assets/FilmeCulpaDasEstrelas.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/AGarotaQueVoceDeixouParaTras.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/ACincoPassosDeVoce.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/AnnaEOBeijoFrances' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/UmQuartoComVista' height="300px" width="200px"/>
                  </Item>
                </Carousel>
                </div>
            </div>
            <div class="carousel-livros">
              <h1 class="titulo">Livros de Fantasia</h1>
                <div className="App">
                <Carousel breakPoints={breakPoints}>
                  <Item>
                    <img src='/assets/AGuerraDosTronosAsCronicasDeGeloEFogo.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/AsBrumasDeAvalonMarionZimmer.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/OLeaoAFeiticeiraEoGurdaRoupaCronicasDeNarnia.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/OMaravilhosoMagicoDeOz1900.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/OFeiticeiroDeTerramarUrsulaKLEGuin.png' height="300px" width="200px"/>
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
                    <img src='/assets/ItACoisaStephenKing.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/OCemiterioStephenKing.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/AAssombracaoDaCasaDaColina.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/QuatroEstacoesStephenKing.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/GuerraMundialZ.png' height="300px" width="200px"/>
                  </Item>
                </Carousel>
                </div>
            </div>
            <div class="carousel-livros">
              <h1 class="titulo">Livros de Terror</h1>
                <div className="App">
                <Carousel breakPoints={breakPoints}>
                  <Item>
                    <img src='/assets/TheWalkingDeadV1.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/TerioEPraticaDeComoSerUmZumbiTiagoToy.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/AIlhaDosMortosRodrigoDeOliveira.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/StrangerThingsGarotosZumbis.png' height="300px" width="200px"/>
                  </Item>
                  <Item>
                    <img src='/assets/ApocalipseZumbi3AlexandreCallari.png' height="300px" width="200px"/>
                  </Item>
                </Carousel>
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
          </section> 
        </body>  
    </div>
  );
}
