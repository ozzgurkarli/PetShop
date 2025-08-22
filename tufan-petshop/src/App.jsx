import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Hem ana kategori hem de alt kategori için tek bir route tanımlıyoruz */}
          <Route path="/:categoryName" element={<CategoryPage />} />
          <Route path="/:categoryName/:subCategoryName" element={<CategoryPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;