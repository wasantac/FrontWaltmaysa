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
        slidesToScroll: 3
    });
    useEffect(()=>{
        let handleResize = () =>{
            if(window.innerWidth <= 661){
                setSettings({
                    speed: 500,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            }
            else{
                setSettings({
                    speed: 500,
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                });
            }
        }
        window.addEventListener('resize',handleResize)
    },[]);
    useEffect(() => {
        fetch("/assets/json/productos.json")
        .then((response) => response.json())
        .then((str) => {
            let productos = str.productos;
            for(let producto of productos){
                if(producto.tipo === id){
                    items.push(
                        <div>
                            <h3 className="m-2">
                                <ProductoCard enlace="/" src={producto.imageurl} titulo={producto.nombre} precio={producto.precio}/>
                            </h3>
                        </div>
                )
                }
            }
            if(window.innerWidth <= 661){
                setSettings({
                    speed: 500,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            }
            else{
                setSettings({
                    speed: 500,
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                });
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
