import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isNavOpen: false
      };
      this.toggleNav = this.toggleNav.bind(this);
    }
  
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen,
      });
    }

    render() {
        return (
    <React.Fragment>
        <Navbar className="header-nav" dark expand='md'>
            <div className='container'>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>

                    <NavItem>
                    <NavLink className='nav-link' smooth to='/game'>
                        Game
                    </NavLink>
                    </NavItem>

                    <NavItem>
                    <NavLink className='nav-link' smooth to='/about'>
                        About
                    </NavLink>
                    </NavItem>

                    <NavItem>
                    <NavLink className='nav-link' smooth to='/contact'>
                        Contact
                    </NavLink>
                    </NavItem>

                </Nav>
                </Collapse>
            </div>
    </Navbar>
</React.Fragment>
);
}
}

export default Header;
