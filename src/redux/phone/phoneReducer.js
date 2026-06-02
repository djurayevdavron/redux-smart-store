import { BUY_PHONE } from "./phoneTypes";

const initialState = {
  phones: 30,
};
const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };
    default:
      return state;
  }
};
export default phoneReducer;