import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CardContext';
import './Navbar.css';

function Navbar() {
  const { cartItemCount, cartTotal } = useContext(CartContext);

  const categories = [
    { name: 'Kedi', path: 'kedi' },
    { name: 'Köpek', path: 'kopek' },
    { name: 'Kuş', path: 'kus' },
    { name: 'Balık', path: 'balik' }
  ];

  const subCategories = [
    { name: 'Mama', path: 'mama' },
    { name: 'Aksesuar', path: 'aksesuar' },
    { name: 'Oyuncak', path: 'oyuncak' }
  ];

  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        Tufan PetShop
      </NavLink>
      <nav>
        <ul className="nav-links">
          {categories.map(category => (
            <li key={category.path} className="dropdown">
              <NavLink to={`/${category.path}`} className="dropbtn">
                {category.name}
              </NavLink>
              <div className="dropdown-content">
                <NavLink to={`/${category.path}`} end>Hepsi</NavLink>
                {subCategories.map(sub => (
                  <NavLink key={sub.path} to={`/${category.path}/${sub.path}`}>
                    {sub.name}
                  </NavLink>
                ))}
              </div>
            </li>
          ))}
          <li><NavLink to="/iletisim">Bize Ulaşın</NavLink></li>
        </ul>
      </nav>
      <div className="nav-actions">
        {/* Butonu NavLink'e çevirdik */}
        <NavLink to="/sepet" className="cart-button">
          Sepetim ({cartItemCount})
          <span className="cart-total">{cartTotal.toFixed(2)} TL</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;