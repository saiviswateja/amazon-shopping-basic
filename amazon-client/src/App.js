import './App.css';
import {BrowserRouter as Router,Switch,Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Admin from './components/Admin';

function App() {
  return (
    <div>
        <Router>
              <Switch>
                  <Route path="/" exact>
                      <Home/>
                  </Route>
                  <Route path="/admin" exact>
                    <Admin/>
                  </Route>
              </Switch>
        </Router>
    </div>
  );
}

export default App;
