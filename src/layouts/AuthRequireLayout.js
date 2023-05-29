import {Outlet} from "react-router-dom";
import {AuthRequire} from "../components/Headers/AuthRequireLayout";

const AuthRequireLayout = () => {
return (
  <div>
     <AuthRequire/>
     <Outlet/>
  </div>
);
};

export {AuthRequireLayout};