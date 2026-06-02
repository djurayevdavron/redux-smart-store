import { useState } from "react";
import TicketContainer from "./components/TicketContainer";
import PhoneContainer from "./components/PhoneContainer";
import LaptopContainer from "./components/LaptopContainer";

function App() {
  const [showTasks, setShowTasks] = useState(false);
  const [language, setLanguage] = useState("uz");

  const isUzbek = language === "uz";
  return (
    <div className="min-h-screen bg-teal-100 flex flex-col items-center justify-center gap-10 p-10 ">
      <h1 className="text-4xl font-semibold text-teal-900 tracking-wider float-animation drop-shadow-lg">
        {isUzbek
          ? "Smart Savdo Tizimi"
          : "Smart Store System"}
      </h1>
      <div className="flex gap-4">
        <button
          onClick={() => setShowTasks(!showTasks)}
          className="bg-teal-600 hover:bg-teal-700 text-white hover:text-black duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg transition cursor-pointer"
        >
          {showTasks
            ? isUzbek
              ? "Vazifalarni yopish"
              : "Close Tasks"
            : isUzbek
            ? "Vazifa shartlari"
            : "Task Requirements"}
        </button>

        <button
          onClick={() =>
            setLanguage(isUzbek ? "en" : "uz")
          }
          className="bg-cyan-600 hover:bg-cyan-900 text-white hover:text-black duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg transition cursor-pointer"
        >
          {isUzbek ? "Til" : "Language"}
        </button>
      </div>

      {showTasks && (
        <div className="bg-white w-[800px] p-6 rounded-2xl shadow-xl border border-teal-200">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">
            {isUzbek
              ? "Vazifa Shartlari"
              : "Task Requirements"}
          </h2>

          <div className="space-y-8 text-gray-700">

            {/* Vazifa 3 */}

            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-3">
                {isUzbek
                  ? "Vazifa 3 — Kino Chiptalari (Redux)"
                  : "Task 3 — Movie Tickets (Redux)"}
              </h3>

              <p className="mb-2">
                {isUzbek
                  ? "Kino uchun chiptalar tizimini Redux yordamida yarating."
                  : "Create a movie ticket system using Redux."}
              </p>

              <p className="mb-2 font-medium">
                {isUzbek
                  ? "Boshlang'ich holat:"
                  : "Initial State:"}
              </p>

              <div className="bg-teal-50 p-3 rounded-lg mb-4 text-teal-800">
                {"{ availableTickets: 50 }"}
              </div>

              <p className="mb-2 font-medium">
                {isUzbek
                  ? "Talablar:"
                  : "Requirements:"}
              </p>

              <ul className="list-disc ml-6 space-y-1">
                <li>
                  {isUzbek
                    ? "TicketContainer komponentini yarating."
                    : "Create TicketContainer component."}
                </li>

                <li>
                  {isUzbek
                    ? "Ekranda mavjud chiptalar sonini chiqaring."
                    : "Display available tickets on the screen."}
                </li>

                <li>
                  {isUzbek
                    ? '"1 ta chipta sotib olish" tugmasini yarating.'
                    : 'Create "Buy 1 Ticket" button.'}
                </li>

                <li>
                  {isUzbek
                    ? '"3 ta chipta sotib olish" tugmasini yarating.'
                    : 'Create "Buy 3 Tickets" button.'}
                </li>

                <li>
                  {isUzbek
                    ? "Har bir tugma bosilganda chiptalar soni kamayishi kerak."
                    : "Ticket count should decrease when buttons are clicked."}
                </li>
              </ul>
            </div>

            {/* Vazifa 4 */}

            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-3">
                {isUzbek
                  ? "Vazifa 4 — Telefon va Noutbuk Do'koni (Redux)"
                  : "Task 4 — Phone and Laptop Store (Redux)"}
              </h3>

              <p className="mb-2">
                {isUzbek
                  ? "Redux va combineReducers yordamida telefon va noutbuk do'koni loyihasini yarating."
                  : "Create a phone and laptop store project using Redux and combineReducers."}
              </p>

              <p className="mb-2 font-medium">
                {isUzbek
                  ? "Boshlang'ich holatlar:"
                  : "Initial States:"}
              </p>

              <div className="bg-teal-50 p-3 rounded-lg mb-4 text-teal-800">
                <p>Phone State: {"{ phones: 30 }"}</p>
                <p>Laptop State: {"{ laptops: 10 }"}</p>
              </div>

              <p className="mb-2 font-medium">
                {isUzbek
                  ? "Talablar:"
                  : "Requirements:"}
              </p>

              <ul className="list-disc ml-6 space-y-1">
                <li>
                  {isUzbek
                    ? "phoneReducer yarating."
                    : "Create phoneReducer."}
                </li>

                <li>
                  {isUzbek
                    ? "laptopReducer yarating."
                    : "Create laptopReducer."}
                </li>

                <li>
                  {isUzbek
                    ? "combineReducers yordamida ikkala reducerni birlashtiring."
                    : "Combine both reducers using combineReducers."}
                </li>

                <li>
                  {isUzbek
                    ? "PhoneContainer komponentini yarating."
                    : "Create PhoneContainer component."}
                </li>

                <li>
                  {isUzbek
                    ? "LaptopContainer komponentini yarating."
                    : "Create LaptopContainer component."}
                </li>

                <li>
                  {isUzbek
                    ? "Har bir mahsulot sonini ekranga chiqaring."
                    : "Display quantity of each product."}
                </li>

                <li>
                  {isUzbek
                    ? '"Buy Phone" tugmasini yarating.'
                    : 'Create "Buy Phone" button.'}
                </li>

                <li>
                  {isUzbek
                    ? '"Buy Laptop" tugmasini yarating.'
                    : 'Create "Buy Laptop" button.'}
                </li>

                <li>
                  {isUzbek
                    ? "Tugma bosilganda mos mahsulot soni 1 taga kamayishi kerak."
                    : "Product quantity should decrease by 1 when button is clicked."}
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}
      <TicketContainer language={language} />

      <div className="flex gap-6 flex-wrap justify-center">
        <PhoneContainer language={language} />
        <LaptopContainer language={language} />
      </div>
    </div>
  );
}
export default App;