import React from 'react';
import  AdminHead  from "./AdminHead";


const Header = () => {
    return (
            
            <div>
                <AdminHead></AdminHead>
                <header className="main-header " id="header">
                <nav className="navbar">
                <button id="sidebar-toggler" className="sidebar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                </button> 
                <div className="navbar-right ">
                    <ul className="nav navbar-nav">
                        
                        <li className="dropdown user-menu">
                            <button href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <img src="user.png" className="user-image" />
                                <span className="d-none d-lg-inline-block">Walter Santacruz</span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="dropdown-header">
                                    <img src="~sleek-dashboard/dist/assets/img/user/user.png" className="img-circle" />
                                    <div className="d-inline-block">
                                        Walter Santacruz <small className="pt-1">waltermaysa@gmail.com</small>
                                    </div>
                                </li>
        
                                <li>
                                    <a href="profile">
                                        <i className="mdi mdi-account"></i> Perfil
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="mdi mdi-account"></i> Tienda
                                    </a>
                                </li>
                                <li className="dropdown-footer">
                                    <a href="../auth/login"> <i className="mdi mdi-logout"></i> Salir </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </nav>   
            </header>
            </div>

        )
    }


export default Header;
