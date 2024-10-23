import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themecontext';
import './header.css'; // Aquí colocaremos los estilos del Header

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="logo">
        <h1>walttruche E-Commerce</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
