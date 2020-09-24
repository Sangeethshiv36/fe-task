import React, { useContext, Suspense } from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';
import ProfileLink from './ProfileLink';
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as MailIcon } from '../icons/mail.svg';
import StateContext from '../StateContext';

const DropdownMenu = React.lazy(() => import('./DropdownMenu'));

function Header() {
  const appState = useContext(StateContext);
  return (
    <Navbar position="top">
      <div className="left-content search">
        <NavItem icon={<SearchIcon />} />
      </div>
      <div className="right-content">
        <NavItem icon={<MailIcon />} />
        <ProfileLink userName={appState.activeUser.userName} />
        <NavItem icon={<CaretIcon />} isDropdown={true}>
          <Suspense fallback="">
            <DropdownMenu />
          </Suspense>
        </NavItem>
        <NavItem icon={<BellIcon />} />
      </div>
    </Navbar>
  );
}

export default Header;
