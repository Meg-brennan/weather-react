import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">Mon</div>
          <div className="weather-icon">☁</div>
          <div className="forecast-temp-high">65</div>
          <div className="forecast-temp-low">51</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Tue</div>
          <div className="weather-icon">🌥</div>
          <div className="forecast-temp-high">68</div>
          <div className="forecast-temp-low">49</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Wed</div>
          <div className="weather-icon">🌦</div>
          <div className="forecast-temp-high">69</div>
          <div className="forecast-temp-low">54</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Thu</div>
          <div className="weather-icon">☁</div>
          <div className="forecast-temp-high">66</div>
          <div className="forecast-temp-low">52</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Fri</div>
          <div className="weather-icon">☀</div>
          <div className="forecast-temp-high">72</div>
          <div className="forecast-temp-low">53</div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Sat</div>
          <div className="weather-icon">☁</div>
          <div className="forecast-temp-high">68</div>
          <div className="forecast-temp-low">50</div>
        </div>
      </div>
    </div>
  );
}
