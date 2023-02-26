const base='https://api.themoviedb.org/3'

const movies='/discover/movie'
const genre ='/genre/movie/list'
const popular='/movie/popular'
const searchMovie ='/search/movie'
const key='e67906327ac9af92a99b02c79ecadc6e'
const poster="https://image.tmdb.org/t/p/w300"
const searchTv ='/search/tv'
const tv='/discover/tv'

const urls={

    movies:{
        movies:movies,
        popular:popular,
        beId:'/movie',
        searchMovie:searchMovie,
        key:key
    },
    genre:{
        genre:genre,
     },
     poster:{
        poster:(post)=>`${poster}${post}`
     },
    tv:{
        tv:tv,
        searchTv:searchTv
    }

}
export {
    base,
    urls
}