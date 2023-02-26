import css from './switch.module.css'
import '../CSS/sw.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons"

const Switch = () => {

    const re = () => {
        if (localStorage.getItem('them') === 'white') {
            localStorage.removeItem('them')
        } else {
            localStorage.setItem('them', 'white')
        }
        addWhite()
    }

    function addWhite() {
        try {
            if (localStorage.getItem('them')==='white'){
                document.querySelector('html').classList.add('qw')
            }else { document.querySelector('html').classList.remove('qw')}
        }catch (e) {}
    }
addWhite()

    return (
  <div className={css.box}>
<div> <label  className={css.switch}>

    <FontAwesomeIcon className={css.moon}  style={{fontSize:'30px'}}  icon ={faMoon}/>

    <input
        // checked={localStorage.getItem('them') ? true : false}
        defaultChecked={localStorage.getItem('them') ? true : false}
        onClick={()=>re()}
        type="checkbox"
        className={css.switch__inp}/>
    <span   className={css.switch__slider}></span>
</label>
    <FontAwesomeIcon className={css.sun}  style={{fontSize:'23px'}}  icon ={faSun}/>

</div>
  </div>
);
};

export {Switch};