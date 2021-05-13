import React, { useContext, useState } from 'react';
import { GlobalContext } from './utils/GlobalState';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const {
    state: { loggedIn, user },
    setState,
  } = useContext(GlobalContext);
  const login = () => {};
  return (
    <div className="user-form">
      {/* Change user's name in context */}
      <div className="input-item">
        <label className="label">First Name: </label>
        <input className="input" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      </div>

      {/* Change user's location in context */}
      <div className="input-item">
        <label className="label">Last Name: </label>
        <input className="input" onChange={(e) => setLastName(e.target.value)} value={lastName} />
      </div>
      <button onClick={(e) => login}>Submit</button>
    </div>
  );
};

export default Form;
