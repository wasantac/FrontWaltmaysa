import React,{useState,useEffect} from 'react';
import Slider from "react-slick";
import ProductoCard from './ProductoCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../css/categoria.css';
import {Spinner} from 'reactstrap';


const Categoria = ({id}) => {
    const [isLoaded,setIsLoaded] = useState(false);
    const [items,setItems] = useState([]);
    const [settings,setSettings] = useState({
        speed: 500,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        responsive:[
            {
                breakpoint: 661,
                settings:{
                    speed: 500,
                    arrows:true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
   
    useEffect(() => {
        fetch("/assets/json/productos.json")
        .then((response) => response.json())
        .then((str) => {
            let productos = str.productos;
            for(let producto of productos){
                if(producto.tipo === id){
                    items.push(
                        <div key={producto.id}>
                            <h3 className="m-2">
                                <ProductoCard enlace={"/productos/descripcion/" + producto.id} src={producto.imageurl} titulo={producto.nombre} precio={producto.precio}
                                altura="400px"/>
                            </h3>
                        </div>
                )
                }
            }
        
            setIsLoaded(true);
        })
        .catch((error) => {
            console.log("Error: " + error)
        })
    },[]);
    if(isLoaded){
        return(            
        <div className="mt-5">
            <div>
                <h1 className="tituloCategoria">{id}</h1>
            </div>
            <div>
                <Slider {...settings}>
                    {items}
                </Slider>   

            </div>
        </div> );
    }
    else{
        return(        
        <div className="mt-5">
        <div>
            <h1 className="tituloCategoria">{id}</h1>
        </div>
        <div>
            <Spinner color="primary" />  
        </div>
    </div>);
    }

}

export default Categoria;
