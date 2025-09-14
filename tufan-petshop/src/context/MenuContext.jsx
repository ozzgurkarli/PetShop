import React, { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch('http://localhost:3000/parameter/navbar');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        
        const animals = result.data.filter(item => item.Group === 'Animal');
        const productTypes = result.data.filter(item => item.Group === 'ProductType');

        const structuredData = animals.map(animal => ({
          ...animal,
          path: animal.Description.toLowerCase().replace('i̇', 'i').replace('ş', 's').replace('ğ', 'g'),
          subCategories: productTypes
            .filter(pt => pt.Detail1 === String(animal.Code))
            .map(sub => ({
              ...sub,
              path: sub.Description.toLowerCase().replace('i̇', 'i').replace('ş', 's').replace('ğ', 'g')
            }))
        }));

        setMenuData(structuredData);
      } catch (error) {
        setError(error);
        console.error("Failed to fetch menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <MenuContext.Provider value={{ menuData, loading, error }}>
      {children}
    </MenuContext.Provider>
  );
};