import axios from "axios";
import {authService} from "../services";
import {createBrowserHistory} from "history";


const history = createBrowserHistory();

axios.interceptors.request.use((config) =>{
    if (authService.isAutnenticated()) {
        const accessToken = authService.getAccessToken();
        config.headers.Authorization = `${accessToken}`
    }
    return config
})

let isRefresh = false;
axios.interceptors.response.use((config)=>{
    return config
},
    async (error) => {

    const refreshToken = authService.getRefreshToken();
        if (error.response?.status === 401 && refreshToken && !isRefresh){
        isRefresh = true
        try {
            await authService.refresh(refreshToken);

        } catch (e) {
            authService.DeleteTokens()
            history.replace("/login?expSession=true")
        }
        isRefresh = false;
        return axios(error.config)
    }
        return Promise.reject(error)
    }
)


const cars= "/cars";
const auth = "/auth";
const user = "/user";

const urlsCar = {
    cars: {
        cars,
        byId: (id) => `${cars}/car/${id}`,
        // byIdPriv: (id) => `${cars}/${id}`,
        authCar: ()=> "/cars/car/filter"
    }
}
const urlsUser = {
        user,
        byId: (id) => `${user}/${id}`,
}
const urlsAuth = {
auth: {
    register: `${auth}/register`,
    login: `${auth}/login`,
    refresh:() =>`/auth/refresh`,

}
}
export {
    urlsCar,
    urlsAuth,
    history,
    urlsUser
}