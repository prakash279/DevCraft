import React, { useState } from "react";
import { Link } from "react-router-dom";

const PyPiLibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Perform search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            DevCraft
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/website" className="nav-link">
                  Website
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pypi-library" className="nav-link">
                  PyPI Library
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter package name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "60%" }}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default PyPiLibraryPage;
