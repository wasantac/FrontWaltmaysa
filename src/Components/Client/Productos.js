import React from 'react';
import ListaProductos from './ListaProductos';
import ListaBusqueda from './ListaBusqueda';
import ClienteHead from './ClienteHead';
import {Route, useParams} from 'react-router-dom';
import Descripcion from './Descripcion';
const Busqueda = () =>{
    let {titulo} = useParams();
    return(<div>
        <ListaBusqueda titulo={titulo}></ListaBusqueda>
    </div>);
}
const ParamDesc = () =>{
    let {id} = useParams();
    return(<div>
        <Descripcion id={id}></Descripcion>
    </div>);
}
const Productos = ({match}) => {
    return (
        <div>
            <ClienteHead></ClienteHead>
            <Route path={match.url + "/todos"}>
                <ListaProductos categoria=""></ListaProductos>
            </Route>
            <Route path={match.url + "/Tecnología"}>
                <ListaProductos categoria="Tecnología"></ListaProductos>
            </Route>
            <Route path={match.url + "/Electrodomésticos"}>
            <ListaProductos categoria="Electrodomésticos"></ListaProductos>
            </Route>
            <Route path={match.url + "/busqueda/:titulo"}>
                <Busqueda></Busqueda>
            </Route>
            <Route path={match.url + "/descripcion/:id"}>
                <ParamDesc></ParamDesc>
            </Route>

        </div>
    );
}

export default Productos;
