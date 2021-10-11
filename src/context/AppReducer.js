export const ADD_CAR = "ADD_CAR";
export const DELETE_CAR = "DELETE_CAR";
export const UPDATE_CAR = "UPDATE_CAR";
export const SEARCH_CAR = "SEARCH_CAR";
export const CLEAR_FILTER = "CLEAR_FILTER";

export default function appReducer(state, { type, payload }) {
  switch (type) {
    case ADD_CAR:
      return { cars: [...state.cars, payload], filtered: null };

    case DELETE_CAR:
      return {
        cars: state.cars.filter((car) => car.id !== payload),
      };

    case SEARCH_CAR:
      return {
        ...state,
        filtered: state.cars.filter((car) =>
          car.brand.toLowerCase().includes(payload.toLowerCase())
        ),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
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
        filtered: null,
      };

    default:
      return state;
  }
}
