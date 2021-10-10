import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useHistory } from "react-router";

const CarForm = () => {
  const { addCar } = useContext(GlobalContext);
  const history = useHistory();

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
    addCar(car);
    history.push("/");
    console.log(car);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Add car</h2>
        <div>
          <input
            type="text"
            placeholder="Car brand"
            name="brand"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Car model"
            name="model"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Car year"
            name="year"
            onChange={handleOnChange}
          />
        </div>
        <button>Add car</button>
      </form>
    </div>
  );
};

export default CarForm;
