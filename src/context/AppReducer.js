export const ADD_CAR = "ADD_CAR";
export const DELETE_CAR = "DELETE_CAR";

export default function appReducer(state, { type, payload }) {
  console.log(state, { type, payload });

  switch (type) {
    case ADD_CAR:
      console.log(type, payload);
      return { cars: [...state.cars, payload] };

    case DELETE_CAR:
      return { cars: [] };

    default:
      return state;
  }
}
