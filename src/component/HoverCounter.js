export default function HoverCounter({ count, incrementCount, theme }) {
  const style =
    theme === "dark" ? { backgroundColor: "red", color: "#fff" } : null;
  return (
    <div>
      <h1 onMouseOver={incrementCount} style={style}>
        Hovered {count} times
      </h1>
    </div>
  );
}
