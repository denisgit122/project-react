import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {tvService} from "../../services";



const initialState={
    tvAr:[],
    next:null,
    prev:null,
    loading:null
}
const getAllTV=createAsyncThunk(
    'tvSlice/getAll',
    async ({page},thunkAPI )=>{
        try {
            const {data}=await tvService.getAll(page)
            return data.results
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)

const tvSlice=createSlice({

    name:'tvSlice',
    initialState,
    reducers:{

    },
    extraReducers:builder =>
        builder
            .addCase(getAllTV.pending,(state, action)=>{
                state.loading=true
            })
            .addCase(getAllTV.fulfilled,(state, action)=>{
                state.loading=false
                state.tvAr  =action.payload
                state.prev  =action.payload
                state.next  =action.payload

            })
})
const {reducer:tvReducer}=tvSlice

const activ={
    getAllTV
}
export {tvReducer,activ}