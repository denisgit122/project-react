import {Car} from "../Car/Car";
import {useEffect, useState} from "react";
import {FaRegHeart} from "react-icons/fa";
import css from "../Car/Car.module.css";

const FavoriteCar = () => {
    // const [cars, setCar] = useState('');


        const cars = JSON.parse(localStorage.getItem("cart"));

    return (
  <div>

      {Array.isArray(cars)? cars.map(car=><Car key={car._id} car={car}/>): <div>don hav</div>}

  </div>
);
};

export {FavoriteCar};