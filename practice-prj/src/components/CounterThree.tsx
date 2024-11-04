import { useReducer } from "react";

type Action =
  | {
      type: "INCREMENT";
    }
  | { type: "DECREMENT" };

type State = { count: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export const CounterThree = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Couunter Three Exmaple using Usereducer</h1>

      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
