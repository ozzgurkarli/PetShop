import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CardContext';
import { formatCurrency } from '../utils/formatCurrency';
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
    { name: 'Oyuncak', path: 'oyuncak' },
    { name: 'Bakım', path: 'bakim' }
  ];

  return (
    <header className="navbar">
      {/* --- DEĞİŞİKLİK BURADA --- */}
      <NavLink to="/" className="logo">
        <img src="/logo.png" alt="Tufan PetShop Logo" className="logo-image" />
        <span>Tufan<span className="highlight">PetShop</span></span>
      </NavLink>
      {/* --- DEĞİŞİKLİK SONU --- */}
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
        <NavLink to="/sepet" className="cart-button">
          Sepetim ({cartItemCount})
          <span className="cart-total">{formatCurrency(cartTotal)}</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;