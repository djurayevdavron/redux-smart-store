import {BUY_ONE_TICKET,BUY_THREE_TICKETS,} from "./ticketTypes";
  
export const buyOneTicket = () => {
  return {
    type: BUY_ONE_TICKET,
  };
};
export const buyThreeTickets = () => {
  return {
    type: BUY_THREE_TICKETS,
  };
};