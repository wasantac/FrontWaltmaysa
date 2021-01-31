import React from 'react';

let Navegacion = () =>{
    return(
        <aside className="left-sidebar bg-sidebar">
        <div id="sidebar" className="sidebar sidebar-with-footer">
            <div className="app_brand">
                <a href="/">
                    <img href="/" src="/assets/images/logo.png" className="img-fluid waltmaysa"/>
                </a>
            </div>
            <div className="sidebar-scrollbar">
                    <ul className="nav sidebar-inner" id="sidebar-menu">
                    <li className="has-sub active expand">
                        <ul className="collapse show" id="dashboard" data-parent="#sidebar-menu">
                            <div className="sub-menu">
                                <li className="active" id="ecommerce">
                                    <a className="sidenav-item-link" href="commerce" >
                                        <span className="nav-text">E-commerce</span>
    
                                    </a>
                                </li>
                                <li className="active" id="analytics">
                                    <a className="sidenav-item-link" href="analytics" >
                                        <span className="nav-text">Estadísticas</span>
    
                                    </a>
                                </li>
                                <li className="active" id="components">
                                    <a className="sidenav-item-link" href="components">
                                        <span className="nav-text">Componentes</span>
    
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </li>
                </ul>   
            </div>
            <hr className="separator" />
        </div>
    </aside>
    )
}

export default Navegacion;