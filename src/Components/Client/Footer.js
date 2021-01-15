import React from 'react';

const Footer = () => {
    return (
        <div id="pie1" className="card card-nav-tabs m-0 py-lg-5">
            <div id="pie" className="card-body">
                <div id="contactos" className="container px-auto">
                    <div className="row row-cols4 my-lg-5">
                        <div id="redes-sociales" className="col-sm my-2">
                            <h4 className="card-title">Redes Sociales</h4>
                            <p> Siguenos en:</p>
                            <p>
                                <a href="https://www.facebook.com/waltmaysa16" rel="nofollow"target="_blank">
                                    <img src="/assets/images/redes/facebook.png" alt="Facebook"></img>
                                    Waltmaysa
                                </a>

                            </p>
                            <p>
                                <a href="https://www.instagram.com/waltmaysa_sa/" rel="nofollow" target="_blank" alt="Instagram">
                                <img src="/assets/images/redes/instagram.png"></img>
                                @waltmaysa_sa
                                </a>
                            </p>  
                        </div>
                        <div id="Informacion" className="col-sm my-2">
                            <h4 className="card-title">Contactos</h4>
                            <img src="/assets/images/redes/whatsapp.png" alt="whatsapp"></img>Telefono:0984995877<br/>
                            <a href="mailto:waltmaysa.sa@gmail.com">waltmaysa.sa@gmail.com</a><br/>
                            <a href="mailto:wsantacruzec@hotmail.com">wsantacruzec@hotmail.com</a>
                            <p>Cdla Alborada Etapa 12 <br/>C C Gran Albocentro Bloque J6 Guayaquil</p>
                        </div>
                        <div id="quick" className="col-sm my-2">
                            <h4 className="card-title">Quick Links</h4>
                            <a href="contactos">Contactos</a><br/>
                            <a href="nosotros">Nosotros</a><br/>
                            <a href="productos">Productos</a>
                        </div>
                        <div id="tarjetas" className="col-sm my-2">
                            <h4 className="card-title">Aceptamos</h4>
                            <img src="/assets/images/tarjetas/tarjeta-mastercard.png" alt="mastercard"></img>
                            <img src="/assets/images/tarjetas/american-express.png" alt="american express"></img>
                            <img src="/assets/images/tarjetas/visa.png" alt="visa"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
