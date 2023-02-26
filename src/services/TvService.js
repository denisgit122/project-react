import {apiServices} from "./apiServices";
import {urls} from "../configs/urls";

const tvService={
    getAll:(page=1)=>apiServices.get(urls.tv.tv,{params:{page:page}}),
    searchTv:(searchKey,pages=1)=>apiServices.get(urls.tv.searchTv,
        {params:
                {query:searchKey, pages:pages}}),
    getById:(tv_id)=>apiServices.get(`/tv/${tv_id}`),

}
export {tvService}