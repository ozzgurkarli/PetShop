import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './ProductList.css';

function ProductList({ category, subCategory }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    // 1. Filtreleme
    let tempProducts = products.filter(p => p.category === category);
    if (subCategory) {
      // Kuş yemleri için özel durum
      const actualSubCategory = category === 'kus' && subCategory === 'mama' ? 'yem' : subCategory;
      tempProducts = tempProducts.filter(p => p.subCategory === actualSubCategory);
    }

    // 2. Sıralama
    const sortedProducts = [...tempProducts].sort((a, b) => {
      switch (sortType) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0; // Varsayılan sıralama
      }
    });

    setFilteredProducts(sortedProducts);
  }, [category, subCategory, sortType]);

  return (
    <div className="product-list-container">
      <div className="filter-controls">
        <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
          <option value="default">Önerilen Sıralama</option>
          <option value="price-asc">Fiyata Göre Artan</option>
          <option value="price-desc">Fiyata Göre Azalan</option>
          <option value="name-asc">İsme Göre (A-Z)</option>
          <option value="name-desc">İsme Göre (Z-A)</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Bu kategoride henüz ürün bulunmamaktadır.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;