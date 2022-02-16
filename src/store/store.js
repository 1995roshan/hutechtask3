import { createStore } from "redux";
import {persistStore, persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import mainReducer from "../reducer/reducer";
//import addData from "../action/action";

const persistConfig={
    key:'persistData',
    storage
}

const perstReducer= persistReducer(persistConfig, mainReducer )

 


const store= createStore( perstReducer /*mainReducer*/, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
const pstore=persistStore(store)

export default store;
export  {pstore};