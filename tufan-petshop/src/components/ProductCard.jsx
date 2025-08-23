import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CardContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500); // 1.5 saniye sonra eski haline dönecek
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <span className="product-category">{product.subCategory}</span>
        <h3>{product.name}</h3>
        <div className="product-footer">
          <p className="product-price">{product.price.toFixed(2)} TL</p>
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
  );
}

export default ProductCard;