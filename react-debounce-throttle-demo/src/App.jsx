import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [debounceValue, setDebounceValue] = useState("");
  const [throttleValue, setThrottleValue] = useState("");

  const [debounceCount, setDebounceCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);

  const debounceTimer = useRef(null);
  const throttleTimer = useRef(false);

  // Debounce logic
  const handleDebounce = (value) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setDebounceValue(value);
      setDebounceCount((c) => c + 1);
    }, 500);
  };

  // Throttle logic
  const handleThrottle = (value) => {
    if (throttleTimer.current) return;

    throttleTimer.current = true;
    setThrottleValue(value);
    setThrottleCount((c) => c + 1);

    setTimeout(() => {
      throttleTimer.current = false;
    }, 500);
  };

  return (
    <div className="app">
      <h1>Debounce vs Throttle Visualizer</h1>

      <div className="box">
        <h2>Debounce</h2>
        <input
          placeholder="Type here..."
          onChange={(e) => handleDebounce(e.target.value)}
        />
        <p>API Calls: {debounceCount}</p>
        <p>Final Value: {debounceValue}</p>
      </div>

      <div className="box">
        <h2>Throttle</h2>
        <input
          placeholder="Type here..."
          onChange={(e) => handleThrottle(e.target.value)}
        />
        <p>API Calls: {throttleCount}</p>
        <p>Last Value: {throttleValue}</p>
      </div>
    </div>
  );
}

export default App;
