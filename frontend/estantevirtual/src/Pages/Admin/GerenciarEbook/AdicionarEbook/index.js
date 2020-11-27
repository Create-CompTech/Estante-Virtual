import React, { useState } from 'react';
import './gerenciar.css';

import { Link } from 'react-router-dom';
import Rodape from '../../../../components/Rodape';
import gobook_logo from '../../../../storage/images/logo/SizePinterest/gobook_logo.png'
import ConsultarEbooks from '../../../../services/ConsultarEbooks';
const api = new ConsultarEbooks();

export default function GerenciarEbook(props){

    const [nome, setNome] = useState("");
    const [img, setImg] = useState();
    const [autor, setAutor] = useState();
    const [sinopse, setSinopse] = useState("");
    const [valor, setValor] = useState();
    const [qtPaginas, setQtPaginas] = useState();
    const [editora, setEditora] = useState("");
    const [edicao, setEdicao] = useState("");
    const [lingua, setLingua] = useState("");
    const [linguaOriginal, setLinguaOriginal] = useState("");
    const [generoPrincipal, setGeneroPrincipal] = useState();
    const [outrosGeneros, setOutrosGeneros] = useState();

    const [autores, setAutores] = useState([]);
    const [generos, setGeneros] = useState([]);

    
    const ConsultarAutores = async (e) => {
      const resp = api.ConsultarAutores();
      setAutores(...resp);
    }

    const ConsultarGeneros = async (e) => {
      const resp = api.ConsultarGeneros();
      setGeneros(...resp);
    }

    const resp = {
      nome: nome,
      img: img,
      sinopse: sinopse,
      autor: autor,
      valor: valor,
      qtPaginas: qtPaginas,
      editora: editora,
      edicao: edicao,
      lingua: lingua,
      linguaOriginal: linguaOriginal,
      generoPrincipal: generoPrincipal,
      outrosGeneros: outrosGeneros
    };



    return(
        <div className="gerenciarebook">
        <div className="Inicial">
      <header className="Inicial-Header">
      
        <div class="Logo">
          <img src={gobook_logo} height="270px" width="275px"/>
        </div>

        <div className="nome-adm">
          <h3>Sinta-se em casa, {props.location.state}!</h3>
        </div>

      </header>
      <body>
        <nav class="Cabeçalho">
            <ul class="OpcoesCabeçalho">
            <Link to="./InicialAdm"><li class="OpcoesCabeçalho2">Voltar</li></Link>
              <Link to="./AlterarEbook"><li class="OpcoesCabeçalho2">Ebooks</li></Link>
            </ul>
          </nav>
        </body>
        </div>
        <div className="adicionar">
          <div className="adicionar-container">
            <div className="add-esquerdo">
              <div className="container-esquerdo">
                <div className="input-add">
                <p>Ebook</p>
                  <label> 
                    <input value="nome" type="text" onChange={e => setNome(e.target.value)}></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Descrição</p>
                  <label> 
                    <input type="text" onChange={e => setSinopse(e.target.value)}></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Foto ebook</p>
                  <label> 
                    <input id="file" type="file" onChange={e => setImg(e.target.value)}></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Preços</p>
                  <label> 
                    <input type="text" onChange={e => setValor(e.target.value)}></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Paginas</p>
                  <label> 
                    <input type="text" onChange={e => setQtPaginas(e.target.value)}></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Editora</p>
                  <label> 
                    <input type="text" onChange={e => setEditora(e.target.value)}></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Edição</p>
                  <label> 
                    <input type="text" onChange={e => setEdicao(e.target.value)}></input>
                  </label>
                </div>
              </div>
            </div>
            <div className="add-direito">
              <div className="container-direito">

                <div>
                  <select>
                    {autores.map(x => 
                      <option value={x.id} onSelect={e => setGeneroPrincipal(e.target.value)}>{x.autor}</option>
                    )};
                  </select>
                </div>
                
              <div className="input-add">
                <p>Generos</p>
                  <label> 
                    <input type="text"></input>
                  </label>
               </div>
               <div className="input-add">
                <p>Genero principal</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>N° de Série</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Idioma</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Idioma Original</p>
                  <label> 
                    <input type="text"></input>
                  </label>
                </div>
                <div className="input-add">
                <p>Edição</p>
                  <label> 
                    <input type="date"></input>
                  </label>
                </div>
                <div className="botao-adicionar">
                  <button>Cancelar</button>
                  <button>adicionar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Rodape />
    </div>
    );
}