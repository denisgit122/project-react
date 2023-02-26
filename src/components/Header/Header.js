import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {Switch} from "../Switch/Switch";

const Header = () => {
    const navigae=useNavigate()
    return (
        <div className={css.header}>

            <div>
                <div className={css.boxUser}>
                    <img onClick={()=>navigae('/')} className={css.user} src="https://th.bing.com/th/id/R.17bfdd845df1440c98a5cfcdeedd633f?rik=u%2bTNThBSlaIVZA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_155117.png&ehk=egteo%2fJ8IV6AkqZ2Nlmota2csGEWyhjQbas775TyeHo%3d&risl=&pid=ImgRaw&r=0" alt="user"/>
                </div>
            </div>


            <div className={css.ul}>
                <div className={css.li} >

                    <NavLink
                        style={{color:"red"}}
                        data-text="&nbsp;All&nbsp;films"  to={"/"}>&nbsp;All&nbsp;films&nbsp;</NavLink>
                </div>
                <div className={css.li}>
                    <NavLink
                        style={{color:"green"}}
                        data-text="&nbsp;Search&nbsp;film"  to={"/popular"}>&nbsp;Search&nbsp;film&nbsp;</NavLink>
                </div>

                <div className={css.li}>
                    <NavLink
                        style={{color:"blue"}}
                        data-text="&nbsp;Show"  to={"/TV"}>&nbsp;Show&nbsp;</NavLink>
                </div>

            </div>

            <div>
                <Switch/>
            </div>
        </div>
    );
};

export {
    Header
};