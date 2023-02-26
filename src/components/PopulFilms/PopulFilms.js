import {action} from "../../redux";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons"
import 'animate.css';

import {PopularFilm} from "../PopularFilm/PopularFilm";
import css from './PopulFilms.module.css'
import './jk.css'
import '../CSS/sw.css'

const PopulFilms = () => {
    const dispatch=useDispatch()
    const {popular}=useSelector(state => state.films)

    let offset=0

    const right = () => {
      offset+= 680
        if (offset>7700){
            offset=0
        }
        document.querySelector('.iu').style.left=-offset+'px'
    }

    const left= () => {
        offset-= 680
        if (offset<0){
            offset=7480
        }
        document.querySelector('.iu').style.left=-offset+'px'
    }


    useEffect( () => {
        dispatch( action.getPopular())
    },[dispatch])

    return (
  <div>
      <div>
          <h1 className="animate__animated animate__bounceInRight name " >Popular films</h1>
      </div>
   <div className={'box'}>
       <div  className={css.boxArrowLeft} onClick={()=>left()}>
           <FontAwesomeIcon style={{fontSize:'30px'}}  icon ={faArrowLeft}/>
       </div>

       <div className={css.boxArrowRight} onClick={()=>right()}>
          <FontAwesomeIcon className={css.faArrowRight}  style={{fontSize:'30px'}}  icon ={faArrowRight}/>
       </div>

       <div className={'iu'}>
           {popular.map(film=> <PopularFilm  film={film} key={film.id}/>)}
       </div>

   </div>
  </div>
);
};

export {PopulFilms};