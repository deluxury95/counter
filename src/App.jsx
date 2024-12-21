import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0); 

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url('https://www.nultylighting.co.uk/wp-content/uploads/2022/10/dubai-nighttime-cityscape-lighting-illuminated-skyline-water-reflection-1920x1080.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="flex items-center space-x-4 bg-white bg-opacity-80 p-4 rounded shadow">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-2xl font-semibold">{counter}</span>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;