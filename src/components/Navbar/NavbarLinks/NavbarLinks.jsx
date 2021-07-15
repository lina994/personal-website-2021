import React from 'react';

import s from './NavbarLinks.module.css';
import NavbarLink from './NavbarLink/NavbarLink';

// The Element.classList is a read-only property that returns a 
// live DOMTokenList collection of the class attributes of the element. 
export function toggleNavbarLinks(e) {
  e.classList.toggle(`${s.displayNone}`);
}

function NavbarLinks(props) {
  return (
    <div className={`${s.navbarLinks} ${s.displayNone}`} ref={props.navRef}>
      <NavbarLink target={'header'} linkName={'Home'}/>
      <NavbarLink target={'about'} linkName={'About'}/>
      <NavbarLink target={'education'} linkName={'Education'}/>
      <NavbarLink target={'skills'} linkName={'Skills'}/>
      <NavbarLink target={'portfolio'} linkName={'Portfolio'}/>
      <NavbarLink target={'contact'} linkName={'Contact'}/>
      
    </div>
  );
}

export default NavbarLinks;

