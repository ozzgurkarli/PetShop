import React, { useState } from 'react';
import './CheckoutPage.css';
import PaymentLogos from '../assets/logo_band_colored.svg';

import Modal from '../components/Modal';
import DeliveryReturnsPage from './DeliveryReturnsPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import SalesAgreementPage from './SalesAgreementPage';

function CheckoutPage() {
  // Form verilerini tutmak için state oluşturuldu
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    email: '',
    phone: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Formdaki her değişiklikte state'i güncelleyen fonksiyon
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreements, setAgreements] = useState({
    delivery: false,
    privacy: false,
    sales: false,
  });

  const handleAgreementChange = (e) => {
    const { name, checked } = e.target;
    setAgreements(prev => ({ ...prev, [name]: checked }));
  };

  const allAgreementsChecked = Object.values(agreements).every(Boolean);

  const openModal = (type) => {
    setModalContent(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const getModalContent = () => {
    switch (modalContent) {
      case 'delivery':
        return { title: 'Teslimat ve İade Şartları', content: <DeliveryReturnsPage /> };
      case 'privacy':
        return { title: 'Gizlilik Sözleşmesi', content: <PrivacyPolicyPage /> };
      case 'sales':
        // Form verileri SalesAgreementPage'e prop olarak gönderiliyor
        return { title: 'Mesafeli Satış Sözleşmesi', content: <SalesAgreementPage buyerData={formData} /> };
      default:
        return { title: '', content: null };
    }
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    if (!allAgreementsChecked) {
      alert('Lütfen tüm sözleşmeleri onaylayın.');
      return;
    }
    alert('Ödeme işlemi için backend entegrasyonu gereklidir.');
  };

  return (
    <>
      <div className="checkout-page">
        <h1>Ödeme Bilgileri</h1>
        <form className="checkout-container" onSubmit={handlePaymentSubmit}>
          <div className="billing-details">
            <h2>Fatura ve Teslimat Bilgileri</h2>
            <div className="billing-form">
              {/* Form input'larına value ve onChange eklendi */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Ad</label>
                  <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleFormChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Soyad</label>
                  <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleFormChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Adres</label>
                <textarea id="address" name="address" rows="3" required value={formData.address} onChange={handleFormChange}></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Şehir</label>
                  <input type="text" id="city" name="city" required value={formData.city} onChange={handleFormChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">Posta Kodu</label>
                  <input type="text" id="zip" name="zip" required value={formData.zip} onChange={handleFormChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleFormChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleFormChange} />
              </div>
            </div>
          </div>

          <div className="payment-details">
            <h2>Kart Bilgileri</h2>
            <div className="payment-form">
              <div className="form-group">
                <label htmlFor="cardName">Kart Üzerindeki İsim</label>
                <input type="text" id="cardName" name="cardName" placeholder="Ad Soyad" required value={formData.cardName} onChange={handleFormChange} />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Kart Numarası</label>
                <input type="text" id="cardNumber" name="cardNumber" placeholder="•••• •••• •••• ••••" required value={formData.cardNumber} onChange={handleFormChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Son Kullanma Tarihi</label>
                  <input type="text" id="expiryDate" name="expiryDate" placeholder="AA/YY" required value={formData.expiryDate} onChange={handleFormChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="•••" required value={formData.cvv} onChange={handleFormChange} />
                </div>
              </div>

              <div className="agreements">
                <div className="agreement-row">
                  <input type="checkbox" id="delivery" name="delivery" checked={agreements.delivery} onChange={handleAgreementChange} />
                  <label htmlFor="delivery">
                    <span className="agreement-link" onClick={() => openModal('delivery')}>Teslimat ve İade Şartları</span>'nı okudum, onaylıyorum.
                  </label>
                </div>
                <div className="agreement-row">
                  <input type="checkbox" id="privacy" name="privacy" checked={agreements.privacy} onChange={handleAgreementChange} />
                  <label htmlFor="privacy">
                    <span className="agreement-link" onClick={() => openModal('privacy')}>Gizlilik Sözleşmesi</span>'ni okudum, onaylıyorum.
                  </label>
                </div>
                <div className="agreement-row">
                  <input type="checkbox" id="sales" name="sales" checked={agreements.sales} onChange={handleAgreementChange} />
                  <label htmlFor="sales">
                    <span className="agreement-link" onClick={() => openModal('sales')}>Mesafeli Satış Sözleşmesi</span>'ni okudum, onaylıyorum.
                  </label>
                </div>
              </div>
              
              <button type="submit" className="pay-btn" disabled={!allAgreementsChecked}>
                Ödemeyi Tamamla
              </button>
            </div>
            
            <div className="payment-logo-band">
              <img src={PaymentLogos} alt="Visa, MasterCard, iyzico ile Güvenli Ödeme" />
            </div>
          </div>
        </form>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalContent().title}>
        {getModalContent().content}
      </Modal>
    </>
  );
}

export default CheckoutPage;