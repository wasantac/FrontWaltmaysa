import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../css/Login.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const [correo, setCorreo] = useState('')
    const [pass, setPass] = useState('')
    const history = useHistory();

    let getSID = () => {
        var name = "sessionid=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    let  checkLoginStatus = () => {
        var sessionid = getSID();
        return sessionid != "";
    }

    let checkSuccess = () => {
        if (checkLoginStatus()) {
            fetch("http://localhost:4000/api/loginCheck?sessionid=" + getSID(), {
                credentials: "include",
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                history.push('/')
            });
        }
    }

    let handleLogin = () => {
        if (checkLoginStatus()) {
            console.log("Already signed in")
        } else {
            var formData = new FormData();
            formData.append('username', correo);
            formData.append('password', pass);

            fetch("http://localhost:4000/api/login", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                // mode: 'no-cors', // no-cors, *cors, same-origin,
                headers: {
                    "Accept": "application/json"
                },
                body: formData
            }).then(function (response) {

                return response.json();
            }).then(function (data) {
                console.log(data);
                document.cookie = "sessionid=" + data['session_key']
                checkSuccess()
            });
        }
    }
    return (
        <div className="bg-primary">
            <Header />
            <div className="container my-5">
                <div className="row ml-auto mr-auto">
                    <div className="col-lg-6 col-md-8 ml-auto mr-auto">
                        <div className="card card-nav-tabs text-center">
                            <div className="card-header card-header-danger">
                                Login
                        </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label for="correo">Correo Electronico</label>
                                        <input type="text" className="form-control" id="correo" aria-describedby="emailHelp" placeholder="abcd@mail.com" name="correo" onChange={e => setCorreo(e.target.value)} />
                                        <small id="emailHelp" className="form-text text-muted">No compratiremos tu correo con nadie.</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="contra">Contraseña</label>
                                        <input type="password" className="form-control" id="contra" placeholder="Contraseña" name="password" onChange={e => setPass(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <a href="/"><small id="emailHelp" className="form-text text-danger color"><u>Olvide mi contraseña</u></small></a>
                                        <a href="/auth/register"><small id="emailHelp" className="form-text text-dark color">No tiene cuenta? Haga click
                        aqui.</small></a>
                                    </div>
                                </form>
                                <button type="submit" className="btn btn-primary bg-danger" onClick={handleLogin}>Iniciar Sesion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Login;
