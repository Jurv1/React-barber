import { combineReducers, createStore } from "redux";
import headerPageReducer from "./HeaderPageReducer"; 
import mainPageReducer from "./MainPageReducer"; 
import postPageReducer from "./PostPageReducer"; 
import mastersPageReducer from './MastersPageReducer'
import onlinePageReducer from './OnlinePageReducer'

let reducers = combineReducers({
    headerPageReducer,
    mainPageReducer,
    postPageReducer,
    mastersPageReducer,
    onlinePageReducer,
});
let store = createStore(reducers);
window.store = store;
export default store;