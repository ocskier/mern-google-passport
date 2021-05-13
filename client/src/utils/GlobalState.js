import React, { useEffect, useState } from 'react';
import API from './API';

const GlobalContext = React.createContext(null);

function GlobalProvider({ children }) {
  const [state, setState] = useState({ loggedIn: false, user: null });
  const callGetUser = async () => {
    const res = await API.getUser();
    setState({ ...state, ...res.data });
  };
  useEffect(() => {
    callGetUser();
  }, []);
  return <GlobalContext.Provider value={{ state, setState }}>{children}</GlobalContext.Provider>;
}

export { GlobalProvider, GlobalContext };
