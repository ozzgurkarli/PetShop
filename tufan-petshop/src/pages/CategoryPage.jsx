import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList'; // Eklendi

function CategoryPage() {
  const { categoryName, subCategoryName } = useParams();

  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <h1>
        {capitalize(categoryName)}
        {subCategoryName ? ` - ${capitalize(subCategoryName)}` : ''} Ürünleri
      </h1>
      
      <ProductList category={categoryName} subCategory={subCategoryName} />
    </div>
  );
}

export default CategoryPage;