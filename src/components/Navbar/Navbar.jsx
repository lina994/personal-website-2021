import React from 'react';
import s from './Navbar.module.css';

import BurgerMenuIcon from './BurgerMenuIcon/BurgerMenuIcon';
import NavbarLinks from './NavbarLinks/NavbarLinks';

import {toggleNavbarLinks} from './NavbarLinks/NavbarLinks';


function Navbar() {
  let navbarRef = React.createRef();

  return (
    <nav className={s.navbarWrapper}>
      <BurgerMenuIcon toggleNavbarLinks={()=>toggleNavbarLinks(navbarRef.current)} />
      <NavbarLinks navRef={navbarRef} />
    </nav>
  );
}

export default Navbar;

