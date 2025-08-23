import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CardContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1); // Adet için state eklendi

  const handleAddToCart = () => {
    addToCart(product, quantity); // Adet bilgisi context'e gönderiliyor
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <span className="product-category">{product.subCategory}</span>
        <h3>{product.name}</h3>
        <div className="product-footer">
          <p className="product-price">{product.price.toFixed(2)} TL</p>
          <div className="add-to-cart-controls">
             <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
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