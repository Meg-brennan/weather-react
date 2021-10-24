import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "",
      date: "4:30pm Sunday, October 24",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Search />
        <h1>{weatherData.city}</h1>
        <h2>Last updated: {weatherData.date}</h2>
        <Current
          description={weatherData.description}
          imgUrl={weatherData.iconUrl}
          temperature={Math.round(weatherData.temperature)}
          humidity={weatherData.humidity}
          wind={weatherData.wind}
        />
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "2d49537948fa87956fadba800277c864";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
