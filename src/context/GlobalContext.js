import { createContext } from "react";

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
  return (
    <GlobalContext.Provider value={initialState}>
      {children}
    </GlobalContext.Provider>
  );
};
