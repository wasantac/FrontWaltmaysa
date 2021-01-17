import React from 'react';
import {Col,ListGroup,ListGroupItem} from 'reactstrap';
import '../../css/BarraLateral.css'
const BarraLateral = () => {
    return (
        <Col sm="2" className="bg-white fondo pr-0">
            <div>
                <ListGroup>
                    <ListGroupItem tag="a" href="/productos/todos">Todos</ListGroupItem>
                    <ListGroupItem tag="a" href="/productos/Electrodomésticos">Electrodomésticos</ListGroupItem>
                    <ListGroupItem tag="a" href="/productos/Tecnología">Tecnología</ListGroupItem>
                </ListGroup>
            </div>
        </Col>
    );
}

export default BarraLateral;
