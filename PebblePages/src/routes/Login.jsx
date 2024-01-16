import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FetchToken } from '../components/FetchToken.jsx';
export const  Login = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      FetchToken(codeResponse.access_token);
    },
  });
  return (
    <div>
      <h1>Login to Your App</h1>
      <button onClick={() => login()}>Sign in with Google 🚀</button>
    </div>
  );
};