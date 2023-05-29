import css from './Header.module.css'
import {NavLink} from "react-router-dom";
const AuthRequire = () => {
return (
  <div className={css.header}>
      <NavLink to={"/cars"}>cars</NavLink>

  </div>
);
};

export {AuthRequire};