import { useDispatch, useSelector } from "react-redux";
import { buyLaptop } from "../redux/laptop/laptopActions";

const LaptopContainer = ({ language }) => {
  const laptops = useSelector(
    (state) => state.laptop.laptops
  );
  const dispatch = useDispatch();
  const isUzbek = language === "uz";
  const handleBuyLaptop = () => {
    if (laptops <= 0) {
      alert(
        isUzbek
          ? "Noutbuklar tugagan!"
          : "Laptops are sold out!"
      );
      return;
    }
    if (laptops === 1) {
      alert(
        isUzbek
          ? "Oxirgi noutbuk sotildi!"
          : "The last laptop was sold!"
      );
    }

    dispatch(buyLaptop());
  };
  return (
    <div className="bg-teal-50 p-6 rounded-2xl shadow-xl w-[320px] border border-teal-200">
      <h1 className="text-2xl font-bold text-center mb-5 text-teal-900">
        {isUzbek
          ? "Noutbuk Do'koni"
          : "Laptop Store"}
      </h1>

      <h2 className="text-xl text-center mb-6 text-teal-800">
        {isUzbek
          ? "Mavjud noutbuklar:"
          : "Available laptops:"}

        <span className="font-bold ml-2 text-teal-600">
          {laptops}
        </span>
      </h2>

      <button
        onClick={handleBuyLaptop}
        className={`w-full py-2 rounded-xl text-white font-semibold transition cursor-pointer duration-300 hover:text-black
        ${
          laptops <= 0
            ? "bg-gray-400"
            : "bg-cyan-500 hover:bg-cyan-800"
        }`}
      >
        {isUzbek
          ? "Noutbuk sotib olish"
          : "Buy Laptop"}
      </button>
    </div>
  );
};
export default LaptopContainer;