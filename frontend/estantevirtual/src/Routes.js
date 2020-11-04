import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './Pages/index'
import Login from './Pages/Login'
import ConfirmacaoSenha from './Pages/Login/Senha'
import AlterarSenha from './Pages/Login/Alterar'
import Cadastro from './Pages/Cliente/Cadastro'
import Cadastro1 from './Pages/Cliente/Cadastro/Cadastro1'
import Cadastro2 from './Pages/Cliente/Cadastro/Cadastro2'
import InicialCliente from './Pages/Cliente'
import Perfil from './Pages/Cliente/Menu/Perfil'
import Estantes from './Pages/Cliente/Menu/Estantes'
import Carrinho from './Pages/Cliente/Menu/Carrinho'
import ConfirmarEmail from './Pages/Login/ConfirmarEmail'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/Login" component={Login} />
                <Route path="/ConfirmacaoSenha" component={ConfirmacaoSenha} />
                <Route path="/ConfirmarEmail" component={ConfirmarEmail} />
                <Route path="/Alterar" component={AlterarSenha} />
                <Route path="/Cadastro" component={Cadastro} />
                <Route path="/Cadastro1" component={Cadastro1} />
                <Route path="/Cadastro2" component={Cadastro2} />
                <Route path="/InicialCliente" component={InicialCliente} />
                <Route path="/Perfil" component={Perfil} />
                <Route path="/Estantes" component={Estantes} />
                <Route path="/Carrinho" component={Carrinho} />
            </Switch>
        </BrowserRouter>
    )
}