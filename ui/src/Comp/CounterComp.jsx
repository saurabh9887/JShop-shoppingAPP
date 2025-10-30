import React, { useState } from "react";

const CounterComp = ({ count, setCount }) => {
  const handleChangeCount = (count, val) => {
    if (val === "increment") {
      setCount(count + 1);
    } else {
      if (count < 1) return;
      setCount(count - 1);
    }
  };

  return (
    <div className="p-5 border-2 border-black rounded-lg inline-block my-8">
      <div className="flex gap-10">
        <button
          className="border border-black rounded-full cursor-pointer"
          onClick={() => handleChangeCount(count, "decrement")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <span className="text-xl w-3">{count}</span>
        <button
          className="border border-black rounded-full cursor-pointer"
          onClick={() => handleChangeCount(count, "increment")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CounterComp;
