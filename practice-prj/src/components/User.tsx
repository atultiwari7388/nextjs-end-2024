import { FC } from "react";

// type UserData = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

interface UserData {
  name: string;
  age: number;
  isStudent: boolean;
}

export const User: FC<UserData> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </div>
  );
};
