import React from "react";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.data.city}</h1>
      <h2>
        Last Updated: <FormattedDate date={props.data.date} />
      </h2>

      <div className="row display-flex">
        <div className="col-4 align-self-center">
          <div className="text-center">
            <div className="description text-capitalize">
              {props.data.description}
            </div>
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              size={60}
            />
          </div>
        </div>
        <div className="col-4 align-self-center text-center">
          <CurrentTemperature fahrenheit={props.data.temperature} />
        </div>
        <div className="col-4 align-self-center">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
