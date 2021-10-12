import { createContext, useReducer } from "react";
import { v4 } from "uuid";
import appReducer, {
  ADD_CAR,
  DELETE_CAR,
  UPDATE_CAR,
  SEARCH_CAR,
  CLEAR_FILTER,
  SORT_BY,
} from "./AppReducer";

const initialState = {
  cars: [
    {
      id: "2f3bed16-e424-4317-a12d-84fb46116452",
      brand: "Fiat",
      model: "2/2B",
      year: "1910",
    },
    {
      id: "62d6422b-a8eb-4818-b30a-6d0c4a39deeb",
      brand: "Audi",
      model: "Type C",
      year: "1912",
    },
    {
      id: "2bf89031-e045-4d29-862f-77f265c5c226",
      brand: "Chevrolet",
      model: "Classic Six",
      year: "1910",
    },
    {
      id: "c4cca0fa-85fe-4696-84fb-099c6af46ea8",
      brand: "Essex",
      model: "Essex A",
      year: "1919",
    },
    {
      id: "1f91d25c-306e-4254-9de4-9ea2de234939",
      brand: "Hispano-Suiza",
      model: "H6",
      year: "1919",
    },
    {
      id: "18552d33-82e0-42aa-80fb-ddffc29f4dbd",
      brand: "Lancia",
      model: "Tipo 55 Corsa",
      year: "1908",
    },
    {
      id: "a7257866-64ea-4e9b-a28d-326858eb03b6",
      brand: "Morris",
      model: "Oxford",
      year: "1913",
    },
    {
      id: "4f18c091-ac72-46c8-9b55-448995604880",
      brand: "Opel",
      model: "Rennwagen",
      year: "1913",
    },
    {
      id: "af5013c4-7e45-43cb-a886-da7eb076dc26",
      brand: "Peugeot",
      model: "Type 126",
      year: "1910",
    },
    {
      id: "c265eb2c-dad8-4546-834d-9ddd6c731266",
      brand: "Rolls-Royce",
      model: "Silver Ghost",
      year: "1906",
    },
    {
      id: "2cbe3088-1e78-4d00-9dd8-3bac3649a5b0",
      brand: "Vauxhall",
      model: "Prince Henry",
      year: "1911",
    },
    {
      id: "1e1d92db-1cd8-497e-ba13-ad764a0a3d60",
      brand: "Woods",
      model: "Dual Power",
      year: "1917",
    },
  ],
  filtered: null,
  desc: false,
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

  const updateCar = (car) => dispatch({ type: UPDATE_CAR, payload: car });

  const searchCar = (id) => {
    dispatch({ type: SEARCH_CAR, payload: id });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const sortBy = (name, desc, value) => {
    dispatch({ type: SORT_BY, payload: { name, desc, value } });
  };

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
        sortBy,
        desc: state.desc,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
