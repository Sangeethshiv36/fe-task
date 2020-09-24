import React from 'react';

function Navbar({ children, position }) {
  return (
    <nav className={`${position}-nav`}>
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
}

export default Navbar;
