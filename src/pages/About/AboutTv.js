import {useParams} from "react-router-dom";

import {AboutTvs} from "../../components";

const AboutTv = () => {
    const {id}=useParams()


    return (
  <div>
      <AboutTvs poId={id}/>
  </div>
);
};

export {AboutTv};