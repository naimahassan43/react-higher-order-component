import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/themeContext";

export default function Content() {
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {({ theme, switchTheme }) => (
                <HoverCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                  switchTheme={switchTheme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
}
