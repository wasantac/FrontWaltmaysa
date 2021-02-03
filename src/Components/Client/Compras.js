import React from 'react';

import ClienteHead from './ClienteHead';
import {Route, useParams} from 'react-router-dom';
import ListaHistorial from './ListaHistorial';
const Compras = ({match}) => {
    return (
        <div>
            <ClienteHead></ClienteHead>
            <Route path={match.url}>
                <ListaHistorial ></ListaHistorial>
            </Route>



        </div>
    );
}

export default Compras;
