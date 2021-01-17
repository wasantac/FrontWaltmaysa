import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import {Container,Row,Col,Button} from 'reactstrap';
import '../../css/Descripcion.css'
const Descripcion = ({id}) => {
    const [loaded,setLoaded] = useState(false);
    const [item,setItem] = useState([]);
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
            console.log(item)
    })},[])
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
                        <button className="btn btn-primary text-white">Agregar al Carrito</button>
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
