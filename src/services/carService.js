import {urlsCar} from "../configs/urls";
import axios from "axios";

const carService = {

    getAll: () => axios.get(urlsCar.cars.cars),
    getAllPriv: () => axios.get("/cars/car/filter"),

    getById : (id) => axios.get(urlsCar.cars.byId(id)),
    getByIdPriv : (id) => axios.get(urlsCar.cars.byIdPriv(id)),

}

export {
    carService
}