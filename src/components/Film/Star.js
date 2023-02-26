import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStarHalfStroke,faStar,} from  "@fortawesome/free-solid-svg-icons"

import css from './film.module.css'

const Star = ({vote_average}) => {
const re=vote_average

    const rat=Array.from({ length:10}, (elem,index)=>{

    let number=index+0.5

        return (
            <span key={index}>
                {
                    re >= index+1?(<FontAwesomeIcon style={{fontSize:'20px'}} className={css.fa} icon ={faStar}/> ):
                        re>=number?(<FontAwesomeIcon  style={{fontSize:'20px'}} className={css.fa} icon={faStarHalfStroke}/>): (
                            <div></div>
                        )
                }
            </span>
        )

})
return (
        <div>
           <div> {rat}</div>
        </div>


);
};

export {Star};


