import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

// Kategori isimlerini API'deki animal ID'lerine eşleştiren bir nesne
const categoryToAnimalId = {
  'kedi': 1,
  'kopek': 2,
  'kus': 3,
  'balik': 4
};

function ProductList({ category, subCategory }) {
  const [allProducts, setAllProducts] = useState([]); // Kategoriye ait tüm ürünleri tutar
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtrelenmiş ve sıralanmış ürünleri tutar
  const [sortType, setSortType] = useState('default');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Kategori değiştiğinde API'den veri çek
  useEffect(() => {
    const fetchProducts = async () => {
      const animalId = categoryToAnimalId[category];
      if (!animalId) {
        setAllProducts([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:3000/product/?animal=${animalId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        
        // Gelen veriyi uygulamanın kullandığı formata çeviriyoruz
        const formattedProducts = result.data.map(p => ({
          id: p.Id,
          category: category,
          // API'den gelen Description alanını subCategory olarak kullanıyoruz
          subCategory: p.Description.toLowerCase(), 
          name: p.Name,
          // Fiyatı string'den sayıya çeviriyoruz ($ ve virgül kaldırılıyor)
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

    fetchProducts();
  }, [category]);

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

  if (loading) {
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