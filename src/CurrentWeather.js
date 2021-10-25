import React from "react";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        </div>
        <div className="col-4 align-self-center text-center">
          <div className="current-temperature">
            <div>
              <strong>{props.data.temperature}</strong>
              <span className="units">
                <a href="/" className="active">
                  F
                </a>{" "}
                | <a href="/">C</a>
              </span>
            </div>
          </div>
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
