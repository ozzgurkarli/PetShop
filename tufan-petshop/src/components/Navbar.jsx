import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        Tufan PetShop
      </NavLink>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/kedi">Kedi</NavLink></li>
          <li><NavLink to="/kopek">Köpek</NavLink></li>
          <li><NavLink to="/kus">Kuş</NavLink></li>
          <li><NavLink to="/balik">Balık</NavLink></li>
          <li><NavLink to="/iletisim">Bize Ulaşın</NavLink></li>
        </ul>
      </nav>
      <div className="nav-actions">
        <button className="cart-button">Sepetim</button>
      </div>
    </header>
  );
}

export default Navbar;