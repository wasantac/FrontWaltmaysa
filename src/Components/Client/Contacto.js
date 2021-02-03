import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import emailjs from 'emailjs-com';
import '../../css/Contacto.css'
import { Button, Form, FormGroup, Label, Input,Container} from 'reactstrap';
const Contacto = () => {
    function enviarCorreo(e){
        e.preventDefault();
        emailjs.sendForm('service_y186g2g', 'template_7ha59e8', e.target, 'user_pTLxySAThdUhCksIGYy0E')
        .then((result) => {
            console.log("correo enviado")
        }, (error) => {
            console.log("error")
        });   
        e.target.reset();
    }

    return (
        <div>
            <Header />
            <Container className="py-5 mb-5 bg-white my-5 formulario">
            <h1>Contacto</h1>
            <Form  onSubmit={enviarCorreo}>
                    <FormGroup>
                        <Label for="nombre" className="blanco">Nombre:</Label>
                        <Input type="text" name="nombre" id="nombre" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="apellido" className="blanco">Apellido:</Label>
                        <Input type="text" name="apellido" id="apellido" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail" className="blanco">Correo Electronico: </Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="abc@homtail.com" required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="mensaje" className="blanco">Mensaje:</Label>
                        <Input type="textarea" name="mensaje" id="mensaje" required/>
                    </FormGroup>
                    <div className="d-flex justify-content-center">
                        <Button id="enviar" className="btn-danger">Enviar</Button>
                    </div>
                </Form>
            </Container>
            <Footer />
        </div>


        
    );
}

export default Contacto;
