import React from "react";
import { createstore, combineReducers } from "redux";

export const ConfigStore = () => {
    const store = createstore(
        combineReducers({

        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}