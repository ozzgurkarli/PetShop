import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopCategories.css';

// Kategori verilerini ve görsellerini burada tanımlıyoruz.
const categoriesData = [
  { name: 'Köpek', path: 'kopek', items: '6', image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=200&h=200&fit=crop', color: '#f0f5e4' },
  { name: 'Kedi', path: 'kedi', items: '11', image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=200&h=200&fit=crop', color: '#e4f0f5' },
  { name: 'Balık', path: 'balik', items: '7', image: 'https://images.unsplash.com/photo-1535443120147-80c1d8b33538?q=80&w=200&h=200&fit=crop', color: '#e4ebf5' },
  { name: 'Kuş', path: 'kus', items: '6', image: 'https://images.unsplash.com/photo-1555513523-74603957a0b8?q=80&w=200&h=200&fit=crop', color: '#f5f0e4' },
];

const TopCategories = () => {
  return (
    <section className="top-categories">
      <h2>Popüler Kategoriler</h2>
      <div className="category-list">
        {categoriesData.map(category => (
          <NavLink to={`/${category.path}`} key={category.name} className="category-card-link">
            <div className="category-card" style={{ backgroundColor: category.color }}>
              <div className="category-image-wrapper">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
              <p>{category.items} ürün</p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;