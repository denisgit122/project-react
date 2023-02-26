import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import {Tv} from "../Tv/Tv";
import cs from "../CSS/buttonNav.module.css";
import css from '../Films/films.module.css'
import csc from '../SearchFilm/searchFilm.module.css'
import cc from './tvs.module.css'
import {Loading} from "../Loading/Loading";
import {tvService} from "../../services";
import {activ} from "../../redux/tvSlice/tvSlice";


const Tvs = () => {

    const dispatch=useDispatch()
    const [tv,setTv]=useState([])
    const [searchKey,setSearchKey]=useState('')

    const {tvAr,prev,next,loading}=useSelector(state => state.tv)
    const [query,setQuri]=  useSearchParams({page: '1'})
    const [load,setLoad]=useState(false)


    const fetch = async (searchKey)=>{
        setLoad(true)
        const search= await tvService.searchTv(searchKey,1 )
        const discover=  dispatch(activ.getAllTV({page:query.get('page')}))
        const type=searchKey ? search: discover

      if (searchKey){const {data:{results}}= await type
          setTv(results)
      } else {}

        setLoad(false)
 };



    const serhMovie = (e) => {
        e.preventDefault()
        fetch(searchKey)
    }

    useEffect( () => {
      fetch()
    },[dispatch,query])

    return (
        <div className={css.boxTV}>



            <div id={"id"} className={cc.boxInp}>
                < div className={cc.margen}>
                    <div>
                        <form onSubmit={serhMovie}   className={cc.form} >
                            <input placeholder={' search...'} className={cc.inp } type={'text'} onChange={(e)=>setSearchKey(e.target.value)}/>

                            <FontAwesomeIcon className={cc.moon}  style={
                                {fontSize:'17px', color:'whitesmoke', position:'absolute', marginLeft:'690px',marginTop:'6px'}} icon ={faMagnifyingGlass}/>

                            <div className={cc.boxBut}>
                                <div className={csc.boxButton}>
                                    <button className={csc.formInp} type={'submit'}>search</button>
                                    <div className={csc.liquid}></div>
                                </div>
                            </div>
                        </form>
                        <hr className={cc.hr}/>
                    </div>
                </div>
            </div>

            {load
            ?
                <div className={css.load}>
                    <Loading/>
                </div>
            : <div  className={css.box}>{ searchKey? tv.map((tv,index)=>tv? <Tv tv={tv} key={index}/>:<h1>dont have</h1>):
                    tvAr.map(tv=><Tv tv={tv} key={tv.id}/> )
                } </div>
            }


            <div>

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

        </div>
    );
};

export {Tvs}