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
function App() {
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
        </Switch>
      </div>
    </Router>

  );
}

export default App;
