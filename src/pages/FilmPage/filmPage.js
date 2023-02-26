import {Films, PopulFilms} from "../../components";
import './filmPage.css'
import 'animate.css';

const FilmPage = () => {
return (
  <div>
   <PopulFilms/>
      <div className={'boxAllFilm'}>
          <h3 className="animate__animated  animate__zoomInRight allFilms" >All  films</h3>
      </div>

    <Films/>

  </div>
);
};

export {FilmPage};