import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft,faStar} from  "@fortawesome/free-solid-svg-icons"

import {urls} from "../../configs/urls";
import css from './aboutMovie.module.css'
import './aboutMovie.css'
import {Comments} from "../Comments/Comments";

const AboutMovie = ({film}) => {
    const {
        title,backdrop_path,poster_path,genres,runtime,vote_average,overview,status,release_date,production_companies,tagline

    }=film
    const navigate=useNavigate()

    return (

        <div className={''}>

            <div className={css.fon}>
                <div className={'boxAboutMovie'}>
                    <div className={'div'}>

                        <div className={'backNav'} onClick={()=>navigate(-1)}>
                            <FontAwesomeIcon style={{fontSize:'14px'}} className={'fontArrow'} icon ={faArrowLeft}/>
                            back
                        </div>

                        <h1 className={'colorTitle'}>{title}</h1>
                    </div>

                    <div className={css.flex}>
                        <div>
                            {poster_path?<img className={'img'} src={urls.poster.poster(poster_path)}/> :<h1>error</h1>}
                        </div>

                        <div className={css.boxWithGenre}>
                            <div className={css.genreNav}>
                                {genres?
                                    genres.map((re, index) =>
                                        <p onClick={()=>navigate("/popular")} className={'boxGenre'} key={index}>{re.name}</p>)
                                    :<h1>wwe</h1>
                                }
                            </div>

                            <div className={css.boxWithTimeStar}>
                                <div>
                                    <div className={'caliber'}>
                                        HD
                                    </div>
                                </div>

                                <div className={'spar'}>
                                    <FontAwesomeIcon style={{fontSize:'14px',}} className={'faStar'} icon ={faStar}/>
                                    <span >{vote_average}</span>
                                </div>

                                <div className={'minute'}>
                                    {runtime} min
                                </div>
                            </div>

                            <div className={css.boxWithOverview}>
                                <h2 className={'description'}> Description</h2>
                                <p className={'overview'}>
                                    {overview}
                                </p>
                            </div>

                            <div className={css.boxStyle}>
                                <div className={'style'}>
                                    <div className={css.spanw}>Released:</div>
                                    <div>{release_date}</div>
                                </div>
                                    <hr className={css.hr}/>

                                <div className={'style'}>
                                    <div className={css.spanw}>
                                        Production:
                                    </div>
                                    {production_companies?production_companies.map((production_companie,index)=>
                                        <span  key={index} className={css.margin}>
                                         {production_companie.name},
                                       </span>
                                    ) :<h2>er</h2>}
                                </div>

                                    <hr  className={css.hr}/>
                                <div className={'style'}>
                                    <div className={css.spanw}>Tags: </div> <span >{tagline}</span>
                                </div>

                                    <hr className={css.hr}/>
                            </div>

                        </div>

                    </div>


                    <div className={css.boxComments}>
                        <div className={css.boxWithH2Com}>
                            <h2 className={'h2Commen'}>Comments</h2>
                            <div className={'hr'}></div>
                            <Comments/>
                        </div>

                        <div>
                            {backdrop_path?<img className={css.backdrop_path}  src={urls.poster.poster(backdrop_path)} alt="backdrop_path"/>
                            :<h1>error</h1>
                            }
                        </div>

                    </div>

                </div>
            </div>


        </div>
);
};

export {AboutMovie};