import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams(); // URL'den kategori adını alır (kedi, kopek vb.)

  return (
    <div>
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Ürünleri</h1>
      <p>Burada {categoryName} için ürünler listelenecek.</p>
      {/* Örnek alt kategoriler */}
      <ul>
        <li>Mamalar</li>
        <li>Oyuncaklar</li>
        <li>Bakım Ürünleri</li>
      </ul>
    </div>
  );
}

export default CategoryPage;