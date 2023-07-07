import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import {wishReducer} from './reducer/wishReducer'
import {nameReducer} from './reducer/nameReducer';
import thunk from 'redux-thunk';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const masterReducer = combineReducers({
    name: nameReducer,
    wish: wishReducer
})
const store = createStore(masterReducer,{name:"stark",wish:["eat","bath"]}, devTools(applyMiddleware(thunk)));

export default store; 