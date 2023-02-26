import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

import { filmServices} from "../../services";
import {Film} from "../Film/Film";
import {SearchByGenre} from "../SearchByGenre/SearchByGenre";

import css from './searchFilm.module.css'
import cs from '../CSS/buttonNav.module.css'
import './removeFiltering.css'
import '../CSS/sw.css'
import {Loading} from "../Loading/Loading";

const SearchFilm = () => {


    const [searchKey,setSearchKey]=useState('')
    const [mov,setmov]=useState([])
    const [page,setPge]=useState(1)
    const [data,setData]=useState([])
    const [selectFilt,setFil]=useState('')

const [load,setLoad]=useState(false)

    const serhMovie = (e) => {
        e.preventDefault()
            fetch(searchKey)
    }

    const fetch=async (searchKey)=>{
        setLoad(true)
        const search=filmServices.searchMovie(searchKey,1 )
        const discover=filmServices.getAll(page)
        // const discover=filmServices.getGenresById( selectFilt , page)
        const type=searchKey ? search: discover

            const {data}=await type

            setData(data)
            setmov(data.results)
        setLoad(false)


    };

    useEffect( () => {
        fetch()
    },[page])

    const filterPost = (sort) => {
        setFil(+sort)

        // setmov([...mov].filter(value =>value? value.genre_ids.includes(+sort):'' ))
        setmov([...mov].filter(value => value.genre_ids.includes(+sort)))


    }

    const reset = (e) => {
       e.preventDefault()
       fetch(searchKey)
   }
    return (
  <div className={css.nav} >
          <div id={"id"} className={css.boxInp}>
              < div className={css.margen}>
                  <div>
                      <form onSubmit={serhMovie}  onChange={filterPost} className={css.form} >
                          <input placeholder={' search...'} className={css.inp } type={'text'} onChange={(e)=>setSearchKey(e.target.value.toString())}/>

                          <FontAwesomeIcon className={css.moon}  style={
                              {fontSize:'17px', color:'whitesmoke', position:'absolute', marginLeft:'420px', marginTop:'7px'}} icon ={faMagnifyingGlass}/>

                          <div className={css.boxButton}>
                              <button className={css.formInp} type={'submit'}>search</button>
                              <div className={css.liquid}></div>
                          </div>
                      </form>
                  </div>


              <div className={css.childFlex}>
                  <div>

                      <div>
                          <div className={'boxReset'}>
                              <form onSubmit={reset} onChange={filterPost}>
                                  <button className={'buttonReset'} type={'submit'}>remove filtering </button>
                                  <div className={''}></div>
                              </form>
                          </div>
                      </div>

                      <div  className={css.boxSelect}>
                          <SearchByGenre
                              defaultValue={'filter by:'}
                              value={selectFilt}
                              mov={mov}
                              onChange={filterPost}
                          />
                      </div>
              </div>
          </div>
            </div>
      </div>

      <hr/>
      {
          load
          ?
              <div className={css.loading}>
                  <Loading/>
              </div>


              : <div  className={css.box}>{ mov ? mov.map(film=> <Film film={film} key={film.id}/>)
                  :<div>klk</div>}

              </div>
      }


      <div className={cs.button}>

              {searchKey ? <button disabled> prev</button> :
                  <button disabled={page === 1} onClick={() => setPge(page - 1)}>
                      <a className={'href'} href="#id">prev</a>
                  </button>}

              <button>page:{page}</button>

              {searchKey? <button disabled>next</button>:
                  <button disabled={page===500} onClick={() => setPge(page + 1)}>
                  <a className={'href'} href="#id">next </a>
                  </button>}

              </div>

  </div>
);
};

export {SearchFilm};