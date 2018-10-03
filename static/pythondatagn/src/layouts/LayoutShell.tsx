import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutShellProps {
  children: React.ReactNode;
  handleMenuToggle: () => void;
  isMenuOpen: boolean;
}

const LayoutShell: React.SFC<LayoutShellProps> = ({ children, handleMenuToggle, isMenuOpen }) => (
  <>
    <NavBar
      handleMenuToggle={handleMenuToggle}
      isMenuOpen={isMenuOpen}
    />
      {children}
    <Footer />
  </>
);

export default LayoutShell
