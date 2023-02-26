import axios from "axios";
import {base} from "../configs/urls";


const apiServices=axios.create({baseURL:base})

apiServices.interceptors.request.use((config )=>{
    config.headers.Authorization=`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjc5MDYzMjdhYzlhZjkyYTk5YjAyYzc5ZWNhZGM2ZSIsInN1YiI6IjYzZWY1NDhjNDU3NjVkMDA3ZjVkYjNkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eOnjaPQvHJBisL3tRYRAa129opIh8Eav_yphhPmp8HM`
    return config
})
export {apiServices}