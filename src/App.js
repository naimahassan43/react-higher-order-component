import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";
import User from "./component/User";

function App() {
  return (
    <div className="app">
      <HoverCounter />
      <ClickCounter />
      <User render={(isLoggedIn) => (isLoggedIn ? "Naima Hassan" : "Guest")} />
    </div>
  );
}

export default App;
