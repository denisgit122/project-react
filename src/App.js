import { Route, Routes} from "react-router-dom";

import {DontPath, FilmPage, SearchFilmPage} from "./pages";
import {HeaderLayout} from "./Layout";
import {AboutPage} from "./pages/About/AboutPage";
import {Footer, Tvs} from "./components";
import {AboutTv} from "./pages/About/AboutTv";


function App() {

  return (
    <div className="App">
<Routes>
  <Route path={'/'} element={<HeaderLayout/>}>
      <Route index element={<FilmPage/>}></Route>
          <Route path={'/:id'} element={<AboutPage/>}/>

      <Route path={'popular'} element={<SearchFilmPage/>}/>
      <Route path={'popular/:id'} element={<AboutPage/>}/>

      <Route path={'TV'} element={<Tvs/>}/>
      <Route path={'TV/:id'} element={<AboutTv/>}/>


  </Route>

  <Route path={'*'} element={<DontPath/>}/>
</Routes>
        <Footer/>

    </div>
  );
}

export default App;
