import React from 'react';
import './CheckoutPage.css';
// Yeni SVG dosyasını import ediyoruz
import PaymentLogos from '../assets/logo_band_colored.svg';

function CheckoutPage() {
  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    alert('Ödeme işlemi için backend entegrasyonu gereklidir.');
  };

  return (
    <div className="checkout-page">
      <h1>Ödeme Bilgileri</h1>
      <form className="checkout-container" onSubmit={handlePaymentSubmit}>
        <div className="billing-details">
          <h2>Fatura ve Teslimat Bilgileri</h2>
          <div className="billing-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Ad</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Soyad</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Adres</label>
              <textarea id="address" name="address" rows="3" required></textarea>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">Şehir</label>
                <input type="text" id="city" name="city" required />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Posta Kodu</label>
                <input type="text" id="zip" name="zip" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
          </div>
        </div>

        <div className="payment-details">
          <h2>Kart Bilgileri</h2>
          <div className="payment-form">
            <div className="form-group">
              <label htmlFor="cardName">Kart Üzerindeki İsim</label>
              <input type="text" id="cardName" name="cardName" placeholder="Ad Soyad" required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Kart Numarası</label>
              <input type="text" id="cardNumber" name="cardNumber" placeholder="•••• •••• •••• ••••" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Son Kullanma Tarihi</label>
                <input type="text" id="expiryDate" name="expiryDate" placeholder="AA/YY" required />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="•••" required />
              </div>
            </div>
            <button type="submit" className="pay-btn">Ödemeyi Tamamla</button>
          </div>

          {/* --- DEĞİŞEN BÖLÜM BURASI --- */}
          <div className="payment-logo-band">
            <img src={PaymentLogos} alt="Visa, MasterCard, iyzico ile Güvenli Ödeme" />
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;