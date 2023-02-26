import {Outlet} from "react-router-dom";
import {Header} from "../components";


const HeaderLayout = () => {
return (
  <div>
      <Header/>
      <Outlet/>
  </div>
);
};

export {HeaderLayout};