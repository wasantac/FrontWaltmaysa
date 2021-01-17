import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/About.css'
const About = () => {
    return (
        <div>
            <Header/>
            <div className="jumbotron jumbotron-fluid">
                <div className="container ">
                    <div className="row row-cols-2">
                        <div className="col-sm">
                            <h1 className="display-4">¡Siempre para ti!</h1>
                            <p className="lead text-justify">La tecnología ahora es un pilar fundamental para el comercio. Por eso en waltmaysa te ofrecemos el mejor servicio con los mejores precios del mercado.</p>
                        <div className="container">
                            <div className="row row-cols-3 py-3">
                                <div className="col-sm m-0">
                                    <h2 className="text-info font-weight-bold m-0">3</h2>
                                    <p className="h5 m-0">años de experiencia</p>
                                </div>
                                <div className="col-sm m-0">
                                    <h2 className="text-info font-weight-bold m-0">+10MIL</h2>
                                    <p className="h5 m-0">Clientes Satisfechos</p>
                                </div>
                                <div className="col-sm m-0">
                                    <h2 className="text-info font-weight-bold m-0">100%</h2>
                                    <p className="h5 m-0">Confiable</p>
                                </div>

                            </div>
                            
                        </div>
                        </div>
                        <div className="col-sm">
                            <img className="img-fluid" src="/assets/images/local.jpeg" alt="local"/>
                        </div>
                    </div>
                    <div className="row w-100 mx-auto">
                        <iframe title="mapa"src="https://www.google.com/maps/d/u/0/embed?mid=1hohOvQjDvKLPTmE-E1kOWfQ5SDCihKiA" height="300" className="w-100 my-5"></iframe>
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="info">
                    <h4 className="info-title">¿Quiénes Somos?</h4>
                    <p className="text-dark text-justify">Somos un Grupo empresarial, dedicado a la distribución local de Electrodomesticos, Tecnologia, Hogar y Jugetería.</p>
                </div>
                <div className="info">
                    <h4 className="info-title">Servicios</h4>
                    <ul className="fa-ul m-0 text-justify pl-4">
                        <li className="py-1 px-auto">
                            <span className="material-icons fa-li">
                            done
                            </span>
                            Hacemos Delivery las 24 horas del dia y los 7 dias de la semana.
                        </li>
                        <li className="py-1 px-auto"><span className="material-icons fa-li">
                            done
                            </span>
                            Los mejores precios de todo el pais.
                        </li>
                        <li className="py-1 px-auto"><span className="material-icons fa-li">
                            done
                            </span>Envios a nivel Nacional 100% Garantizados.
                        </li>
                        <li className="py-1 px-auto"><span className="material-icons fa-li">
                            done
                            </span>Atencion al cliente 24/7.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="w-100 col">
                    <h4 className="info-title">Desarrolladores</h4>
                </div>
                <div className="row p-3">
                    <div className="col-sm">
                        <h5 className="info-title">Walter Santaruz</h5>
                        <p className="text-justify descripcion">Creativo, responsale, proactivo y organizado. Soy un full stack developer con facilidade adapación orientado a la mejora continua e innovación, en busqueda de nuevos retos.</p>
                    </div>
                    <div className="col-sm">
                        <h5 className="info-title">Ricardo Villacis</h5>
                        <p className="text-justify descripcion">Líder del grupo y con experiencia siéndolo.Tiene habilidades para adaptarse fácilmente a lo nuevo y  tiene buena comunicación con los miembros del grupo, su fuerte es front end en el área de desarrollo. Cuenta con gran capacidad para plantear soluciones de problemas.</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm">
                        <h5 className="info-title">Evelyn Mejia</h5>
                        <p className="text-justify descripcion">Líder de club estudiantil tecnológico en ESPOL. Tiene experiencia en el área del front-ent como web developer. Entre sus habilidades destacan el trabajo en equipo, capacidad de adaptación y creatividad.</p>
                    </div>
                    <div className="col-sm">
                        <h5 className="info-title">Carlos Flores</h5>
                        <p className="text-justify descripcion">Programador autodidacta con experiencia en el desarrollo de aplicaciones web, móviles y de escritorio. Posee años de experiencia desarrollando para back-end. Sus fuertes son el desarrollo de algoritmos y estructuras, la adaptación a nuevas herramientas y entornos, y encontrar soluciones eficientes.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;
