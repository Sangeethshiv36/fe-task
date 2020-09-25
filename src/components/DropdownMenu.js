import React, { useContext } from 'react';
import DropdownItem from './DropdownItem';
import ProfilePic from './ProfilePic';
import { ReactComponent as LogoutIcon } from '../icons/logout.svg';

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
              ></DropdownItem>
            );
          })}
        <DropdownItem leftIcon={<LogoutIcon />}>
          <span>
            <strong>Log Out</strong>
          </span>
        </DropdownItem>
      </div>
    </div>
  );
}

export default DropdownMenu;
