import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Contacto = () => {
    return (
        <div>
            <Header />
            <div id="tarjetaformulario" className="card card-nav-tabs">
                <div id="formulariodiv" className="card-body">
                    <h1>Contáctenos</h1>
                    <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputEmail4">Nombre</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Nombre"></input>
                        </div>
                        <div className="form-group col-md-6">
                        <label for="inputPassword4">Apellido</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Apellido"></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputCity">Email</label>
                        <input type="text" className="form-control" id="inputCity"></input>
                        </div>

                        <div className="form-group col-md-6">
                        <label className="label-control">Fecha de Nacimiento</label>
                        <input type="date" className="form-control" />
                    </div>
                    </div>

                    <div className="form-group">
                        <label for="inputAddress">Mensaje</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contacto;
