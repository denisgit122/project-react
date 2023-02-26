import {useNavigate} from "react-router-dom";

import css from "../Film/film.module.css";
import {urls} from "../../configs/urls";
import {Star} from "../Film/Star";
import cs from "./Tv.module.css";

const Tv = ({tv}) => {
  const {id,name,poster_path,vote_average,first_air_date}=tv
  const navigate=useNavigate()

  return (
  <div className={cs.boxTv}>

    <div className={css.container}>
      <div className={css.card}>
        <div className={css.face} >
          <div className={css.content}>
            <h6 className={css.h3}> {name}</h6>
            {poster_path?<img className={css.imp} src={urls.poster.poster(poster_path)} alt=""/>:<h1>error</h1>}
            <Star vote_average={vote_average} />
          </div>
        </div>

        <div className={css.face2 }>
          <div className={css.content}>

            <h3 className={css.original_title}>{name} </h3>

            <div className={css.boxRelease_date}>
              <h4 className={css.release_date}>Release date: {first_air_date}</h4>
            </div>


            <div className={css.grid}>
              <button  className={css.candy} onClick={() =>navigate(id.toString())}>
                <span>Read more</span>
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>



  </div>
);
};

export {Tv};