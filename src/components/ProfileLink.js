import React, { useContext } from 'react';
import DispatchContext from '../DispatchContext';

function ProfileLink({ userName }) {
  const appDispatch = useContext(DispatchContext);
  return (
    <div className="profile-link">
      <span onClick={() => appDispatch({ type: 'TOGGLE_DROPDOWN' })}>
        {userName}
      </span>
    </div>
  );
}

export default ProfileLink;
