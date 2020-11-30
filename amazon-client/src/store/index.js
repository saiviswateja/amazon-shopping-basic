import {applyMiddleware, createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer';

const intialState = {
    products:[],
    user:{"name":"viswa"}
}

const middleware = [thunk];

const store = createStore(productReducer,intialState,compose( applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;

