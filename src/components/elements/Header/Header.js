import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/" className="rmdb-title-link">
          <img
            src="./images/favicon.png"
            alt="Logo"
            className="rmdb-logo"
          />
          <h1 className="rmdb-title">FilmFolio</h1>
        </Link>
        <img
          src="./images/tmdb_logo.png"
          className="rmdb-tmdb-logo"
          alt="tmdb-logo"
        />
      </div>
    </div>
  );
};

export default Header;