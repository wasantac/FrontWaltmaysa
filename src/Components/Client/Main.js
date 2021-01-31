import React, { Component } from 'react';
import Header from './Header';
import Categoria from './Categoria';
import Footer from './Footer';
import ClienteHead from './ClienteHead';
import '../../css/Main.css'
import Loader from './Loader';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
        };
      }
      componentDidMount() {
        fetch("/assets/json/noticias.json")
        .then((response) => response.json())
        .then((str) => {
            let noticias = str.noticias;
            for (let i = 0; i < noticias.length; i++) {
                let carrusel = document.getElementById('publicidad');
                let dentrocarrusel = carrusel.getElementsByClassName('carousel-inner')[0];
                let itemcarrusel = dentrocarrusel.getElementsByClassName("carousel-item")[i];
                let imagen = itemcarrusel.getElementsByTagName('img')[0];
                imagen.src = noticias[i].urlfoto;
            }
            this.setState({
                isLoaded: true,
            });

        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        })

      }

    render() {

        return (
            <div>
                <ClienteHead></ClienteHead>
                <Header />
                <div className="px-auto">
                    <div id="publicidad" className="carousel slide mx-auto" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#publicidad" data-slide-to="0" className="active"></li>
                            <li data-target="#publicidad" data-slide-to="1"></li>
                            <li data-target="#publicidad" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" alt="Third slide"/>
                                
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#publicidad" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#publicidad" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <Categoria id="Electrodomésticos"></Categoria>
                <Categoria id="Tecnología"></Categoria>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;
