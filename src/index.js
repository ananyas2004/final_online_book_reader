import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));
// container that will store the content and rendering will take place here 
// Render your app using createRoot
root.render(
  <Auth0Provider
    domain="dev-tyllflk4tc4v3qcg.us.auth0.com"
    clientId="IW80oN286PT9cZE3i5UeoIiKlx271FdZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode> 
      {/* HOC - add extra checks to the development process */}
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

// If you want to measure performance, use reportWebVitals
reportWebVitals(console.log);