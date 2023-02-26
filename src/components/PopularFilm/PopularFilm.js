import css from './popularFil.module.css'
import {urls} from "../../configs/urls";
import {filmServices} from "../../services";
import '../CSS/sw.css'


const PopularFilm = ({film}) => {
    const {title,poster_path}=film
    const popular = filmServices.getPopular();

   popular.then(({data})=>data);

    return (
  <div>
      <div className={css.slider}>

          <div  className={'slideContent'}>
                  <div className={css.boxes}>

                      <div className={css.led}>
                          <div className={css.name}> {title} </div>
                          <img  className={css.imp} src={urls.poster.poster(poster_path)} alt=""/>
                      </div>
                  </div>

      </div>
  </div>
  </div>
);
};

export {PopularFilm};