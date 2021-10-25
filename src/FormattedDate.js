import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let suffix = "";
  if (hours < 12) {
    suffix = "a.m.";
  } else {
    hours = hours - 12;
    suffix = "p.m.";
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {day} {hours}:{minutes} {suffix}
    </span>
  );
}
