import {Star} from "./Star";
import { useNavigate} from "react-router-dom";

import css from './film.module.css'
import {urls} from "../../configs/urls";





const Film = ({film}) => {
  const {id,original_title,poster_path,vote_average,release_date}=film
    const navigate=useNavigate()

return (

    <div className={css.mar}>

        <div className={css.container}>
            <div className={css.card}>
                <div className={css.face} >
                    <div className={css.content}>
                        <h6 className={css.h3}> {original_title}</h6>
                        {poster_path?<img  className={css.imp} src={urls.poster.poster(poster_path)} alt=""/>:
                        <h1>er</h1>
                        }
                        <Star vote_average={vote_average} />
                    </div>
                </div>

                <div className={css.face2 }>
                    <div className={css.content}>

                        <h3 className={css.original_title}>{original_title} </h3>

                        <div className={css.boxRelease_date}>
                            <h4 className={css.release_date}>Release date: {release_date}</h4>
                        </div>


                        <div className={css.grid}>
                            <button className={css.candy} onClick={() => navigate(id.toString())}>
                                <span>Read more</span>
                            </button>
                        </div>


                        {/*<Link to={id.toString()}></Link>*/}

                    </div>
                </div>
            </div>


        </div>

    </div>

);};

export {Film};