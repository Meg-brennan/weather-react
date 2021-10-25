import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function calculateCelsius() {
    return ((props.fahrenheit + -32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="CurrentTemperature">
        <div>
          <strong>{Math.round(props.fahrenheit)}</strong>
          <span className="units">
            <a href="/" className="active">
              F
            </a>{" "}
            |{" "}
            <a href="/" onClick={showCelsius}>
              C
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature">
        <div>
          <strong>{Math.round(calculateCelsius())}</strong>
          <span className="units">
            <a href="/" onClick={showFahrenheit}>
              F
            </a>{" "}
            |{" "}
            <a href="/" className="active">
              C
            </a>
          </span>
        </div>
      </div>
    );
  }
}
