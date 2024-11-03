import { AdminInfoComponent } from "./components/AdminInfoComp";
import { Button } from "./components/Button";
import { User } from "./components/User";
import { UserInfo } from "./components/UserInfo";
import { AdminInfo, Info } from "./types/info_types";
import { Counter } from "./components/Counter";

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
      <User name="Darling" age={20} isStudent={true} />
      <Button
        label="Click"
        onClick={() => console.log("clicked")}
        disabled={false}
      />

      <UserInfo user={userData} />
      <AdminInfoComponent admin={adminData} />
      <Counter />
    </div>
  );
};
export default App;
