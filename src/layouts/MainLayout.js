import {Outlet} from "react-router-dom";
import {HeaderAuth} from "../components";

const MainLayout = () => {
return (
  <div>
      <HeaderAuth/>
      <Outlet/>
  </div>
);
};

export {MainLayout};