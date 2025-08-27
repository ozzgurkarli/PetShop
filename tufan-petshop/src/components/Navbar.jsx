import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CardContext';
import { MenuContext } from '../context/MenuContext'; // MenuContext import edildi
import { formatCurrency } from '../utils/formatCurrency';
import './Navbar.css';

// İkonlar (değişiklik yok)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);


function Navbar() {
  const { cartItemCount, cartTotal } = useContext(CartContext);
  const { menuData, loading: menuLoading } = useContext(MenuContext); // MenuContext'ten veri çekildi
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sabit kategoriler kaldırıldı

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={handleLinkClick}>
        <img src="/logo.png" alt="Tufan PetShop Logo" className="logo-image" />
        <span className="logo-text">Tufan<span className="highlight">PetShop</span></span>
      </NavLink>
      
      <nav className="desktop-nav">
        {!menuLoading && (
          <ul className="nav-links">
            {menuData.map(category => (
              <li key={category.Code} className="dropdown">
                <NavLink to={`/${category.path}`} className="dropbtn">{category.Description}</NavLink>
                <div className="dropdown-content">
                  <NavLink to={`/${category.path}`} end>Hepsi</NavLink>
                  {category.subCategories.map(sub => ( <NavLink key={`${category.Code}-${sub.Code}`} to={`/${category.path}/${sub.path}`}>{sub.Description}</NavLink> ))}
                </div>
              </li>
            ))}
            <li><NavLink to="/iletisim">Bize Ulaşın</NavLink></li>
          </ul>
        )}
      </nav>

      <div className="nav-right">
        <div className="nav-actions">
          <NavLink to="/sepet" className="cart-button">
             <span className="cart-icon-mobile"><CartIcon /></span>
             <span className="cart-text">Sepetim</span> 
             ({cartItemCount})
            <span className="cart-total">{formatCurrency(cartTotal)}</span>
          </NavLink>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {isMenuOpen && !menuLoading && (
        <div className="mobile-nav-overlay">
          <ul className="mobile-nav-links">
             {menuData.map(category => (
              <li key={category.Code} className="mobile-dropdown">
                <NavLink to={`/${category.path}`} onClick={handleLinkClick}>{category.Description}</NavLink>
                 <div className="mobile-dropdown-content">
                  <NavLink to={`/${category.path}`} end onClick={handleLinkClick}>- Hepsi</NavLink>
                  {category.subCategories.map(sub => (
                    <NavLink key={`${category.Code}-${sub.Code}`} to={`/${category.path}/${sub.path}`} onClick={handleLinkClick}>- {sub.Description}</NavLink>
                  ))}
                </div>
              </li>
            ))}
            <li><NavLink to="/iletisim" onClick={handleLinkClick}>Bize Ulaşın</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;