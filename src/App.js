import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";
import Counter from "./component/Counter";

function App() {
  return (
    <div className="app">
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
