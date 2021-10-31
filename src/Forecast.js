import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-2">
            <ForecastDay data={forecast[0]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[1]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[2]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[3]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[4]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2d49537948fa87956fadba800277c864";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
