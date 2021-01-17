import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Register = () => {
    return (
        <div className="bg-primary">
            <Header />
            <div className="container my-5">
                <div className="row mr-auto ml-auto">
                    <div className="col-lg-6 col-md-8 ml-auto mr-auto">
                        <div className="card card-nav-tabs text-center">
                            <div className="card-header card-header-danger">
                                 Registro
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col form-group">
                                            <input id="nombre" type="text" className="form-control" placeholder="Nombre"/>
                                        </div>
                                        <div className="col form-group">
                                            <input id="apellido" type="text" className="form-control" placeholder="Apellido"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="correo">Correo Electronico</label>
                                        <input type="email" className="form-control" id="correo" aria-describedby="emailHelp" placeholder="abcd@hotmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="contra">Contraseña</label>
                                        <input type="password" className="form-control" id="contra" placeholder="Contraseña"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="contraConfirmar">Confirmar Contraseña</label>
                                        <input type="password" className="form-control" id="contraConfirmar" placeholder="Confirmar Contraseña"/>
                                    </div>
                                </form>
                                <button type="submit" className="btn btn-primary bg-danger">Registrarse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
