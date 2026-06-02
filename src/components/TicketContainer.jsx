import { useDispatch, useSelector } from "react-redux";
import { buyOneTicket,buyThreeTickets,} from "../redux/tickets/ticketActions";

const TicketContainer = ({ language }) => {
  const tickets = useSelector(
    (state) => state.ticket.availableTickets
  );

  const dispatch = useDispatch();

  const isUzbek = language === "uz";

  const handleBuyOne = () => {
    if (tickets <= 0) {
      alert(
        isUzbek
          ? "Chiptalar tugagan!"
          : "Tickets are sold out!"
      );
      return;
    }
    if (tickets === 1) {
      alert(
        isUzbek
          ? "Oxirgi chipta sotildi!"
          : "The last ticket was sold!"
      );
    }
    dispatch(buyOneTicket());
  };
  const handleBuyThree = () => {
    if (tickets < 3) {
      alert(
        isUzbek
          ? "3 ta chipta uchun yetarli chipta mavjud emas!"
          : "Not enough tickets for 3 purchases!"
      );
      return;
    }
    if (tickets === 3) {
      alert(
        isUzbek
          ? "Oxirgi 3 ta chipta sotildi!"
          : "The last 3 tickets were sold!"
      );
    }
    dispatch(buyThreeTickets());
  };
  return (
    <div className="bg-teal-50 p-6 rounded-2xl shadow-xl w-[370px] border border-teal-200">
      <h1 className="text-2xl font-bold text-center mb-5 text-teal-900">
        {isUzbek
          ? "Kino Chiptalari"
          : "Movie Tickets"}
      </h1>

      <h2 className="text-xl text-center mb-6 text-teal-800">
        {isUzbek
          ? "Mavjud chiptalar:"
          : "Available tickets:"}

        <span className="font-bold ml-2 text-teal-600">
          {tickets}
        </span>
      </h2>

      <div className="flex gap-3">
        <button
          onClick={handleBuyOne}
          className={`flex-1 py-2 rounded-xl text-white font-semibold transition cursor-pointer duration-300 hover:text-black
          ${
            tickets <= 0
              ? "bg-gray-400"
              : "bg-teal-500 hover:bg-teal-600"
          }`}
        >
          {isUzbek
            ? "1 ta chipta olish"
            : "Buy 1 Ticket"}
        </button>

        <button
          onClick={handleBuyThree}
          className={`flex-1 py-2 rounded-xl text-white font-semibold transition cursor-pointer duration-300 hover:text-black
          ${
            tickets < 3
              ? "bg-gray-400"
              : "bg-cyan-500 hover:bg-cyan-600"
          }`}
        >
          {isUzbek
            ? "3 ta chipta olish"
            : "Buy 3 Tickets"}
        </button>
      </div>
    </div>
  );
};
export default TicketContainer;