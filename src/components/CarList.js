import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

const CarList = () => {
  const { cars, deleteCar } = useContext(GlobalContext);
  return (
    <div className="container">
      <div className="carList">
        {cars.map((car) => (
          <div className="carItem" key={car.id}>
            <div className="carBrand">
              <h3>{car.brand}</h3>
            </div>
            <div className="carModel">
              <h3>{car.model}</h3>
            </div>
            <div className="carYear">
              <h3>{car.year}</h3>
            </div>
            <div className="buttonsWrapper">
              <Link to={`/edit/${car.id}`}>
                <button className="btnEdit">
                  <BiEdit />
                </button>
              </Link>
              <button onClick={() => deleteCar(car.id)} className="btnDelete">
                <RiDeleteBin6Line />
              </button>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
