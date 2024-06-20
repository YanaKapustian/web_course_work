import React from 'react';
import './Header.css'; // підключаємо файл стилів
import logo from './logo.png'; 

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="/">Головна</a></li>
          <li><a href="/about">Про сайт</a></li>
          <li><a href="/gallery">Галерея</a></li>
          <li><a href="/contacts">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
