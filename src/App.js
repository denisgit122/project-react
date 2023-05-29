import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequireLayout, MainLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";
import {PrivateCarPage} from "./pages/PrivateCarsPage/PrivateCarPage";
import {OneCarPage} from "./pages/AboutOneCarPage/OneCarPage";
import {FavoritesPage} from "./pages/FavoritesPage/FavoritesPage";

function App() {
  return (
  // <Routes>
  //   <Route path={"/"} element={<MainLayout/>}>
  //     <Route index element={<Navigate to={"cars"}/>}/>
  //
  //     {/*// with login*/}
  //     <Route element={<AuthRequireLayout/>}>
  //       <Route path={"cars"} element={<CarsPage/>}/>
  //     </Route>
  //
  //     {/*without login*/}
  //     {/*<Route path={"cars"} element={<CarsPage/>}/>*/}
  //     <Route path={"login"} element={<LoginPage/>}/>
  //     <Route path={"register"} element={<RegisterPage/>}/>
  // </Route>
  //
  // </Routes>
      <Routes>
        <Route path={"/"} element={<MainLayout/>}>
          <Route index element={<Navigate to={"login"}/>}/>
          <Route path={"cars"} element={<CarsPage/>}/>
          <Route path={"cars/:carId"} element={<OneCarPage/>}/>


          <Route path={"login"} element={<LoginPage/>}/>
          <Route path={"register"} element={<RegisterPage/>}/>
        </Route>

          {/*// with login*/}
          <Route element={<AuthRequireLayout/>}>
            {/*  <Route path={"privateCar"} element={<CarsPage/>}> </Route>*/}
            {/*<Route path={"privateCar/:carId"} element={<OneCarPage/>}/>*/}
          </Route>

          {/*without login*/}


      </Routes>
  );
}

export default App;
