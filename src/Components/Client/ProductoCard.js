import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';
import '../../css/ProductoCard.css'

const ProductoCard = ({enlace,src,titulo,precio}) => {
    return (
        <a href={enlace}>
            <Card className="productoTarjeta">
                <CardImg top width="100%" src={src} alt="Card image cap" height="300px"/> 
                <CardBody>
                    <CardTitle tag="h5">{titulo}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">${precio}</CardSubtitle>
                </CardBody>
            </Card>
        </a>
    );
}

export default ProductoCard;
