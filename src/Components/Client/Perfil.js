import React from 'react';
import ClienteHead from './ClienteHead';
import PerfilCliente from './PerfilCliente';
import {Route} from 'react-router-dom';
import Historial from './Historial';
import PerfilEditar from './PerfilEditar';
const Perfil = ({match}) => {
    return (
        <div>
            <ClienteHead></ClienteHead>
            <Route exact path={match.url} component={PerfilCliente}></Route>
            <Route exact path={match.url + "/editar"} component={PerfilEditar}></Route>
            <Route path={match.url + "/historial"} component={Historial}></Route>
        </div>
    );
}

export default Perfil;
