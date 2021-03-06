import React, { useEffect, useState } from 'react';
import  ProductoItem from "./ProductoItem";
import Header from './Header';
import Footer from './Footer';
import {Spinner,Col,Row} from 'reactstrap';
import BarraLateral from './BarraLateral';
const ListaProductos = ({categoria}) => {
    const [loaded,setLoaded] = useState(false);
    const [items,setItems] = useState([]);
    useEffect(() => {
        fetch("/assets/json/productos.json")
        .then((response) => response.json())
        .then((str) => {
            let productos = str.productos;

            for(let producto of productos){
                if(categoria !== ""){
                    if(categoria === producto.tipo){
                        items.push(
                                <ProductoItem key={producto.id} enlace={"/productos/descripcion/" + producto.id} src={producto.imageurl} titulo={producto.nombre} precio={producto.precio}
                                        altura="200px"/>
                        )
                    }
   
                }
                else{
                    items.push(
                            <ProductoItem key={producto.id} enlace={"/productos/descripcion/" + producto.id} src={producto.imageurl} titulo={producto.nombre} precio={producto.precio}
                                    altura="200px"/>
                    )
                }
                


            }
            setLoaded(true);
        })
        .catch((error) => {
            console.log("Error: " + error)
        })
    });
    if(loaded){
        return (
            <div>
                <Header></Header>
                    <Row>
                    <BarraLateral></BarraLateral>
                    <Col sm="10">
                        {items}

                    </Col>  
                    </Row>
    
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
}

export default ListaProductos;
