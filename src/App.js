import './App.css';
import ReactDOM from "react-dom";
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (  // AÇO ES JSX
    <Router>

      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <nav className="nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">AboutsUs</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path="/aboutus">
                  <AboutUs />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </header>
      </div>

    </Router>

  );
}

export default App;
