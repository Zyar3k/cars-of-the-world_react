import { createContext, useReducer } from "react";
import { v4 } from "uuid";
import appReducer, { ADD_CAR, DELETE_CAR } from "./AppReducer";

const initialState = {
  cars: [
    {
      id: 18,
      brand: "Fiat",
      model: "2/2B",
      year: "1910",
    },
    {
      id: 22,
      brand: "Audi",
      model: "Type C",
      year: "1912",
    },
    {
      id: 23,
      brand: "Chevrolet",
      model: "Classic Six",
      year: "1910",
    },
  ],
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

  return (
    <GlobalContext.Provider value={{ ...state, addCar, deleteCar }}>
      {children}
    </GlobalContext.Provider>
  );
};
