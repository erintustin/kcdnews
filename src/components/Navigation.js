import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavbarText } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../app/assets/images/logo-dark.png';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => { setMenuOpen(false); };

    return(
        <Navbar dark color='black' sticky='top' expand='md' className='mt-0'>
            <NavbarBrand className='navbarbrand' href='/'>
                <img src={logo} alt='kcd rainbow logo' className='navlogo float-start App-logo m-1' href='/'/>
                <NavbarText className='h1-rainbow-text m-1'>KCD NEWS</NavbarText>
            </NavbarBrand>
            <NavbarText className='watch-live'>
                <i className='blink-icon fa fa-circle' /> LIVE
            </NavbarText>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/about' onClick={closeMenu}>ABOUT </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/events' onClick={closeMenu}>EVENTS </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/music' onClick={closeMenu}>MUSIC </NavLink>
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' href='/contact' onClick={closeMenu}>CONTACT</a>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;