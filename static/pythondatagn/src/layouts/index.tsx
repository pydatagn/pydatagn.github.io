import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutShell from './LayoutShell';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

interface LayoutState {
  isMenuOpen: boolean;
}

class Layout extends React.PureComponent<LayoutProps, LayoutState> {
  state = {
    isMenuOpen: false
  }

  render() {
    const { isMenuOpen } = this.state;
    const { children, title } = this.props;

    return (
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <LayoutShell
          isMenuOpen={isMenuOpen}
          handleMenuToggle={this.handleMenuToggle}
        >
          {children}
        </LayoutShell>
      </>
    );
  }

  private handleMenuToggle = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }))
  }
}

export default Layout
