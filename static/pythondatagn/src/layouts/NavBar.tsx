import * as React from 'react';

interface NavBarProps {
  handleMenuToggle: () => void;
  isMenuOpen: boolean;
}

// TODO
const NavBar: React.SFC<NavBarProps> = ({ handleMenuToggle, isMenuOpen }) => (
  <>
    <div className="offset" />
    <div className="navbar">
      <p>Here there will be the menu</p>
    </div>
  </>
);

export default NavBar;
