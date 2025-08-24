import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CardContext';
import './ProductCard.css';

// Para birimini formatlamak için bir yardımcı fonksiyon
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  }).format(amount);
};

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Adet 0 veya daha azsa ekleme yapma
    if (quantity < 1) return;
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <span className="product-category">{product.subCategory}</span>
        <h3 className="product-name">{product.name}</h3>
        
        {/* Fiyat ve butonları içeren alt bölüm */}
        <div className="product-footer">
          <p className="product-price">{formatCurrency(product.price)}</p>
          <div className="add-to-cart-controls">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
              min="1"
              className="quantity-input"
            />
            <button
              className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={isAdded}
            >
              {isAdded ? 'Eklendi!' : 'Sepete Ekle'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;