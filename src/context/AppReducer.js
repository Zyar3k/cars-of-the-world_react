export const ADD_CAR = "ADD_CAR";
export const DELETE_CAR = "DELETE_CAR";
export const UPDATE_CAR = "UPDATE_CAR";

export default function appReducer(state, { type, payload }) {
  switch (type) {
    case ADD_CAR:
      return { cars: [...state.cars, payload] };

    case DELETE_CAR:
      return {
        cars: state.cars.filter((car) => car.id !== payload),
      };

    case UPDATE_CAR:
      const updatedCar = payload;

      const updatedCars = state.cars.map((car) => {
        if (car.id === updatedCar.id) {
          car.brand = updatedCar.brand;
          car.model = updatedCar.model;
          car.year = updatedCar.year;
        }
        return car;
      });
      return {
        cars: updatedCars,
      };

    default:
      return state;
  }
}
