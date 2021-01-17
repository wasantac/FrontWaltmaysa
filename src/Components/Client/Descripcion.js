import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import {Container,Button} from 'reactstrap';
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
                <Container className="my-5">
                    <img src={item.imageurl} alt={item.nombre} width="auto" height="400px"></img>
                    <h2 className="text-justify">{item.nombre}</h2>
                    <h3 className="text-justify">Precio: ${item.precio}</h3>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate sed magna et placerat. Curabitur ullamcorper porttitor aliquet. Etiam mattis pretium iaculis. Ut finibus lacus magna, in blandit est dictum vitae. Sed sapien ligula, fermentum at elit eu, sagittis pharetra eros. Phasellus condimentum eu eros sit amet scelerisque. Curabitur fringilla urna non elit molestie, ut tincidunt dui dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id scelerisque mauris, quis gravida lectus.
                    </p>
                    <Button className="bg-primary text-white">Agregar al Carrito</Button>
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
