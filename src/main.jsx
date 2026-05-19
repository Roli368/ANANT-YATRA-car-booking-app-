import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 1. Global CSS first
import './index.css';


// 3. Main App Component
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);