import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './Pages/index'
import Login from './Pages/Login'
import ConfirmacaoSenha from './Pages/Login/Senha'
import Cadastro from './Pages/admin/Cadastro'
import Cadastro1 from './Pages/admin/Cadastro/Cadastro1'
import Cadastro2 from './Pages/admin/Cadastro/Cadastro2'
import AlterarSenha from './Pages/Login/Alterar'


export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/Login" component={Login} />
                <Route path="/ConfirmacaoSenha" component={ConfirmacaoSenha} />
                <Route path="/Cadastro" component={Cadastro} />
                <Route path="/Cadastro1" component={Cadastro1} />
                <Route path="/Cadastro2" component={Cadastro2} />
                <Route path="/Alterar" component={AlterarSenha} />
            </Switch>
        </BrowserRouter>
    )
}