import React from 'react';
import './cartao.css'
import {Link} from 'react-router-dom';

export default function Cartao(){
    return(
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
                <div className="pagamento-cartao">
                    <div className="info-pagamento1">
                        <h1>Informações do pagamento</h1>
                        <div className="cartao-form">
                             <select class="cartao" type="text" placeholder=" Pagamento">
                             <option value="1">Bandeiras Visa</option>
                             <option value="2">MasterCard</option>
                             <option value="3">Elo</option>
                             <option value="4">American Express</option>
                             </select>
                        </div>
                    </div>
                    <div className="cartao1">
                        <div className="container-forma">
                            <label>
                            <input type="text" placeholder=" Código"></input>
                            </label>
                        </div>
                        <div className="pagamento-ds">
                            <p>Forma pagamento</p>
                            <p>Preço R$ 25,90</p>
                        </div>
                    </div>
                    <div className="finalizar">
                        <button>finalizar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}