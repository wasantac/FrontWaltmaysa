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
    return (
        <div>
            <Header></Header>
            <div className="container-fluid bg-primary">
                <Row className="py-5">
                    <Col sm="3">
                        <Container className="bg-white p-3 contenedorP"> 
                        <div className="cropped mx-auto">
                        <img src="/assets/img/bg3.jpg" alt="Perfil" className="fotoPerfil"></img>       
                        </div>
                        <h3 className="text-left mb-0">Walter Santaruz</h3>
                        <h6 className="text-left mt-0 text-muted">@Walter</h6>
                        <button className="btn btn-danger w-100">Editar Perfil</button>
                        </Container>
                        
                    </Col>
                    <Col sm="9">
                        <Container className="bg-white contenedorP">
                        <h2 className="text-left mb-0">Historial</h2>
                        <hr className="bg-dark mt-0"></hr>
                        <h3 className="mb-3 text-muted">
                            No hay compras recientes
                        </h3>
                        <a href="/perfil/historial" className="btn btn-danger">Ver Historial Completo</a>
                        </Container>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default PerfilCliente;
