import React from "react";
import { counterStore } from "../store/counter-store";

const Counter = () => {
  const { count, increment, decrement } = counterStore((state) => state);
  return (
    <div className="p-5 border border-slate-200 rounded-xl inline-flex items-center gap-x-5">
      <button onClick={increment}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button onClick={decrement}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
