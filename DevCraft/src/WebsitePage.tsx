import React, { useState } from "react";
import { Link } from "react-router-dom";

const WebsitePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      // Perform search logic here
      console.log("Search term:", searchTerm);

      // Call searchWebsite function with the entered website URL
      await searchWebsite(searchTerm);
    } catch (error) {
      console.error("Error performing search:", error);
      // Handle errors
    }
  };

  const searchWebsite = async (websiteUrl: string) => {
    try {
      const response = await fetch("http://localhost:8000/search/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ website_url: websiteUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log("Data received from backend:", data);
      // Handle the received data as needed
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors
    }
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
            placeholder="Enter website URL"
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

export default WebsitePage;
