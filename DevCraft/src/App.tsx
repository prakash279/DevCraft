import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import WebsitePage from "./WebsitePage";
import PyPiLibraryPage from "./PyPiLibraryPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/website" element={<WebsitePage />} />
        <Route path="/pypi-library" element={<PyPiLibraryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
