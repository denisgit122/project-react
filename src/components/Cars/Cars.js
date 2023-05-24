import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carAction} from "../../redux";
import {carService} from "../../services";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        // dispatch(carAction.getAll())
        carService.getAll().then(({data})=> console.log(data))
    },[dispatch])
    // console.log(cars);
    return (
  <div>


  </div>
);
};

export {Cars};