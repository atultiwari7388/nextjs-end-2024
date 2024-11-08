import { AdminInfoComponent } from "./components/AdminInfoComp";
import { Button } from "./components/Button";
import { User } from "./components/User";
import { UserInfo } from "./components/UserInfo";
import { AdminInfo, Info } from "./types/info_types";
import { Counter } from "./components/Counter";
import { UserProfile } from "./components/UserProfile";
import { TodoList } from "./components/TodoList";
import { FormComp } from "./components/FormComp";
import { CounterTwo } from "./components/CounterTwo";
import { CounterThree } from "./components/CounterThree";
import { Hero } from "./components/Hero";
import HookForm from "./components/HookForm";

const App = () => {
  const userData: Info = {
    id: 1,
    name: "user 1",
    email: "userOne@gmail.com",
  };

  const adminData: AdminInfo = {
    id: 2,
    name: "user 1",
    email: "userOne@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <Hero />
      <User name="Darling" age={20} isStudent={true} />
      <Button
        label="Click"
        onClick={() => console.log("clicked")}
        disabled={false}
      />

      <UserInfo user={userData} />
      <AdminInfoComponent admin={adminData} />
      <Counter />
      <UserProfile />
      <TodoList />
      <FormComp />
      <CounterTwo />
      <CounterThree />
      <HookForm />
    </div>
  );
};
export default App;
