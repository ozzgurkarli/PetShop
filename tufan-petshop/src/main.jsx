import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CardContext.jsx'
import { MenuProvider } from './context/MenuContext.jsx' // MenuProvider import edildi
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)