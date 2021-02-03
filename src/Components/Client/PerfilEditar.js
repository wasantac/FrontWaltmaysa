import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import {Row,Container,Col} from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const PerfilEditar = () => {
    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const [passC,setPassC] = useState("");
    const history = useHistory();
    let guardarDatos = () => {
        if(pass === passC){
            axios.post("https://0ab699b799efc19a7e61ae996b79a3da.m.pipedream.net",{
                usuario: user,
                password: pass 
            })
            .then(res => {
                history.push('/perfil')
            })
            
        }
        
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
                                <label for="user">Usuario</label>
                                <input type="text" className="form-control" id="usuario"  name="user"
                                onChange={e => setUser(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" className="form-control" id="password"  name="password"
                                onChange={e => setPass(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="password1">Confirmar Contraseña</label>
                                <input type="password" className="form-control" id="password1" 
                                onChange={e => setPassC(e.target.value)}/>
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
