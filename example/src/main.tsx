import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-hook-auth';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
