import { Helmet } from 'react-helmet';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import FavoritesProvider from './Context/FavoritesContext';


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <FavoritesProvider>

        <App />

      </FavoritesProvider>

    </BrowserRouter>

  </HelmetProvider>

)
