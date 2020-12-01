import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import AddProducts from './components/AddProducts';
import ProductsPage from './components/ProductsPages';
import { connect } from 'react-redux';
import {useEffect} from 'react';
import retrieveProducts from './store/actions/retrieveProducts';
import { UserProvider } from './userContext';
import store from './store/index';
import UserLogin from './components/UserLogin';

function App(props) {
  useEffect(() => {
    {props.retreiveProducts()}
  }, [])
  return (
    <div>
        <UserProvider value={store}>
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
                  </Switch>
            </Router>
        </UserProvider>
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
