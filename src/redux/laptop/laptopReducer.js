import { BUY_LAPTOP } from "./laptopTypes";

const initialState = {
  laptops: 10,
};
const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOP:
      return {
        ...state,
        laptops: state.laptops - 1,
      };

    default:
      return state;
  }
};
export default laptopReducer;