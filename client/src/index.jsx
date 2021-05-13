import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { GoogleLogin } from './GoogleLogin';
import Header from './Header';
import Profile from './Profile';
import UserForm from './UserForm';
import { GlobalProvider } from './utils/GlobalState';
import './styles.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <h2 className="is-size-4">Using React Context API to receive data in any component.</h2>
          <div className="container">
            <UserForm />
            <h2 className="is-size-4">
              User Info Here{' '}
              <span role="img" aria-label="point-down-label">
                👇
              </span>
            </h2>
            <p>This profile will show data from the Global Store.</p>
            <Profile />
            <GoogleLogin />
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

// Wrap parent component with context provider
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
