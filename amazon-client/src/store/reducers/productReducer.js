import { RETRIEVE_PRODUCTS } from "../actions/retrieveProducts";

export const TESTING_REDUX = "TESTING_REDUX";

const postReducer = (state={},{type,payload})=>{
    switch(type){
        case RETRIEVE_PRODUCTS:
            console.log("came to retrieve products");
            return {
                ...state,
                products:payload
            };
        case TESTING_REDUX:
            console.log("came to redux");
            return {
                ...state,
                "tested":"successfull runneds"
            }
        default:
            console.log(state)
            return state;
    }
};

export default postReducer;