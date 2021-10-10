import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const CarForm = () => {
  const context = useContext(GlobalContext);
  console.log(context);

  const [car, setCar] = useState({
    brand: "Brand",
    model: "Model",
    year: "2021",
  });

  const handleOnChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            type="number"
            placeholder="Car year"
            name="year"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <input type="number" placeholder="Car year" name="year" />
        </div>
        <button>Add car</button>
      </form>
    </div>
  );
};

export default CarForm;
