import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
const Register = () => {
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [correo,setCorreo] = useState("")
    const [pass,setPass] = useState("")
    const [user,setUser] = useState("")
    const [conf,setConf] = useState("")
    let handleRegistro = () =>{
        if(pass === conf){
            axios.post("https://81d1c604065a4c27a10f4e00ffd03caf.m.pipedream.net",{
            nombre: nombre,
            apellido: apellido, 
            correo: correo,
            password: pass,
            user: user})
            .then(res => {
                console.log(res)
            })
        }
        
    }
    return (
        <div className="bg-primary">
            <Header />
            <div className="container my-5">
                <div className="row mr-auto ml-auto">
                    <div className="col-lg-6 col-md-8 ml-auto mr-auto">
                        <div className="card card-nav-tabs text-center">
                            <div className="card-header card-header-danger">
                                 Registro
                            </div>
                            <div className="card-body">
                                <form method="POST" action="">
                                    <div className="row">
                                        <div className="col form-group">
                                            <input id="nombre" type="text" className="form-control" placeholder="Nombre" name="nombre" onChange={e => setNombre(e.target.value)}/>
                                        </div>
                                        <div className="col form-group">
                                            <input id="apellido" type="text" className="form-control" placeholder="Apellido" name="apellido"  onChange={e => setApellido(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="col form-group">
                                            <input id="user" type="text" className="form-control" placeholder="usuario" name="user" onChange={e => setUser(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="correo">Correo Electronico</label>
                                        <input type="email" className="form-control" id="correo" aria-describedby="emailHelp" placeholder="abcd@hotmail.com" name="correo"  onChange={e => setCorreo(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="contra">Contraseña</label>
                                        <input type="password" className="form-control" id="contra" placeholder="Contraseña"
                                         onChange={e => setPass(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="contraConfirmar">Confirmar Contraseña</label>
                                        <input type="password" className="form-control" id="contraConfirmar" placeholder="Confirmar Contraseña" onChange={e => setConf(e.target.value)}/>
                                    </div>
                                </form>
                                <button type="submit" className="btn btn-primary bg-danger" onClick={handleRegistro}>Registrarse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
