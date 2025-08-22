import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext' // Eklendi
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* Eklendi */}
        <App />
      </CartProvider> {/* Eklendi */}
    </BrowserRouter>
  </StrictMode>,
)