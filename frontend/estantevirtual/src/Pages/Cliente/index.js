import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import gobook_logo from '../../storage/images/logo/SizePinterest/gobook_logo.png';
import './index.css';

import Carousel from 'react-elastic-carousel';
import Item from "../../Item";

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
  
  return (
    <div className="Inicial">
      <header className="Inicial-Header">

        <div class="Pesquisa">
          <input type="search" placeholder="Livro ou Autor" class="Texto"></input> 
            <i class="fas fa-search"></i>
        </div>
        
        <div class="Logo">
          <img src={gobook_logo} height="270px" width="275px"/>
        </div>

      </header>
      <body>

          <div>
              <nav class="Cabeçalho">
                <ul class="OpcoesCabeçalho">
                  <Link to="/./InicialCliente"><li class="OpcoesCabeçalho2">Livros e Autores</li></Link>
                  <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais recomendados</li></Link>
                  <Link to="./InicialCliente"><li class="OpcoesCabeçalho2">Livros mais vendidos</li></Link>
                </ul>
              </nav>
            </div>

      </body>
      <body>

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

        </body>
    </div>
  );
}
