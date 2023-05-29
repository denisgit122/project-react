import {combineReducers} from "redux";
import {carReducer} from "./slices/carSlices";
import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/userSlices";

const rootReducer = combineReducers({
    cars: carReducer,
    users: userReducer
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}