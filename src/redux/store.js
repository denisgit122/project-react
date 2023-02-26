import {combineReducers} from "redux";
import {filmReducer} from "./filmSlice/filmSlice";
import {configureStore} from "@reduxjs/toolkit";
import {tvReducer} from "./tvSlice/tvSlice";

const root=combineReducers({
    films:filmReducer,
    tv:tvReducer

})
const setUppStore =()=>configureStore({
    reducer:root
})
export {setUppStore}