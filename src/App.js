import ClickCounter from "./component/ClickCounter";
// import HoverCounter from "./component/HoverCounter";
import Counter from "./component/Counter";
import Section from "./component/Section";
import React from "react";
import ThemeContext from "./contexts/themeContext";

class App extends React.Component {
  state = {
    theme: "dark",
  };
  render() {
    const { theme } = this.state;
    return (
      <div className="app">
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider value={{ theme: theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
