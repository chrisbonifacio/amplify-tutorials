import React from "react";

const ReactCounter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>React Counter</h1>
      <p>Count: {count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>{" "}
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default ReactCounter;
