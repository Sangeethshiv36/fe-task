import React, { useContext } from 'react';
import DropdownItem from './DropdownItem';
import ProfilePic from './ProfilePic';
import { ReactComponent as LogoutIcon } from '../icons/logout.svg';

import StateContext from '../StateContext';

function DropdownMenu({ profile }) {
  const appState = useContext(StateContext);

  const colors = [
    '#264653',
    '#e76f51',
    '#f4a261',
    '#e9c46a',
    '#2a9d8f',
    '#e5989b',
    '#06d6a0',
    '#ffd166',
    '#00b4d8',
    '#3d405b',
    '#f48c06',
    '#dc2f02',
    '#6930c3',
    '#55a630'
  ];

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
                color={colors[Math.floor(Math.random() * colors.length)]}
                key={userInfo.id}
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
