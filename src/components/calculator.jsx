import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setDisplay(String(eval(display)));
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl p-4">
        <input
          type="text"
          readOnly
          value={display}
          className="w-full h-14 border rounded-lg px-4 text-right text-2xl mb-4"
        />

        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={clearDisplay}
            className="border rounded-xl text-lg md:text-xl p-3 col-span-2"
          >
            Clear
          </button>

          <button
            onClick={deleteLast}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            Del
          </button>

          <button
            onClick={() => handleClick("/")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            /
          </button>

          <button
            onClick={() => handleClick("7")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            7
          </button>

          <button
            onClick={() => handleClick("8")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            8
          </button>

          <button
            onClick={() => handleClick("9")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            9
          </button>

          <button
            onClick={() => handleClick("*")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            ×
          </button>

          <button
            onClick={() => handleClick("4")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            4
          </button>

          <button
            onClick={() => handleClick("5")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            5
          </button>

          <button
            onClick={() => handleClick("6")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            6
          </button>

          <button
            onClick={() => handleClick("-")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            -
          </button>

          <button
            onClick={() => handleClick("1")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            1
          </button>

          <button
            onClick={() => handleClick("2")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            2
          </button>

          <button
            onClick={() => handleClick("3")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            3
          </button>

          <button
            onClick={() => handleClick("+")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            +
          </button>

          <button
            onClick={() => handleClick("0")}
            className="border rounded-xl text-lg md:text-xl p-3 col-span-2"
          >
            0
          </button>

          <button
            onClick={() => handleClick(".")}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            .
          </button>

          <button
            onClick={calculate}
            className="border rounded-xl text-lg md:text-xl p-3"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;