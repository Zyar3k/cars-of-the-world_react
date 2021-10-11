import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useHistory, useParams } from "react-router";

const CarForm = () => {
  const { addCar, cars, updateCar } = useContext(GlobalContext);

  const history = useHistory();
  const params = useParams();

  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
  });

  const handleOnChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!car.id) {
      addCar(car);
    } else {
      updateCar(car);
    }
    history.push("/");
  };

  useEffect(() => {
    const carFound = cars.find((car) => car.id === params.id);

    if (carFound) {
      setCar({
        brand: carFound.brand,
        model: carFound.model,
        year: carFound.year,
        id: carFound.id,
      });
    }
  }, [params.id, cars]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>{car.id ? "Edit car" : "Add car"}</h2>
        <div>
          <input
            type="text"
            placeholder="Car brand"
            name="brand"
            onChange={handleOnChange}
            value={car.brand}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Car model"
            name="model"
            onChange={handleOnChange}
            value={car.model}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Car year"
            name="year"
            onChange={handleOnChange}
            value={car.year}
          />
        </div>
        <button>{car.id ? "Edit" : "Add car"}</button>
      </form>
    </div>
  );
};

export default CarForm;
