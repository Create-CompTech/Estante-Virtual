import React, {useState} from 'react'
import './alterarInformacao.css'
import {Link, useHistory} from 'react-router-dom'
import gobook_logo from '../../../../../storage/images/logo/SizePinterest/gobook_logo.png';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ConsultarEbooks from '../../../../../services/ConsultarEbooks'
const api = new ConsultarEbooks();

export default function AlterarEbooks(props){
    
    const [id, setId] = useState(props.location.state.id);
    const [nome, setNome] = useState(props.location.state.nome);
    const [autor, setAutor] = useState(props.location.state.autor);
    const [ebook, setEbook] = useState(props.location.state.ebook);
    const [sinopse, setSinopse] = useState(props.location.state.sinopse);
    const [valor, setValor] = useState(props.location.state.valor);
    const [qtPaginas, setQtPaginas] = useState(props.location.state.qtPaginas);
    const [editora, setEditora] = useState(props.location.state.editora);
    const [edicao, setEdicao] = useState(props.location.state.edicao);
    const [isbn, setIsbn] = useState(props.location.state.isbn);
    const [lingua, setLingua] = useState(props.location.state.lingua);
    const [linguaOriginal, setLinguaOriginal] = useState(props.location.state.linguaOriginal);
    const [generoPrincipal, setGeneroPrincipal] = useState(props.location.state.generoPrincipal);
    const [outrosGeneros, setOutrosGeneros] = useState(props.location.state.outrosGeneros);

    const AlterarEbooks = async () => {
        try{
            await api.AlterarEbooks(id, {
                nome,
                autor,
                ebook,
                sinopse,
                valor,
                qtPaginas,
                editora,
                edicao,
                isbn,
                lingua,
                linguaOriginal,
                generoPrincipal,
                outrosGeneros
            });
            toast.dark("eBook Alterado com sucesso");
        }
        catch (e) {
            if (e.response.data.erro)
            toast.info(e.response.data.erro);
            else
            toast.error("Ocorreu um erro tente novamente")
        }
    };

    const atualizarInformação = (e) => {
        let novoValor = e.target.value;
        if (e.target.type === "number") novoValor = Number(novoValor);
        else if (e.target.type === "checkbox") novoValor = e.target.checked;

        switch (e.target.id){
            case "nome":
                setNome(novoValor);
                break;
            case "autor":
                setAutor(novoValor);
                break;
            case "ebook":
                setEbook(novoValor);
                break;
            case "sinopse":
                setSinopse(novoValor);
                break;
            case "valor":
                setValor(novoValor);
                break;
            case "qtPaginas":
                setQtPaginas(novoValor);
                break;
            case "editora":
                setEditora(novoValor);
                break;
            case "edicao":
                setEdicao(novoValor);
                break;
            case "isbn":
                setIsbn(novoValor);
                break;
            case "lingua":
                setLingua(novoValor);
                break;
            case "linguaOrignal":
                setLinguaOriginal(novoValor);
                break;
            case "generoPrincipal":
                setGeneroPrincipal(novoValor);
                break;
            case "outrosGeneros":
                setOutrosGeneros(novoValor);
                break;
        }
    };

    return(
        <div className="Inicial">
            <header className="Inicial-Header">
    
                <div class="Logo">
                <img src={gobook_logo} height="270px" width="275px"/>
                </div>

                <div className="nome-adm">
                    <h3>Seja bem-vindo Gustavo Furtado</h3>
                </div>

            </header>
      <body>
        <nav class="Cabeçalho">
            <ul class="OpcoesCabeçalho">
              <Link to="./InicialAdm"><li class="OpcoesCabeçalho2">Inicial</li></Link>
              <Link to="./AlterarEbook"><li class="OpcoesCabeçalho2">Alterar Ebook</li></Link>
            </ul>
          </nav>

          <div className="adicionar">
            <div className="adicionar-container">
                <div className="add-esquerdo">
                    <div className="container-esquerdo">
                        <div className="input-add">
                            <p>Ebook</p>
                            <input type="text"
                                value={nome}
                                onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="input-add">
                            <p>sinopse</p>
                            <input type="text"
                                value={sinopse}
                                onChange={e => setSinopse(e.target.value)} />
                        </div>
                        <div className="input-add">
                            <p>Imagem Ebook</p>
                            <input type="file"
                                value={ebook}
                                onChange={e => setEbook(e.target.value)} />
                        </div>
                        <div className="input-add">
                            <p>Preço</p>
                            <input type="text"
                                value={valor}
                                onChange={e => setValor(e.target.value)} />
                        </div>
                        <div className="input-add">
                            <p>Páginas</p>
                            <input type="text"
                                value={qtPaginas}
                                onChange={e => setQtPaginas(e.target.value)} />
                        </div>
                        <div className="input-add">
                            <p>Editora</p>
                            <input type="text"
                                value={editora}
                                onChange={e => setEditora(e.target.value)} />
                        </div>
                        <div className="input-add">
                            <p>Edição</p>
                            <input type="text"
                                value={edicao}
                                onChange={e => setEdicao(e.target.value)} />
                        </div>
                    </div>
                    </div>
                    <div className="add-direito">
                        <div className="container-direito">
                            <div className="input-add">
                                <p>isbn</p>
                                <input type="text"
                                    value={isbn}
                                    onChange={e => setIsbn(e.target.value)} />
                            </div>
                    <div className="input-add">
                        <p>Liguagem</p>
                        <input type="text"
                            value={lingua}
                            onChange={e => setLingua(e.target.value)} />
                    </div>
                    <div className="input-add">
                        <p>Liguagem Original</p>
                        <input type="text"
                            value={linguaOriginal}
                            onChange={e => setLinguaOriginal(e.target.value)} />
                    </div>
                    <div className="input-add">
                        <p>Gênero Principal</p>
                        <input type="text"
                            value={generoPrincipal}
                            onChange={e => setGeneroPrincipal(e.target.value)} />
                    </div>
                    <div className="input-add">
                        <p>Outros Gêneros</p>
                        <input type="text"
                            value={outrosGeneros}
                            onChange={e => setOutrosGeneros(e.target.value)} />
                    </div>
    
                        <div className="botao-adicionar">
                        <Link to="/GerenciarEbooks"><button>Cancelar</button></Link>
                        <button onClick={AlterarEbooks}>Fazer Alterações</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </body>
    </div>
    );
}