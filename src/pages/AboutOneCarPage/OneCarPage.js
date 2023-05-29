import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carAction, userAction} from "../../redux";
import {userService} from "../../services/userService";

const OneCarPage = () => {
    const {carId} = useParams();
    const dispatch = useDispatch();
    const {car} = useSelector(state => state.cars);
    const {user} = useSelector(state => state.users);

    useEffect( () => {
        dispatch(carAction.getById(carId));
    },[dispatch]);
    console.log(car);
    return (
  <div>
   OneCarPage
  </div>
);
};

export {OneCarPage};