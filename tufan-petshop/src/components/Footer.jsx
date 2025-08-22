import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Tufan PetShop</h3>
          <p>&copy; 2024. Tüm Hakları Saklıdır.</p>
        </div>
        <div className="footer-links">
          <a href="/hakkimizda">Hakkımızda</a>
          <a href="/sss">S.S.S.</a>
          <a href="/iletisim">İletişim</a>
        </div>
        <div className="footer-social">
          {/* Sosyal medya ikonları buraya eklenebilir */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;