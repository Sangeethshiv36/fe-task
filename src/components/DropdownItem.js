import React, { useContext } from 'react';
import StateContext from '../StateContext';
import DispatchContext from '../DispatchContext';

function DropdownItem(props) {
  const { leftIcon, rightIcon, userName, children, color } = props;
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  if (appState.activeUser.userName !== userName) {
    return (
      <button
        className="menu-item nav-button"
        onClick={() => {
          appDispatch({ type: 'SET_ACTIVE_USER', data: userName });
          appDispatch({ type: 'TOGGLE_DROPDOWN' });
        }}
      >
        <span className="icon-button" style={{ backgroundColor: `${color}` }}>
          {leftIcon}
        </span>
        <span className="option-name">
          <strong>{userName ? userName : children}</strong>
        </span>
        {rightIcon && (
          <span className={rightIcon ? `icon-button icon-right` : `icon-right`}>
            {rightIcon}
          </span>
        )}
      </button>
    );
  } else {
    return null;
  }
}

export default DropdownItem;
