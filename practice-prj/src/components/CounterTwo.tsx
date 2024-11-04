import { useContext } from "react";
import { MyContext } from "./../context/MyContext";

export const CounterTwo = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <h1>Counter Two Example Using Context API</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
