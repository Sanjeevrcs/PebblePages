import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <GoogleOAuthProvider clientId="795042064156-mveutcj2plrun5bap0jp6muslllkn0gr.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
    </React.StrictMode>
  </BrowserRouter>
)
