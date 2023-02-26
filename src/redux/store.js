import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {tvReducer} from "./tvSlice/tvSlice";
import {filmReducer} from "./filmSlice/filmSlice";

const root=combineReducers({
    films:filmReducer,
    tv:tvReducer

})
const setUppStore =()=>configureStore({
    reducer:root
})
export {setUppStore}