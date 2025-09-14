import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sections from './rest/Sections.jsx'
import Navigation from './rest/Navigation.jsx'
import CartPage from './pages/CartPage.jsx'
import Toast from './components/Toast.jsx'
import { CartProvider } from './context/CartContext.jsx'
import menuData from './rest/data.js'

function App() {
  const [currentPage, setCurrentPage] = useState('menu'); // 'menu' or 'cart'
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });

  const goToCart = () => {
    setCurrentPage('cart');
  };

  const goToMenu = () => {
    setCurrentPage('menu');
  };

  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast({ ...toast, isVisible: false });
  };

  return (
    <div className="restaurant-app">
      {currentPage === 'menu' ? (
        <div className="restaurant-menu">
          <header className="menu-header">
            <h1>Restaurant Menu</h1>
          </header>
          <Navigation 
            sections={Object.keys(menuData)} 
            onCartToggle={goToCart}
          />
          <div className="menu-sections">
            {Object.entries(menuData).map(([sectionName, dishes]) => (
              <Sections 
                key={sectionName}
                sectionName={sectionName}
                dishes={dishes}
                onItemAdded={showToast}
              />
            ))}
          </div>
        </div>
      ) : (
        <CartPage onBackToMenu={goToMenu} />
      )}
      
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
)
