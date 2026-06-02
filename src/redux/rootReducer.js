import { combineReducers } from "redux";
import laptopReducer from "./laptop/laptopReducer";
import phoneReducer from "./phone/phoneReducer";
import ticketReducer from "./tickets/ticketReducer";

const rootReducer = combineReducers({
  laptop: laptopReducer,
  phone: phoneReducer,
  ticket: ticketReducer,
});
export default rootReducer;