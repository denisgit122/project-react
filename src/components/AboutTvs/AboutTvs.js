import {useEffect, useState} from "react";
import {tvService} from "../../services/TvService";
import {AboutTv} from "../AboutTv/AboutTv";

const AboutTvs = ({poId}) => {
const [data,setData]=useState([])

    useEffect   ( () => {
        tvService.getById(poId).then(({data})=>setData(data))
    },[])

    return (
  <div>
      {poId ?<AboutTv tv={data} key={data.id} />:<h1>er</h1>}
  </div>
);
};

export {AboutTvs};