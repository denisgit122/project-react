import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

let initialState = {
    cars: [],
    car:[],
    errors: null,
    loading: null
};
const getAll = createAsyncThunk (
    "carSlice/getAll",
    async (_, thunkAPI)=>{
        try {
            const {data} = await carService.getAll();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const getById = createAsyncThunk (
    "carSlice/getById",
    async (carId, thunkAPI)=>{
        try {
            const {data} = await carService.getById(carId);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.fulfilled]: (state, action)=>{
            state.cars = action.payload
        },
        [getById.fulfilled]: (state, action)=>{
            state.car = action.payload
        },
    }
})
const {reducer: carReducer} = carSlice;

const carAction = {
    getAll,
    getById,
}
export {
    carReducer,
    carAction
}