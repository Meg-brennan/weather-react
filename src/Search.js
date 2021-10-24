import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-3">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn btn-dark w-100"
              value="Search"
              title="Search"
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-dark"
              title="Current location"
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
