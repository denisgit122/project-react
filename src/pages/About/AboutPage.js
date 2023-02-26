import {useParams} from "react-router-dom";

import {AboutMovies} from "../../components";

const AboutPage = () => {
    const {id}=useParams()
return (
  <div>
      <AboutMovies postId={id}/>
   </div>
);
};

export {AboutPage};