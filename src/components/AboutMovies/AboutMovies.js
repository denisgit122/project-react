import {useEffect, useState} from "react";

import { filmServices} from "../../services";
import {AboutMovie} from "../AboutMovie/AboutMovie";

const AboutMovies = ({postId}) => {

    const [film,setFilm]=useState([])

    useEffect(() => {
        filmServices.getById(postId).then(({data})=> setFilm(data))
    },[])

    return (
        <div>
            {/*{genres?genres.map(re=> console.log(re)):<h1>lox</h1>}*/}
            { <AboutMovie key={film.id} film={film}/> }

        </div>
    );
};

export {AboutMovies};