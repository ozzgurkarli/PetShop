import React from 'react';
import './HomePage.css';

// İkonları doğrudan component içinde tanımlıyoruz
const PawIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.5 13.5c-1.93 1.93-5.07 1.93-7 0S2.57 8.43 4.5 6.5s5.07-1.93 7 0c1.93 1.93 1.93 5.07 0 7Z"/><path d="M20.5 13.5c-1.93 1.93-5.07 1.93-7 0s-1.93-5.07 0-7 5.07-1.93 7 0c1.93 1.93 1.93 5.07 0 7Z"/><path d="M16 16c-1.93 1.93-5.07 1.93-7 0s-1.93-5.07 0-7 5.07-1.93 7 0c1.93 1.93 1.93 5.07 0 7Z"/><path d="M8 16c-1.93 1.93-5.07 1.93-7 0s-1.93-5.07 0-7 5.07-1.93 7 0c1.93 1.93 1.93 5.07 0 7Z"/></svg>
);
const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4h-8v-4h-4V9Z"/><circle cx="7.5" cy="18.5" r="2.5"/><circle cx="17.5" cy="18.5" r="2.5"/></svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);


function HomePage() {
  return (
    <div className="homepage">
      {/* 1. HERO BÖLÜMÜ */}
      <section className="hero-container">
        <div className="hero-text">
          <h1>
            Minik Dostlarınızın <span className="highlight">Mutluluk</span> Durağı
          </h1>
          <p>
            Onların sağlığı ve neşesi için en kaliteli ürünleri, özenle seçip kapınıza getiriyoruz.
          </p>
          <button className="cta-button">Keşfetmeye Başla</button>
        </div>
        <div className="hero-image">
           {/* Buraya sevimli bir hayvan fotoğrafı gelecek */}
           <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2564&auto=format&fit=crop" alt="Mutlu bir köpek" />
        </div>
      </section>

      {/* 2. NEDEN BİZ? BÖLÜMÜ */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon"><ShieldIcon /></div>
          <h3>Kalite ve Güven</h3>
          <p>Sadece güvendiğimiz markaların, %100 orijinal ürünlerini sunuyoruz.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><PawIcon /></div>
          <h3>Uzman Seçkisi</h3>
          <p>Tüm ürünler, veteriner hekimlerin ve uzmanların tavsiyeleriyle seçilir.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><TruckIcon /></div>
          <h3>Hızlı Teslimat</h3>
          <p>Siparişleriniz en hızlı ve en güvenli şekilde kapınıza ulaşsın.</p>
        </div>
      </section>

       {/* 3. ÖNE ÇIKAN ÜRÜNLER BÖLÜMÜ */}
      <section className="featured-products">
        <h2>Popüler Ürünler</h2>
        <div className="product-grid">
            {/* Örnek Ürün Kartı */}
            <div className="product-card">
                <img src="https://images.unsplash.com/photo-1589924691995-5003920a0e22?q=80&w=2564&auto=format&fit=crop" alt="Kedi Maması"/>
                <div className="product-info">
                    <span className="product-category">Kuru Mama</span>
                    <h3>Pro Plan Yavru Kedi Maması</h3>
                    <p className="product-price">499,90 TL</p>
                </div>
            </div>
             <div className="product-card">
                <img src="https://images.unsplash.com/photo-1611145744476-63865e995914?q=80&w=2564&auto=format&fit=crop" alt="Köpek Oyuncağı"/>
                <div className="product-info">
                    <span className="product-category">Oyuncak</span>
                    <h3>Dayanıklı Kauçuk Köpek Oyuncağı</h3>
                    <p className="product-price">249,50 TL</p>
                </div>
            </div>
             <div className="product-card">
                <img src="https://images.unsplash.com/photo-1452857297128-d9f29adba80b?q=80&w=2592&auto=format&fit=crop" alt="Kuş Yemi"/>
                <div className="product-info">
                    <span className="product-category">Yem</span>
                    <h3>Kanarya ve Muhabbet Kuşu Yemi</h3>
                    <p className="product-price">120,00 TL</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;