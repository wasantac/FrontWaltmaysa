import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/Login.css'
const Login = () => {
    return (
        <div className="bg-primary">
            <Header />
            <div className="container my-5">
            <div className="row ml-auto mr-auto">
                <div className="col-lg-6 col-md-8 ml-auto mr-auto">
                    <div className="card card-nav-tabs text-center">
                        <div className="card-header card-header-danger">
                            Login
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="correo">Correo Electronico</label>
                                    <input type="email" className="form-control" id="correo" aria-describedby="emailHelp" placeholder="abcd@mail.com"/>
                                    <small id="emailHelp" className="form-text text-muted">No compratiremos tu correo con nadie.</small>
                                </div>
                                <div className="form-group">
                                    <label for="contra">Contraseña</label>
                                    <input type="password" className="form-control" id="contra" placeholder="Contraseña"/>
                                </div>
                                <div className="form-group">
                                    <a href=""><small id="emailHelp" className="form-text text-danger color"><u>Olvide mi contraseña</u></small></a>
                                    <a href="/auth/register"><small id="emailHelp" className="form-text text-dark color">No tiene cuenta? Haga click
                        aqui.</small></a>
                                </div>
                            </form>
                            <button type="submit" className="btn btn-primary bg-danger">Iniciar Sesion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>

    );
}

export default Login;
