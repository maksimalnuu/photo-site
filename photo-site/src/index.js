import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PhotoProvider } from './contexts/photo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PhotoProvider>
    <App />
  </PhotoProvider>
);
