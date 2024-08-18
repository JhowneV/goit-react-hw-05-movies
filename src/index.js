import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Adjust path as necessary
import { BrowserRouter } from 'react-router-dom';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within BrowserRouter.
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
