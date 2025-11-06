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
    <div className="p-3 sm:p-5 border-2 border-black rounded-lg inline-block my-6 sm:my-8">
      <div className="flex items-center justify-between gap-6 sm:gap-10">
        <button
          className="border border-black rounded-full cursor-pointer p-1 sm:p-2"
          onClick={() => handleChangeCount(count, "decrement")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>

        <span className="text-lg sm:text-xl w-6 text-center">{count}</span>

        <button
          className="border border-black rounded-full cursor-pointer p-1 sm:p-2"
          onClick={() => handleChangeCount(count, "increment")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
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
