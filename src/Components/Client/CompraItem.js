import React from 'react';
import {Row,Col} from 'reactstrap';
import '../../css/Item.css'
import '../../css/Compra.css'
const CompraItem = ({id_doc,fecha,total,detalle,is_active,metodopago}) => {
    const items = []

    for (const [index, value] of detalle.entries()) {
    items.push(<li key={index}>{value}</li>)
    }
    return (
        
            <Row className="fila m-4 align-items-center">
                <Col sm="1">
                    <h2>ID:{id_doc}</h2>
                   
                </Col>
                <Col sm="2">
                    
                    <h3>Fecha de emision:{fecha}</h3>
                </Col>

                <Col sm="4">
                    {items}
                </Col>

                <Col sm="2">
                    <h4 className="text-dark font-weight-bold text-left titulo">Metodo de Pago:{metodopago}</h4>
                </Col>
 
                <Col sm="2">
                    <h2 className="text-dark">${total}</h2>
                </Col>
                <Col sm="1">
                    <h3 className="text-dark">{is_active}</h3>
                </Col>
            </Row>
        
    );
}

export default CompraItem;
