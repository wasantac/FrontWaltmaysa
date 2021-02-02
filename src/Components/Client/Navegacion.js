import React from 'react';
import '../../css/Navegacion.css'
import {BiSearchAlt} from 'react-icons/bi'
import {useHistory} from 'react-router-dom';



let Navegacion = () =>{
    const history = useHistory();
    return(
        <nav className="navbar navbar-expand-lg sticky-top mb-0">
        <div className="container">
            <div className="navbar-translate ">
                <div className="input-group py-auto m-0">
                <input id="inputProducto"type="text" className="inputWaltmaysa" placeholder="Buscar un Producto..." name="producto"></input>
                <div className="input-group-prepend" onClick={() =>{
                                    let buscar = document.getElementById("inputProducto").value
                                    history.push("/productos/busqueda/" + buscar)
                        }}>
                    <span className="input-group-text p-0">
                        <button className="btn btn-primary"><i className="material-icons text-center text-white"><BiSearchAlt></BiSearchAlt></i></button>
                        
                    </span>
                </div>
                    
                </div>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item oculto">
                        <a href="/auth/login" className="text-dark py-auto nav-link">
                            <img src="/assets/svg/account_circle-24px.svg" width="35px" height="35px" alt="account"></img>
                            Iniciar Sesión
                        </a>
                    </li>
                    <li className="nav-item oculto">
                        <a href="/carrito" className="text-dark py-auto nav-link">
                            <img src="/assets/svg/cart.svg" width="35px" height="35px" alt="cart"></img>Carrito</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown"  aria-expanded="false" >Productos</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/productos/todos">Todos</a>
                            <a className="dropdown-item" href="/productos/Electrodomésticos">Electrodomésticos</a>
                            <a className="dropdown-item" href="/productos/Tecnología">Tecnología</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="/contactos" className="nav-link">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a href="/nosotros" className="nav-link">Nosotros</a>
                    </li>
                </ul>

                <form className="form-inline ml-auto">
                    <div className="col-xs-auto pr-4 my-auto">
                        <a href="/carrito" className="text-dark py-auto">
                            <img src="/assets/svg/cart.svg" width="35px" height="35px" alt="cart"></img>
                            Carrito
                        </a>
                    </div>
                    <div className="col-xs-auto pr-1 my-auto">
                        <a href="/auth/login" className="text-dark py-auto">
                        <img src="/assets/svg/account_circle-24px.svg" width="35px" height="35px" alt="account"></img>
                            Iniciar Sesión
                        </a>
                    </div>

                </form>
            </div>
        </div>
    </nav>
    )
}

export default Navegacion;