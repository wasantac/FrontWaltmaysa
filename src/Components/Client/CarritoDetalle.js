import React, { useEffect, useState } from 'react';
import {FaTrash} from 'react-icons/fa'
import {Row,Col,Input} from 'reactstrap';
import '../../css/Detalle.css';
const CarritoDetalle = ({src,titulo,precio,cant,id}) => {
    const [eliminar,setEliminar] = useState(false);
    const [cantidad,setCantidad] = useState(0);
    useEffect(()=>{
        let idTodos = JSON.parse(localStorage.getItem("carrito"));
        for(let producto of idTodos.carrito){
            if(producto.id === id){
                setCantidad(producto.cantidad)
            }
        }
    },[])
    let eliminarCarrito = () =>{
        let carritoJSON = JSON.parse(localStorage.getItem("carrito")).carrito
        let nuevoCarrito = {carrito:[]}
        for(let item of carritoJSON){
            if(item.id === id){
                setEliminar(true);
            }else{
                nuevoCarrito.carrito.push(item);
            }
        }
        localStorage.setItem("carrito",JSON.stringify(nuevoCarrito));
    }
    let restar = () =>{
        if(cantidad > 1){
            setCantidad(cantidad - 1);        
        }
        let idTodos = JSON.parse(localStorage.getItem("carrito"));
        for(let producto of idTodos.carrito){
            if(producto.id === id){
                producto.cantidad = cantidad
            }
        }

        localStorage.setItem("carrito",JSON.stringify(idTodos))
        
    }
    let sumar = () =>{
        setCantidad(cantidad + 1);
        let idTodos = JSON.parse(localStorage.getItem("carrito"));
        for(let producto of idTodos.carrito){
            if(producto.id === id){
                producto.cantidad = cantidad
            }
        }
        localStorage.setItem("carrito",JSON.stringify(idTodos))
    }
    if(!eliminar){
        return (
            <div className="fila m-4">
                <div className="text-right px-4 trash" onClick={eliminarCarrito}><FaTrash></FaTrash></div>
                <Row className="align-items-center">
                    <Col sm="3">
                        <img src={src} alt={titulo} width="200px" height="200px" ></img>
                    </Col>
                    <Col sm="7" className="tituloCantidad">
                        <h4 className="text-dark font-weight-bold text-left">{titulo}</h4>
                        <div className="d-flex align-items-center">
                                <button className="btn btn-sm btn-primary text-white mx-1" onClick={restar}>-</button>
                                <Input
                                type="text"
                                name="cantidad"
                                id="idCantidad"
                                value={cantidad}
                                className="text-center carritoProducto"
                                readOnly
                                />
                                <button className="btn btn-sm btn-primary text-white mx-1" onClick={sumar}>+</button>
                                
                        </div>
                    </Col>
                    <Col sm="2">
                        
                        <h2 className="text-dark">${precio}</h2>
                    </Col>
                </Row>
                
            </div>
        );
    }
    else{
        return(
           <span></span>
        );
    }
}

export default CarritoDetalle;
