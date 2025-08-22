import React, { useContext } from 'react';
import { CartContext } from '../context/CardContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <span className="product-category">{product.subCategory}</span>
        <h3>{product.name}</h3>
        <div className="product-footer">
          <p className="product-price">{product.price.toFixed(2)} TL</p>
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;