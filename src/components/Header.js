import React from "react";
import "./Header.css"; // підключаємо файл стилів
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="logo" />
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/about">Про сайт</Link>
          </li>
          <li>
            <Link to="/gallery">Галерея</Link>
          </li>
          <li>
            <Link to="/contacts">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
