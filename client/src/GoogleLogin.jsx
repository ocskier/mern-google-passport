import React, { useContext } from 'react';
import { GlobalContext } from './utils/GlobalState';

export const GoogleLogin = () => {
  const {
    state: { user },
  } = useContext(GlobalContext);
  return <div>
      {!user && 
        <a href={
          process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL + "/auth/google" 
          : "http://localhost:3001/auth/google"}>
          Sign In Google
        </a>
      }
    </div>;
};
