import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">Mon</div>
          <div className="weather-icon">☁</div>
          <div className="forecast-temp-high">--</div>
          <div className="forecast-temp-low">--</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Tue</div>
          <div className="weather-icon">🌥</div>
          <div className="forecast-temp-high">--</div>
          <div className="forecast-temp-low">--</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Wed</div>
          <div className="weather-icon">🌦</div>
          <div className="forecast-temp-high">--</div>
          <div className="forecast-temp-low">--</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Thu</div>
          <div className="weather-icon">☁</div>
          <div className="forecast-temp-high">--</div>
          <div className="forecast-temp-low">--</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Fri</div>
          <div className="weather-icon">☀</div>
          <div className="forecast-temp-high">--</div>
          <div className="forecast-temp-low">--</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Sat</div>
          <div className="weather-icon">☁</div>
          <div className="forecast-temp-high">--</div>
          <div className="forecast-temp-low">--</div>
        </div>
      </div>
    </div>
  );
}
