import React from 'react';
import {Row,Col} from 'reactstrap';
import '../../css/Item.css'
const ProductoItem = ({enlace,src,titulo,precio,altura}) => {
    return (
        <a href={enlace}>
            <Row className="fila m-4 align-items-center">
                <Col sm="3">
                    <img src={src} alt={titulo} width={altura} height={altura} ></img>
                </Col>
                <Col sm="7">
                    <h4 className="text-dark font-weight-bold text-left">{titulo}</h4>
                </Col>
                <Col sm="2">
                    <h2 className="text-dark">${precio}</h2>
                </Col>
            </Row>
        </a>
    );
}

export default ProductoItem;
