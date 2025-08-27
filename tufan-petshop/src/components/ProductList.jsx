import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import { MenuContext } from '../context/MenuContext';
import './ProductList.css';

function ProductList({ category, subCategory }) {
  const { menuData } = useContext(MenuContext);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState('default');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      // URL'deki kategori adına göre ilgili hayvanın ID'sini bul
      const currentCategoryObject = menuData.find(c => c.path === category);
      const animalId = currentCategoryObject ? currentCategoryObject.Code : null;

      if (!animalId) {
        setAllProducts([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://petshopapi-eight.vercel.app/product/?animal=${animalId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        
        const formattedProducts = result.data.map(p => ({
          id: p.Id,
          category: category,
          subCategory: p.Description.toLowerCase().replace('i̇', 'i').replace('ş', 's').replace('ğ', 'g'), 
          name: p.Name,
          price: parseFloat(p.Price.replace('$', '').replace(',', '')),
          image: p.Image,
          stock: p.Stock
        }));
        
        setAllProducts(formattedProducts);
      } catch (error) {
        setError('Ürünler yüklenirken bir hata oluştu.');
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    // Ürünleri çekmeden önce menü verisinin yüklenmesini bekle
    if (menuData.length > 0) {
        fetchProducts();
    }

  }, [category, menuData]);

  useEffect(() => {
    let tempProducts = [...allProducts];
    if (subCategory) {
      tempProducts = tempProducts.filter(p => p.subCategory === subCategory);
    }

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
          return 0;
      }
    });

    setFilteredProducts(sortedProducts);
  }, [allProducts, subCategory, sortType]);

  // Menü verisi yüklenirken de yükleniyor göster
  if (loading || menuData.length === 0) {
    return <p>Ürünler yükleniyor...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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