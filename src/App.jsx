import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./Components"
import { useState } from "react"
export default function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  console.log(options)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const onCurrencyChange = (event) => {
    const { value } = event.target;
    setAmount(value);
  }

  const func = (event) => {
    const { value } = event.target;
    setFrom(value);
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1205581593/photo/businessman-hugs-indian-rupee-money-bags-granting-financing-business-project-or-education.webp?b=1&s=170667a&w=0&k=20&c=IVAz97wHhXxaqeL82VqPigeRIFlkMJaA_vYQ6GO1MEE=')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label={from}
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(newCurr) => setFrom(newCurr)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label={to}
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(newCurr) => setTo(newCurr)}
                selectCurrency={from}

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}