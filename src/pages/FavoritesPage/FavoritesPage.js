import {FavoriteCar} from "../../components/FavoriteCar/FavoriteCar";

const FavoritesPage = () => {
    const car = localStorage.getItem("favorite")
    console.log(car);
    return (
  <div>
  <FavoriteCar/>
  </div>
);
};

export {FavoritesPage};