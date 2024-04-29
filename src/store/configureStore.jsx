import {createStore,combineReducers} from "redux"
import{ authReducer }from "./Reducers/authReducers"
import {productReducer} from './Reducers/productReducer'


export const store=createStore(combineReducers(
    {
       
        auth:authReducer,
        cart:productReducer
    }
))

