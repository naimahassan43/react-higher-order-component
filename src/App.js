import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";
import Counter from "./component/Counter";

function App() {
  return (
    <div className="app">
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
