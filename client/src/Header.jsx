import React, { useContext } from 'react';
import { GlobalContext } from './utils/GlobalState';
import API from './utils/API';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    minHeight: 100,
    backgroundColor: 'lightblue',
  },
  button: {},
};

const Header = () => {
  const { setState } = useContext(GlobalContext);
  const handleLogout = async () => {
    const response = await API.logout();
    console.log(response.message);
    setState({ loggedIn: false, user: null });
  };
  return (
    <div style={styles.header}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
