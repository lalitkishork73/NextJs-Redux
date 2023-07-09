import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducer/reducer";
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(reducer, devTools(applyMiddleware(thunk)));

export default store;

