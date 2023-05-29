import {urlsCar, urlsUser} from "../configs/urls";
import axios from "axios";

const userService = {

    getAll: () => axios.get(urlsUser.user),

    getById : (id) => axios.get(urlsUser.byId(id)),

}

export {
    userService
}