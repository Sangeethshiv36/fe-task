import React from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';

import { ReactComponent as MenuIcon } from '../icons/menu.svg';
import { ReactComponent as HomeIcon } from '../icons/home.svg';
import { ReactComponent as ContactsIcon } from '../icons/groups.svg';

function Sidebar() {
  return (
    <>
      <Navbar position="side">
        <div className="sidenav-content">
          <div className="menu-icon">
            <NavItem icon={<MenuIcon />} />
          </div>
          <div className="menu-options">
            <NavItem icon={<HomeIcon />} />
            <NavItem icon={<ContactsIcon />} isActive={true} />
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Sidebar;
