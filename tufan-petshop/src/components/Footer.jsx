import React from 'react';
import './Footer.css';

// Sosyal medya ikonlarını SVG olarak tanımlayalım
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h-2a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h2"></path>
        <path d="M12 11v-1a4 4 0 0 1 4-4h2"></path><circle cx="14" cy="4" r="2"></circle>
    </svg>
);

// --- YENİ EKLENEN YOUTUBE İKONU ---
const YouTubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Tufan PetShop</h3>
          <p>&copy; 2025. Tüm Hakları Saklıdır.</p>
        </div>
        <div className="footer-links">
          <a href="/hakkimizda">Hakkımızda</a>
          <a href="/iletisim">İletişim</a>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/tufan_petshop" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/tufanpetshop" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="https://www.tiktok.com/@tufanpetshop" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <TikTokIcon />
          </a>
          {/* --- YENİ EKLENEN YOUTUBE LİNKİ --- */}
          <a href="https://www.youtube.com/@tufanpetshop" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;