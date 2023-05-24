import {combineReducers} from "redux";
import {carReducer} from "./slices/carSlices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    cars: carReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}