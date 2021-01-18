import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import {Container,Row,Col,Button,FormGroup,Input,Label} from 'reactstrap';
import '../../css/Descripcion.css'

const Descripcion = ({id}) => {
    const [loaded,setLoaded] = useState(false);
    const [item,setItem] = useState([]);
    const [cantidad,setCantidad] = useState(1);
    useEffect(()=>{
        fetch("/assets/json/productos.json")
        .then((response) => response.json())
        .then((str) => {
            let productos = str.productos;
            for(let producto of productos){
                if(producto.id == id){
                    setItem(producto);
                }
            }
            setLoaded(true);
    })},[])

    let handleCarrito = () =>{
        let carrito  = localStorage.getItem("carrito")
        if(carrito === ""){
            let carritoJSON = {carrito: []}
            carritoJSON.carrito.push(
                {id: item.id,cantidad: cantidad}
            )
            let str = JSON.stringify(carritoJSON)
            localStorage.setItem("carrito",str)
        }
        else{
            let carritoJSON = JSON.parse(carrito);
            let inCarrito = false;
            for(let producto of carritoJSON.carrito){
                console.log(producto)
                console.log(item)
                if(producto.id === item.id){
                    producto.cantidad = cantidad;
                    inCarrito = true;
                }
            }
            if(!inCarrito){
                console.log("nuevo")
                carritoJSON.carrito.push({id: item.id,cantidad: cantidad})
            }
            let str = JSON.stringify(carritoJSON)
            localStorage.setItem("carrito",str)
        }
    }
    let restar = () =>{
        if(cantidad > 1){
            setCantidad(cantidad - 1);
        }
        
    }
    let sumar = () =>{
        setCantidad(cantidad + 1);
    }
    if(loaded){
        return (
            <div>   
                <Header></Header>
                <Container>
                <Row className="my-5">
                    <Col sm="auto">
                        <img src={item.imageurl} alt={item.nombre} width="600rem" height="auto" className="img-fluid imagen"></img>
                    </Col>
                    <Col >
                        <h2 className="text-justify">{item.nombre}</h2>
                        <h3 className="text-justify">Precio: ${item.precio}</h3>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate sed magna et placerat. Curabitur ullamcorper porttitor aliquet. Etiam mattis pretium iaculis. Ut finibus lacus magna, in blandit est dictum vitae. Sed sapien ligula, fermentum at elit eu, sagittis pharetra eros. Phasellus condimentum eu eros sit amet scelerisque. Curabitur fringilla urna non elit molestie, ut tincidunt dui dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id scelerisque mauris, quis gravida lectus.
                        </p>
                        <FormGroup>
                            <Label for="idCantidad" className="text-dark bold">Cantidad</Label>
                            <div className="d-flex">
                                <button className="btn btn-primary text-white mx-5" onClick={restar}>-</button>
                                <Input
                                type="text"
                                name="cantidad"
                                id="idCantidad"
                                value={cantidad}
                                className="text-center"
                                readOnly
                                />
                                <button className="btn btn-primary text-white mx-5" onClick={sumar}>+</button>
                            </div>
                        </FormGroup>
                        <button className="btn btn-primary text-white" onClick={handleCarrito}>Agregar al Carrito</button>
                    </Col>
                </Row>
                </Container>


                <Footer></Footer>
            </div>
        );
    }else{
        return (
            <div>   
                <Header></Header>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default Descripcion;
