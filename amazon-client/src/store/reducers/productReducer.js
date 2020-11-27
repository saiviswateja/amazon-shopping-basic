import { RETRIEVE_PRODUCTS } from "../actions/retrieveProducts";

const postReducer = (state={},{type,payload})=>{
    switch(type){
        case RETRIEVE_PRODUCTS:
            console.log("came to retrieve products");
            return {
                ...state,
                products:payload
            };
        default:
            console.log(state)
            return state;
    }
};

export default postReducer;