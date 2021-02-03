import React , {useState}from 'react';
import { Container,Row,Col } from 'reactstrap';
import Header from './Header';
import '../../css/PerfilCliente.css'
import Footer from './Footer';
const PerfilCliente = () => {
    const [activeTab, setActiveTab] = useState('1');
    
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    let handleLog = () => {
        var formData = new FormData();
        formData.append('sessionid', localStorage.getItem("session"));
        fetch("http://localhost:4000/api/logout", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'no-cors', // no-cors, *cors, same-origin,
            headers: {
                "Accept": "application/json"
            },
            body: formData
        }).then(function (response) {

            return response.json();
        }).then(function (data) {
            console.log(data);
            localStorage.setItem("session","")

        });
    } 
    return (
        <div>
            <Header></Header>
            <div className="container-fluid bg-primary">
                <Row className="py-5">
                    <Col sm="12">
                        <Container className="bg-white p-3 contenedorP"> 
                        <div className="cropped mx-auto">
                        <img src="/assets/img/bg3.jpg" alt="Perfil" className="fotoPerfil"></img>       
                        </div>
                        <a href ="/perfil/editar"className="btn btn-danger w-100">Editar Perfil</a>
                        <a href="/compras" className="btn btn-danger w-100">Ver Historial Completo</a>
                        <button className="btn btn-danger w-100" onClick={handleLog}>Logout</button>
                        </Container>
                        
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default PerfilCliente;
