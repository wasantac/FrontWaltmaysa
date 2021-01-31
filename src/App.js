import './App.css';
import Main from './Components/Client/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/Client/About';
import Contacto from './Components/Client/Contacto';
import Auth from './Components/Client/Auth';
import Productos from './Components/Client/Productos';
import Admin from './Components/Admin/Admin';
import Component from './Components/Admin/Component';
import Analytics from './Components/Admin/Analytics';
import Error from './Components/Client/Error';
import Carrito from './Components/Client/Carrito';
import ClienteHead from './Components/Client/ClienteHead';
import Loader from './Components/Client/Loader';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    if(!localStorage.getItem("carrito")){
      localStorage.setItem("carrito","")
    }
    if(!localStorage.getItem("precio")){
      localStorage.setItem("precio",0)
    }
  })
  return (
    <Router>
      <Loader></Loader>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/nosotros">
          <ClienteHead></ClienteHead>
            <About />
          </Route>
          <Route path="/contactos">
          <ClienteHead></ClienteHead>
            <Contacto />
          </Route>
          <Route path="/auth">
            <ClienteHead></ClienteHead>
            <Auth></Auth>
          </Route>
          <Route path="/productos"component={Productos} >
          
          </Route>
          <Route path="/admin" component={Admin}/>
          <Route path="/component" component={Component}/>
          <Route path="/analytics" component={Analytics}/>

          <Route path="/carrito">
          <ClienteHead></ClienteHead>
          <Carrito></Carrito>
          </Route>

          <Route path="*" component={Error}>
          <ClienteHead></ClienteHead>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
