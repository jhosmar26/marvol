import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Home from "./screens/Home.js"
import Unlimited from "./screens/Unlimited.js"
import logo from "./images/marvol-logo.png"
import "./App.css"

function App() {
  let routes = {
    "videos": "Videos",
    "characters": "Caracteres",
    "comics": "Historietas",
    "movies": "Películas",
    "tv-shows": "Programas de televisión",
    "games": "Juegos",
    "news": "Noticias",
  }
  return (
    <Router>
      <div className="App">
        <div className="bg-black header">
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <Link className="text-white text-xs header__login" to="/">Registrarse | Unirse</Link>
        </div>
        <nav className="bg-black text-white navbar">
          <ul className="flex justify-center">
            {Object.keys(routes).map(function(name, index){
              return <Link to={name} key={index} className="px-5 py-2 text-xs">{routes[name]}</Link>
            })}
          </ul>
        </nav>
        <header className="App-header">
        </header>
        <Switch>
          <Route path="/unlimited">
            <Unlimited />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
