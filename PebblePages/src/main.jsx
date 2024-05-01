import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <ChakraProvider>
      <GoogleOAuthProvider clientId="795042064156-mveutcj2plrun5bap0jp6muslllkn0gr.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
      </ChakraProvider>
    
  </BrowserRouter>
)
