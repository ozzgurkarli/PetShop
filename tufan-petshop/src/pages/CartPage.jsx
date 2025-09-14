import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Link yerine useNavigate import edildi
import { CartContext } from '../context/CardContext';
import { formatCurrency } from '../utils/formatCurrency';
import Modal from '../components/Modal';
import DeliveryReturnsPage from './DeliveryReturnsPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import SalesAgreementPage from './SalesAgreementPage';
import './CartPage.css';

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);
  const navigate = useNavigate(); // Yönlendirme için useNavigate hook'u kullanılıyor

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
  
  // Ödeme sayfasına yönlendirecek fonksiyon
  const handleCheckout = () => {
    navigate('/odeme');
  };

  const getModalContent = () => {
    switch (modalContent) {
      case 'delivery':
        return { title: 'Teslimat ve İade Şartları', content: <DeliveryReturnsPage /> };
      case 'privacy':
        return { title: 'Gizlilik Sözleşmesi', content: <PrivacyPolicyPage /> };
      case 'sales':
        return { title: 'Mesafeli Satış Sözleşmesi', content: <SalesAgreementPage /> };
      default:
        return { title: '', content: null };
    }
  };


  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Sepetim</h1>
        <p>Sepetinizde henüz ürün bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <>
      <div className="cart-page">
        <h1>Sepetim</h1>
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">{formatCurrency(item.price)}</p>
                </div>
                <div className="cart-item-quantity">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                    min="1"
                    className="quantity-input"
                  />
                </div>
                <p className="cart-item-total">
                  {formatCurrency(item.price * item.quantity)}
                </p>
                <div className="cart-item-remove">
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Sipariş Özeti</h2>
            <div className="summary-row">
              <span>Ara Toplam</span>
              <span>{formatCurrency(cartTotal)}</span>
            </div>
            <div className="summary-row">
              <span>Kargo</span>
              <span>Ücretsiz</span>
            </div>
            <div className="summary-row total">
              <span>Toplam</span>
              <span>{formatCurrency(cartTotal)}</span>
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
            
            {/* --- DEĞİŞEN VE DÜZELTİLEN BUTON KISMI --- */}
            <button 
              className="checkout-btn" 
              onClick={handleCheckout}
              disabled={!allAgreementsChecked}
            >
              Alışverişi Tamamla
            </button>

          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={getModalContent().title}>
        {getModalContent().content}
      </Modal>
    </>
  );
}

export default CartPage;