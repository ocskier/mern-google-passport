import React, { useEffect, useState } from 'react';

const GlobalContext = React.createContext(null);

function GlobalProvider({ children }) {
  const [state, setState] = useState({ name: '', location: '' });
  useEffect(() => {}, []);
  return <GlobalContext.Provider value={{ state, setState }}>{children}</GlobalContext.Provider>;
}

export { GlobalProvider, GlobalContext };
