import './App.css'
import { routes } from './configs/routes';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
        />
      ))}
    </Routes>
  )
}

export default App
