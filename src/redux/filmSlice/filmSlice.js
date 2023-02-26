import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {filmServices} from "../../services";


const initialState={
    film:[],
    oneFil:[],
    popular:[],
    genre:[],
    loading:null,
    error:null,
    next:null,
    prev:null,


}
const getAll=createAsyncThunk(
    'filmSlice/getAll',
async ({page},thunkAPI )=>{
        try {
            const {data}= await filmServices.getAll(page)
            return data.results
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

}
)

const getPopular=createAsyncThunk(
    'filmSlice/getPopular',
    async (_,thunkAPI )=>{
        try {
            const {data}=await filmServices.getPopular()
            return data.results
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

const getGenre=createAsyncThunk(
    'filmSlice/getGenre',
    async (_,thunkAPI )=>{
        try {
            const {data}=await filmServices.getGenre()
            return data.genres
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

const filmSlice=createSlice({
    name:'filmSlice',
    initialState,
    reducers:{

    },
    extraReducers:builder =>
        builder
            .addCase(getAll.pending,(state, action)=>{
            state.loading=true
        })
            .addCase(getAll.fulfilled,(state, action)=>{
                state.loading=false
                 state.film  =action.payload
                state.prev  =action.payload
                state.next  =action.payload

            })

            .addCase(getPopular.fulfilled,(state, action)=>{
                state.popular=action.payload
            })

            .addCase(getGenre.fulfilled,(state, action)=>{
                state.genre=action.payload
                })


})

const {reducer:filmReducer}=filmSlice

const action={
    getAll,
    getPopular,
    getGenre
}
export {filmReducer,action}