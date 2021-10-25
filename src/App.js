import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />

      <div className="Footer">
        <a
          href="https://github.com/Meg-brennan/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Megan Brennan
      </div>
    </div>
  );
}
