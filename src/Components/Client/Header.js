import React, { Component } from 'react';
import '../../css/Header.css'
import Navegacion from './Navegacion'


class Header extends Component {


    render() {
        return (
            <div>
                <nav className="nav fondo p-2 justify-content-center ">
                    <a href="/"><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="waltmaysa" className="waltmaysa "/></a>
                </nav>
                <Navegacion />
            </div>

        );
    }
}

export default Header;
