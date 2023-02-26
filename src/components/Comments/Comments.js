import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

import  css from './imputComment.module.css'

const Comments = () => {
    const comment=useRef()
    const [inpVal,setInpVal]=useState([])

    const navigate=useNavigate()
const comments = () => {
   setInpVal(comment.current.value)
    // confirm(comment.current.value)
    if (window.confirm (`Do you really want to add comment: ${comment.current.value}?` )){
        alert('successfully added')
    }else {
        navigate(-1)
    }
}
    return (
  <div className={css.inpComment}>
      <input className={css.comment}  placeholder={'comment'} type="text" ref={comment}/>
      <button className={css.button} onClick={()=>comments()} >to Add</button>

  </div>
);
};

export {Comments};