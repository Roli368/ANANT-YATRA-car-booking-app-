import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 1. Global CSS first
import './index.css';

// 2. Leaflet CSS MUST be imported for the map to display correctly
// If this is missing, your map tiles will look scattered or broken.
import "leaflet/dist/leaflet.css";

// 3. Main App Component
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);