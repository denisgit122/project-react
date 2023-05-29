import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../redux";

import {Car} from "../Car/Car";
import css from '../Car/Car.module.css'

const Cars = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars)

    useEffect ( () => {
        dispatch(carAction.getAll());
    }, [dispatch]);

    return (
  <div className={css.boxCar}>
      {cars.map(car => <Car key={car._id} car={car}/>)}

  </div>
);
};

export {Cars};