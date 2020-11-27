import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './Pages/index'
import Login from './Pages/Login'
import ConfirmacaoCodigo from './Pages/Login/Senha'
import AlterarSenha from './Pages/Login/Alterar'
import Cadastro from './Pages/Cliente/Cadastro'
import Cadastro1 from './Pages/Cliente/Cadastro/Cadastro1'
import Cadastro2 from './Pages/Cliente/Cadastro/Cadastro2'
import InicialCliente from './Pages/Cliente'
import Perfil from './Pages/Cliente/Menu/Perfil'
import Estantes from './Pages/Cliente/Menu/Estantes'
import Carrinho from './Pages/Cliente/Menu/Carrinho'
import ConfirmarEmail from './Pages/Login/ConfirmarEmail'
import Compra from './Pages/Cliente/Compra'
import Cartao from './Pages/Cliente/Compra/Cartao'
import InicialAdm from './Pages/Admin'
import CadastrarEbook from './Pages/Admin/GerenciarEbook/AdicionarEbook'
import AlterarEbook from './Pages/Admin/GerenciarEbook/AlterarEbook'
import AlterarInformacao from './Pages/Admin/GerenciarEbook/AlterarEbook/AlterarInformaçao'
import CadastrarAdm from './Pages/Admin/AdicionarAdm'
import Livro1 from './Pages/Livros/Livro1'
import Livro2 from './Pages/Livros/Livro2'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/Login" component={Login} />
                <Route path="/ConfirmacaoCodigo" component={ConfirmacaoCodigo} />
                <Route path="/ConfirmarEmail" component={ConfirmarEmail} />
                <Route path="/Alterar" component={AlterarSenha} />
                <Route path="/Cadastro" component={Cadastro} />
                <Route path="/Cadastro1" component={Cadastro1} />
                <Route path="/Cadastro2" component={Cadastro2} />
                <Route path="/InicialCliente" component={InicialCliente} />
                <Route path="/Perfil" component={Perfil} />
                <Route path="/Estantes" component={Estantes} />
                <Route path="/Carrinho" component={Carrinho} />
                <Route path="/Comprar" component={Compra} />
                <Route path="/PagamentoCartao" component={Cartao} />
                <Route path="/InicialAdm" component={InicialAdm} />
                <Route path="/CadastrarEbook" component={CadastrarEbook} />
                <Route path="/AlterarEbook" component={AlterarEbook} />
                <Route path="/AlterarInformacao" component={AlterarInformacao} />
                <Route path="/CadastroAdm" component={CadastrarAdm} />
                <Route path="/HarryPotterPedraFilosofal" component={Livro1} />
                <Route path="/ACulpaEDasEstrelas" component={Livro2} />
            </Switch>
        </BrowserRouter>
    )
}