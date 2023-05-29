import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const HeaderAuth = () => {
return (
  <div className={css.header}>
     <NavLink to={"/cars"}>Cars</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/register"}>Register</NavLink>
  </div>
);
};

export {HeaderAuth};