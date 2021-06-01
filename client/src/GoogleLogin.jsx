import React, { useContext } from 'react';
import { GlobalContext } from './utils/GlobalState';

export const GoogleLogin = () => {
  const {
    state: { user },
  } = useContext(GlobalContext);
  console.log(process.env.NODE_ENV);
  return <div>
      {!user && 
        <a href={
          process.env.NODE_ENV === 'development' ? 
            "http://localhost:3001/auth/google" 
          : process.env.PUBLIC_URL + "/auth/google" }>
          Sign In Google
        </a>
      }
    </div>;
};
