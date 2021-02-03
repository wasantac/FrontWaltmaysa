import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Row,Container,Col} from 'reactstrap';
import { useHistory } from "react-router-dom";

const PerfilEditar = () => {
    const history = useHistory();
    let guardarDatos = () => {
        history.push('/perfil')
    }
    return (
        <div>
            <Header></Header>
            <div className="container-fluid bg-primary">
                <Row className="p-5">
                    <Col sm="12">
                        <Container className="bg-white contenedorP p-5">
                        <h1>Cambiar Datos</h1>
                        <form>
                            <div className="form-group">
                                <label for="correo" >Correo</label>
                                <input type="email" className="form-control" id="correo" value="walter@hotmail.com"/>
                            </div>
                            <div className="form-group">
                                <label for="user">Usuario</label>
                                <input type="text" className="form-control" id="usuario" value="user"/>
                            </div>
                            <div className="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" className="form-control" id="password" value="password"/>
                            </div>
                            <div className="form-group">
                                <label for="password1">Confirmar Contraseña</label>
                                <input type="password" className="form-control" id="password1" value="password"/>
                            </div>
                            <button type="submit" className="btn btn-danger" onClick={guardarDatos}>Guardar Datos</button>
                        </form>
                        </Container>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default PerfilEditar;
