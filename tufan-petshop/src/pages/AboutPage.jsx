import React from 'react';
import './AboutPage.css'; // Stil dosyasını import ediyoruz

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-image">
          {/* public klasöründeki logoyu kullanıyoruz */}
          <img src="/logo.png" alt="Tufan PetShop Logo" />
        </div>
        <div className="about-content">
          <h1>Hakkımızda</h1>
          <p>
            Beykoz Kavacık’ta hizmet veren petshopumuzda kedi, köpek, kuş, balık ve diğer evcil dostlarınız için mama, aksesuar, bakım ürünleri ve oyuncaklar sunuyoruz. 
          </p>
          <p>
            Ayrıca el yapımı kedi evleri, kuş kafesleri ve özel tasarım ürünler üretiyoruz. Güvenilir hizmet ve müşteri memnuniyeti önceliğimizdir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;