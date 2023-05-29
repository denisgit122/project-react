import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";
import {userService} from "../../services/userService";

let initialState = {
    users: [],
    user:[],
    errors: null,
    loading: null
};
const getAll = createAsyncThunk (
    "userSlice/getAll",
    async (_, thunkAPI)=>{
        try {
            const {data} = await userService.getAll();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);
const getById = createAsyncThunk (
    "userSlice/getById",
    async ({userId}, thunkAPI)=>{
        try {
            const {data} = await userService.getById(userId);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.fulfilled]: (state, action)=>{
            state.users = action.payload
        },
        [getById.fulfilled]: (state, action)=>{
            state.user = action.payload
        },
    }
})
const {reducer: userReducer} = userSlice;

const userAction = {
    getAll,
    getById,
}
export {
   userReducer,
    userAction
}