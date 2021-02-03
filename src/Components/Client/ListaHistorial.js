import React, { useEffect, useState } from 'react';
import  CompraItem from "./CompraItem";
import Header from './Header';
import Footer from './Footer';
import {Spinner,Col,Row,ContainerFluid} from 'reactstrap';
import BarraLateral from './BarraLateral';
const ListaHistorial = (/* aqui se mete id cuando ya se haga lo de los usuarios*/ ) => {
    const [loaded,setLoaded] = useState(false);
    const [items,setItems] = useState([]);
    useEffect(() => {
        fetch("/assets/json/compras.json")//aqui se concatena el id para hacer la busqueda en las bases
        .then((response) => response.json())
        .then((str) => {
            let compras = str.compras;
            

            for(let compra of compras){
                let productos=[]
                let total=0;

                
                let activo;
                for(let producto of compra.detalle){
                    let productonombre=producto.nombre+': $'+producto.precio+'X'+producto.cantidad
                    productos.push(productonombre)
                    total=producto.precio*producto.cantidad+total

                }
                if(compra.Activo){
                    activo="Realizado"
                }
                else{
                    activo="Cancelado"
                }

                
                    items.push(
                            <CompraItem key={compra.id_doc_contable} id_doc={compra.id_doc_contable} fecha={compra.fecha_emision} total={total} detalle={productos} is_active={activo} metodopago={compra.metodopago}
                                    altura="200px"/>
                    )
                
                


            }
            setLoaded(true);
        })
        .catch((error) => {
            console.log("Error: " + error)
        })
    },[]);
    //comenzar lo de html
    if(loaded){
        return (
            <div>
                <Header></Header>
                    <div className="container-fluid">
                    <Row>
                        
                        <Col sm="12">
                            {items}
    
                        </Col>  
                        </Row>


                    </div>

    
                <Footer></Footer>
            </div>
        );
    }
    else{
        return (
            <div>
                <Header></Header>
                    <Spinner color="primary" />  
                <Footer></Footer>
            </div>
        );
    }

//termina html



}

export default ListaHistorial;
