import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // side-effects
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.length > 0 &&
      links.forEach((item) => {
        item.setAttribute("target", "_blank");
      });
    return () => {
      // clean up effects
    };
  }, []);
  // useEffect(() => {
  //   // Code running every state changes
  // })
  // useEffect(() => {
  //   // Code running only once
  //   // Empty dependencies
  // }, [])
  // useEffect(() => {
  //   // Code running when state count changes
  //   // Empty dependencies
  // }, [count])
  const { value, toggle } = useToggle();
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

function useToggle() {
  const [value, setValue] = useState(false);
  const toggle = () => setValue(!value);
  const arr = [1, 2, 3, 4, 5];
  // some
  const some1 = arr.some((item) => item > 3); // true
  const some2 = arr.some((item) => item > 6); // false
  // every
  const every1 = arr.every((item) => item > 3); // false
  const every2 = arr.every((item) => item > 0); // true
  return {
    value,
    toggle,
  };
}

export default App;
