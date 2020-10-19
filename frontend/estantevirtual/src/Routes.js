import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './Pages/Inicial'
import Login from './Pages/Login'
import Senha from './Pages/Login/Senha'
import Cadastro from './Pages/Cadastro'
import Cadastro1 from './Pages/Cadastro/Cadastro1'
import Cadastro2 from './Pages/Cadastro/Cadastro2'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/Login" component={Login} />
                <Route path="/EsqueciaSenha" component={Senha} />
                <Route path="/Cadastro" component={Cadastro} />
                <Route path="/Cadastro1" component={Cadastro1} />
                <Route path="/Cadastro2" component={Cadastro2} />
            </Switch>
        </BrowserRouter>
    )
}