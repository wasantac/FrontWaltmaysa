import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import {Col,Row,Spinner,Modal, ModalHeader, ModalBody, ModalFooter,Button} from 'reactstrap';
import {FaMoneyBillWave,RiBankLine} from 'react-icons/all';
import CarritoDetalle from './CarritoDetalle';
import '../../css/Carrito.css'
const Carrito = () => {
    const [precio,setPrecio] = useState([]);
    const [items,setItems] = useState([]);
    const [tabla,setTabla] = useState([]);
    const [loaded,setLoaded] = useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    useEffect(() =>{
        fetch("/assets/json/productos.json")
        .then((response) => response.json())
        .then((str) => {
            let productos = str.productos;
            let idTodos = JSON.parse(localStorage.getItem("carrito"));
            for(let producto of productos){
                for(let id of idTodos.carrito){
                    if(producto.id === id.id){
                        
                        
                        items.push(                        
                        <CarritoDetalle key={producto.id} src={producto.imageurl} titulo={producto.nombre} cantidad={id.cantidad} precio={producto.precio} id={producto.id}></CarritoDetalle>
                        )
                        tabla.push(
                            <tr key={producto.id}>
                                <td className="w-100">{producto.nombre}</td>
                                <td className="w-100"><strong>${producto.precio}</strong></td>
                            </tr>
                        )
                        precio.push(producto.precio)
                        
                    }

                }
            }
            setLoaded(true);

        })
        .catch((error) => {
            console.log("Error: " + error)
        })
    },[])
    let onChange = () =>{

    }

    if(loaded){
        return (
            <div>
                <Header></Header>
                <Row>
                <Col sm="10">
                    {items}
                </Col>
                <Col sm="2" className="bg-white py-5">
                <h3>Resumen</h3>
                <table className="mx-4">
                    {tabla}
                </table>
                <p className="mt-3">Precio total: ${precio.reduce(function(a,b){return a + b},0)}</p>
                <h3>Método de Pago</h3>
                <div className="form-check form-check-radio ">
                    <label className="form-check-label ">
                        <div className="d-flex align-items-center">
                            <input className="form-check-input" type="radio" name="metodo" id="radio1" value="Efectivo" onChange={onChange}/>
                            <FaMoneyBillWave fontSize="24px"></FaMoneyBillWave>Efectivo
                            <span className="circle">
                                <span className="check"></span>
                            </span>
                        </div>
                    </label>
                </div>
                <div className="form-check form-check-radio">
                    <label className="form-check-label">
                        <div className="d-flex align-items-center">
                            <input className="form-check-input" type="radio" name="metodo" id="radio2" value="Transferencia" onChange={onChange}/>
                            <RiBankLine fontSize="24px"/>Transferencia
                            <span className="circle">
                                <span className="check"></span>
                            </span>
                        </div>
    
                    </label>
                </div>
                <button className="btn btn-primary" onClick={toggle}>Pagar</button>

                </Col>
                </Row>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Resumen de Pago</ModalHeader>
                    <ModalBody>
                    <table>
                    {tabla}
                    </table>
                    Precio total: <strong>${precio.reduce(function(a,b){return a + b},0)}</strong>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={toggle}>Pagar</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
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

export default Carrito;
