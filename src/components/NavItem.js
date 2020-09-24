import React, { useContext } from 'react';
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';

function NavItem({ icon, children, isDropdown, isActive, profile }) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <li className={`${isActive ? 'nav-item active-menu' : 'nav-item'}`}>
      <button
        className="icon-button nav-button"
        onClick={isDropdown && (() => appDispatch({ type: 'TOGGLE_DROPDOWN' }))}
      >
        {icon}
      </button>
      {appState.isDropdownOpen && children}
    </li>
  );
}

export default NavItem;
