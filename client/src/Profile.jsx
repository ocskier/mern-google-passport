import React, { useContext } from 'react';
import { GlobalContext } from './utils/GlobalState';
// This component displays name from Context
const RandomComponent = ({header}) => {
  const {
    state: { user },
  } = useContext(GlobalContext);
  return (
    <div style={{ marginTop: '30px' }}>
      <h2 className="is-size-4">
        {/* Pass name from context here */}
        {user && (
          <>
            {header && <img alt="profile" src={user.photos[0]}></img>}
            <strong>Name</strong>: {user.firstName} {user.lastName}
          </>
        )}
      </h2>
    </div>
  );
};

export default RandomComponent;
