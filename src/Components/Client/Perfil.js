import React from 'react';
import ClienteHead from './ClienteHead';
import PerfilCliente from './PerfilCliente';
import {Route} from 'react-router-dom';
import Historial from './Historial';
const Perfil = ({match}) => {
    return (
        <div>
            <ClienteHead></ClienteHead>
            <Route exact path={match.url} component={PerfilCliente}></Route>
            <Route path={match.url + "/historial"} component={Historial}></Route>
        </div>
    );
}

export default Perfil;
