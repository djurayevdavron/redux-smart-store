import { useDispatch, useSelector } from "react-redux";
import { buyPhone } from "../redux/phone/phoneActions";

const PhoneContainer = ({ language }) => {
  const phones = useSelector(
    (state) => state.phone.phones
  );

  const dispatch = useDispatch();
  const isUzbek = language === "uz";
  const handleBuyPhone = () => {
    if (phones <= 0) {
      alert(
        isUzbek
          ? "Telefonlar tugagan!"
          : "Phones are sold out!"
      );
      return;
    }
    if (phones === 1) {
      alert(
        isUzbek
          ? "Oxirgi telefon sotildi!"
          : "The last phone was sold!"
      );
    }
    dispatch(buyPhone());
  };
  return (
    <div className="bg-teal-50 p-6 rounded-2xl shadow-xl w-[320px] border border-teal-200">
      <h1 className="text-2xl font-bold text-center mb-5 text-teal-900">
        {isUzbek
          ? "Telefon Do'koni"
          : "Phone Store"}
      </h1>

      <h2 className="text-xl text-center mb-6 text-teal-800">
        {isUzbek
          ? "Mavjud telefonlar:"
          : "Available phones:"}

        <span className="font-bold ml-2 text-teal-600">
          {phones}
        </span>
      </h2>

      <button
        onClick={handleBuyPhone}
        className={`w-full py-2 rounded-xl text-white font-semibold transition cursor-pointer duration-300 hover:text-black
        ${
          phones <= 0
            ? "bg-gray-400"
            : "bg-teal-500 hover:bg-teal-600"
        }`}
      >
        {isUzbek
          ? "Telefon sotib olish"
          : "Buy Phone"}
      </button>
    </div>
  );
};
export default PhoneContainer;