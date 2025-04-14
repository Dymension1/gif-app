import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GifExpertApp } from './GifExpertApp';
import Terminos from './Términos';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {}
      <Routes>
        <Route path="/" element={<GifExpertApp />} /> {/* Ruta principal */}
        <Route path="/terminos" element={<Terminos />} /> {/* Ruta para los términos */}
      </Routes>
    </Router>
  </React.StrictMode>
);
