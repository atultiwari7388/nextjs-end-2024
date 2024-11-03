import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count : {count}</p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};
