import {useParams} from "react-router-dom";
import {AboutMovies} from "../../components";
import {AboutTvs} from "../../components/AboutTvs/AboutTvs";



const AboutPage = () => {
    const {id}=useParams()
return (
  <div>
      <AboutMovies postId={id}/>
   </div>
);
};

export {AboutPage};