import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';
import '../../css/ProductoCard.css'

const ProductoCard = ({enlace,src,titulo,precio,altura}) => {
    return (
        <a href={enlace}>
            <Card className="productoTarjeta">
                <CardImg top width="100%" src={src} alt="Card image cap" height={altura}/> 
                <CardBody>
                    <CardTitle tag="h5" className="titulo">{titulo}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">${precio}</CardSubtitle>
                </CardBody>
            </Card>
        </a>
    );
}

export default ProductoCard;
