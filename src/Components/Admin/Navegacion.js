import React from 'react';
import '../../css/Navegacion.css'
import {BiSearchAlt} from 'react-icons/bi'
import {useHistory} from 'react-router-dom';



let Navegacion = () =>{
    const history = useHistory();
    return(
        <aside class="left-sidebar bg-sidebar">
            <div id="sidebar" class="sidebar sidebar-with-footer">
            <!-- Aplication Brand -->
            <div class="app_brand">
                <a href="/">
                    <img href="/" src="/assets/images/logo.png" class="img-fluid waltmaysa"></img>
                </a>
            </div>
            <!-- begin sidebar scrollbar -->
        <div class="sidebar-scrollbar">

            <!-- sidebar menu -->
            <ul class="nav sidebar-inner" id="sidebar-menu">



                <li class="has-sub active expand">
                    <ul class="collapse show" id="dashboard" data-parent="#sidebar-menu">
                        <div class="sub-menu">
                            <li class="active" id="ecommerce">
                                <a class="sidenav-item-link" href="commerce" >
                                    <span class="nav-text">E-commerce</span>

                                </a>
                            </li>
                            <li class="active" id="analytics">
                                <a class="sidenav-item-link" href="analytics" >
                                    <span class="nav-text">Estadísticas</span>

                                </a>
                            </li>
                            <li class="active" id="components">
                                <a class="sidenav-item-link" href="components">
                                    <span class="nav-text">Componentes</span>

                                </a>
                            </li>
                        </div>
                    </ul>
                </li>
            </ul>

        </div>

        <hr class="separator" />

    </div>
</aside>
    )
}

export default Navegacion;