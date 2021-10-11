import { createContext, useReducer } from "react";
import { v4 } from "uuid";
import appReducer, {
  ADD_CAR,
  DELETE_CAR,
  UPDATE_CAR,
  SEARCH_CAR,
  CLEAR_FILTER,
} from "./AppReducer";

const initialState = {
  cars: [
    {
      id: "1f41f47b-0982-4061-a517-76d293f974ee",
      brand: "Fiat",
      model: "2/2B",
      year: "1910",
    },
    {
      id: "aace6239-22ca-4ea2-a3b6-5a5ffc591e70",
      brand: "Audi",
      model: "Type C",
      year: "1912",
    },
    {
      id: "1bb75e1c-49a9-4d6b-ba25-f9ef6fc32f97",
      brand: "Chevrolet",
      model: "Classic Six",
      year: "1910",
    },
  ],
  filtered: null,
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addCar = (car) => {
    dispatch({ type: ADD_CAR, payload: { ...car, id: v4() } });
  };

  const deleteCar = (id) => {
    dispatch({ type: DELETE_CAR, payload: id });
  };

  const searchCar = (id) => {
    dispatch({ type: SEARCH_CAR, payload: id });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const updateCar = (car) => dispatch({ type: UPDATE_CAR, payload: car });

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        addCar,
        cars: state.cars,
        deleteCar,
        updateCar,
        searchCar,
        filtered: state.filtered,
        clearFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
