import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const CarList = () => {
  const { cars } = useContext(GlobalContext);
  return (
    <div>
      {cars.map((car) => (
        <div>
          <span>{car.brand} -</span>
          <span>{car.model}</span>
        </div>
      ))}
    </div>
  );
};

export default CarList;
