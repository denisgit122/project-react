import {axiosService} from "./axiosService";
import {urlsCar} from "../configs/urls";

const carService = {
    getAll: () => axiosService.get(urlsCar.cars.cars),
    getById : (id) => axiosService.get(urlsCar.cars.byId(id))
}
export {
    carService
}