import { combineReducers, createStore } from "redux";
import basketReduser from "./basketReduser";
import productReduser from "./product";
import { reducer as formReducer } from 'redux-form';


let reduser = combineReducers({
    product:productReduser,
    basket:basketReduser,
    form:formReducer
})



let state = createStore(reduser);
window.store = state;
export default state;