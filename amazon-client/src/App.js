import './App.css';
import {BrowserRouter as Router,Switch,Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
        <Router>
              <Switch>
                  <Route path="/" exact>
                      <Navbar/>
                  </Route>
              </Switch>
        </Router>
    </div>
  );
}

export default App;
