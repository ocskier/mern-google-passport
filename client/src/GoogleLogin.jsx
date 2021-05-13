import React, { useContext } from 'react';
import { GlobalContext } from './utils/GlobalState';

export const GoogleLogin = () => {
  const {
    state: { user },
  } = useContext(GlobalContext);
  return <div>{!user && <a href="http://localhost:3001/auth/google">Sign In Google</a>}</div>;
};
