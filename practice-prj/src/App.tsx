import { Button } from "./components/Button";
import { User } from "./components/User";

const App = () => {
  return (
    <div>
      <User name="Darling" age={20} isStudent={true} />
      <Button
        label="Click"
        onClick={() => console.log("clicked")}
        disabled={false}
      />
    </div>
  );
};
export default App;
