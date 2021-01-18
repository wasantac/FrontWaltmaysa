import React, { useState } from 'react';
import {FaTrash} from 'react-icons/fa'
import {Row,Col} from 'reactstrap';
import '../../css/Detalle.css';
const CarritoDetalle = ({src,titulo,precio,cantidad,id}) => {
    const [eliminar,setEliminar] = useState(false);
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
    if(!eliminar){
        return (
            <div className="fila m-4">
                <div className="text-right px-4 trash" onClick={eliminarCarrito}><FaTrash></FaTrash></div>
                <Row className="align-items-center">
    
                    <Col sm="3">
                        <img src={src} alt={titulo} width="200px" height="200px" ></img>
                    </Col>
                    <Col sm="7">
                        <h4 className="text-dark font-weight-bold text-left">{titulo}</h4>
                        <p className="text-left">Cantidad: {cantidad}</p>
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
