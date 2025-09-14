import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import CheckoutPage from './pages/CheckoutPage'; // YENİ SAYFAYI İMPORT ET
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/:categoryName" element={<CategoryPage />} />
          <Route path="/:categoryName/:subCategoryName" element={<CategoryPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/sepet" element={<CartPage />} />
          <Route path="/odeme" element={<CheckoutPage />} /> {/* YENİ ROTA EKLENDİ */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;