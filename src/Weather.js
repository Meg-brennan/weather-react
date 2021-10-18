import React from "react";
import "./Weather.css";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    date: "Sunday 6:00pm",
    description: "Partly Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 19,
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <Search />
      <h1>{weatherData.city}</h1>
      <h2>Last updated: {weatherData.date}</h2>
      <Current
        description={weatherData.description}
        imgUrl={weatherData.imgUrl}
        temperature={weatherData.temperature}
        humidity={weatherData.humidity}
        wind={weatherData.wind}
      />
      <Forecast />
    </div>
  );
}
