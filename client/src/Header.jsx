import React, { useContext } from 'react';
import { GlobalContext } from './utils/GlobalState';
import Profile from './Profile';
import API from './utils/API';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    minHeight: 100,
    backgroundColor: 'lightblue',
  },
  button: {},
};

const Header = () => {
  const {
    state: { user },
    setState,
  } = useContext(GlobalContext);
  const handleLogout = async () => {
    const response = await API.logout();
    console.log(response.message);
    setState({ loggedIn: false, user: null });
  };
  return (
    <div style={styles.header}>
      {user && <Profile header />}
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Header;
