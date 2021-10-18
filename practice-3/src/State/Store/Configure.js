import {createStore,combineReducers} from "redux";

export const Configure=()=>{
    const store= createStore(
        combineReducers({
           
        }),
        window.__REDUX_DEVTOOLS_EXTENTION__&& window.__REDUX_DEVTOOLS_EXTENTION__()
    );
    return store;
};