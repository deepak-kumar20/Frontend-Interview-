import { useEffect } from "react";
import { useState } from "react";
import "./index.css";
const CountTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(0);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, timeLeft]);
  const handleStart = () => {
    const seconds = parseInt(inputMinutes) * 60;
    setTimeLeft(seconds);
    setIsRunning(true);
  };
  return (
    <div className="container">
      <h1>Countdown Timer</h1>
      <div>
        <input
          type="number"
          placeholder="Enter value in minutes"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
        />
      </div>
      <div>
        <h2>
          {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
          {String(timeLeft % 60).padStart(2, "0")}
        </h2>
      </div>
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default CountTimer;
