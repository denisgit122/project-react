import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

let initialState = {
    car: [],
    errors: null,
    loading: null
};
const getAll = createAsyncThunk (
    "carSlice/getAll",
    async (_, thunkAPI)=>{
        try {
          const {data} = await carService.getAll();
          console.log(data)
          return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: {}
})
const {reducer: carReducer} = carSlice;

const carAction = {
    getAll,
}
export {
    carReducer,
    carAction
}