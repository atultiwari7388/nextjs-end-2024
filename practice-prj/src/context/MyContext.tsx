import { createContext, FC, ReactNode, useState } from "react";

interface MyContextInter {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext<MyContextInter>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface MyproviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyproviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
