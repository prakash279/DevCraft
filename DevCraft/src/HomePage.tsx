import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">DevCraft</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/website">Website</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pypi-library">PyPI Library</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="text-center mt-3">Welcome to DevCraft</h1>
    </div>
  );
}

export default HomePage;
