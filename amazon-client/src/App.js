import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import AddProducts from './components/AddProducts';
import ProductsPage from './components/ProductsPages';
import Test from './components/Test';
import UserLogin from './components/UserLogin';

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
                      <Route path="/admin/products">
                        <AddProducts/>
                      </Route>
                      <Route path="/products" exact>
                        <ProductsPage/>
                      </Route>
                      <Route path="/login">
                        <UserLogin/>
                      </Route>
                      <Route>
                        <Test/>
                      </Route>
                  </Switch>
            </Router>
    </div>
  );
}


export default (App);
