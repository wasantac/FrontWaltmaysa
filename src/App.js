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
import Error from './Components/Client/Error';
import Carrito from './Components/Client/Carrito';
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
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/nosotros">
            <About />
          </Route>
          <Route path="/contactos">
            <Contacto />
          </Route>
          <Route path="/auth" component={Auth}/>
          <Route path="/productos" component={Productos}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/carrito" component={Carrito}/>
          <Route path="*" component={Error}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
