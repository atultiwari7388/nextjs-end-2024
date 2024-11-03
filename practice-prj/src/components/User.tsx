type UserData = {
  name: string;
  age: number;
  isStudent: boolean;
};

export const User = ({ name, age, isStudent }: UserData) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </div>
  );
};
