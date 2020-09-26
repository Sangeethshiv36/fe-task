import React, { useContext } from 'react';
import DropdownItem from './DropdownItem';
import ProfilePic from './ProfilePic';

import StateContext from '../StateContext';

function DropdownMenu({ profile }) {
  const appState = useContext(StateContext);

  return (
    <div className="dropdown">
      <div className="menu">
        {appState.usersList &&
          appState.usersList.map((userInfo) => {
            return (
              <DropdownItem
                leftIcon={
                  <ProfilePic
                    initials={`${userInfo.first_name && userInfo.first_name[0]}
											${userInfo.last_name && userInfo.last_name[0]}`}
                  />
                }
                key={userInfo.id}
                color={userInfo.profileColor}
                userName={`${userInfo.first_name} ${userInfo.last_name}`}
                userId={userInfo.id}
              ></DropdownItem>
            );
          })}
      </div>
    </div>
  );
}

export default DropdownMenu;
