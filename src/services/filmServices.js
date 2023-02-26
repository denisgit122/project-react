import {apiServices} from "./apiServices";
import {urls} from "../configs/urls";

const filmServices={
    getAll:(page=1)=>apiServices.get(urls.movies.movies,{params:{page:page}}),
    getById:(id)=>apiServices.get(`/movie/${id}`),

    searchMovie:(searchKey,pages=1)=>apiServices.get(urls.movies.searchMovie,
        {params:
                {query:searchKey, pages:pages}}),

    getPopular:()=>apiServices.get(urls.movies.popular),
    getGenre:()=>apiServices.get(urls.genre.genre),
    getGenresById:(id,page=1)=>apiServices.get(`/discover/movie?with_genres=${id}`,{params:{page:page}})
}


export {filmServices}