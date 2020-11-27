import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import AddProducts from './components/AddProducts';
import ProductsPage from './components/ProductsPages';
import { connect } from 'react-redux';
import retrieveProducts from './store/actions/retrieveProducts';

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
              </Switch>
        </Router>
    </div>
  );
}

const MapStateToProps = (state)=>{
  return {
      products:state.products,
      user:state.user
  }
}

const MapDispatchToProps = (dispatch)=>{
  return {
      retreiveProducts: ()=>dispatch(retrieveProducts)
  }
}


export default connect(MapStateToProps,MapDispatchToProps)(App);
