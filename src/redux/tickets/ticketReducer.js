import {BUY_ONE_TICKET,BUY_THREE_TICKETS,} from "./ticketTypes";

const initialState = {
  availableTickets: 50,
};
const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ONE_TICKET:
      return {
        ...state,
        availableTickets: state.availableTickets - 1,
      };

    case BUY_THREE_TICKETS:
      return {
        ...state,
        availableTickets: state.availableTickets - 3,
      };
    default:
      return state;
  }
};
export default ticketReducer;