import React from "react";
import "./Current.css";

export default function Current(props) {
  return (
    <div className="Current">
      <div className="row display-flex">
        <div className="col-4 align-self-center">
          <div className="text-center">
            <div className="description text-capitalize">
              {props.description}
            </div>
            <img src={props.imgUrl} alt={props.description} />
          </div>
        </div>
        <div className="col-4 align-self-center text-center">
          <div className="current-temperature">
            <div>
              <strong>{props.temperature}</strong>
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
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {props.wind} mi/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
