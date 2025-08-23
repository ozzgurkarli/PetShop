import React, { useContext } from 'react';
import { CartContext } from '../context/CardContext';
import './CartPage.css';

// Çöp Kutusu ikonu için SVG component'i
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

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Sepetim</h1>
        <p>Sepetinizde henüz ürün bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Sepetim</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{item.price.toFixed(2)} TL</p>
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
                {(item.price * item.quantity).toFixed(2)} TL
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
            <span>{cartTotal.toFixed(2)} TL</span>
          </div>
          <div className="summary-row">
            <span>Kargo</span>
            <span>Ücretsiz</span>
          </div>
          <div className="summary-row total">
            <span>Toplam</span>
            <span>{cartTotal.toFixed(2)} TL</span>
          </div>
          <button className="checkout-btn">Alışverişi Tamamla</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;