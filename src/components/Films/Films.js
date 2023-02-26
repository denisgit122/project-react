import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {action} from "../../redux";

import css from './films.module.css'
import cs from '../CSS/buttonNav.module.css'
import {Film} from "../Film/Film";
import {Loading} from "../Loading/Loading";

const Films = () => {

    const dispatch=useDispatch()
    const {film,prev,next,loading}=useSelector(state => state.films)
    const [query,setQuri]=  useSearchParams({page: '1'})

    useEffect( () => {
      dispatch(action.getAll({page:query.get('page')}))
    },[dispatch,query])

    return (

      <div>
        <div id={'id'} className={css.box}>
            {loading && <Loading/>}


          {film.map(film => <Film  key={film.id
          } film={film}/> )}

        </div>
          <div className={cs.button}>
                   <button   disabled={!prev}  onClick={()=>setQuri(query=>({page:+query.get('page')-1}))}>
                       <a className={'href'} href="#id">prev</a>
                   </button>

                    <button disabled={true}>{query}</button>

                   <button disabled={!next}   onClick={()=>setQuri(query=>({page:+query.get('page')+1}))}>
                       <a className={'href'} href="#id">next </a>
                   </button>

          </div>

  </div>
);
};

export {Films};