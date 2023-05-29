import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userAction} from "../../../redux";

const AboutOneCars = () => {
    const dispatch = useDispatch();
    const {car} = useSelector(state => state.cars);
    // const {user} = useSelector(state => state.users);

    useEffect(() => {
        // dispatch(userAction.getById(car.user))
    }, [dispatch()])
    console.log(car);
    return (
  <div>
   AboutOneCars
  </div>
);
};

export {AboutOneCars};