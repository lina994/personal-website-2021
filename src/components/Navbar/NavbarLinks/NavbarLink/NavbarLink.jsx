import React from 'react';
import { Link } from "react-scroll";

import s from './NavbarLink.module.css';


// Link (react-scrol):
//   activeClass - class applied when element is reached
//   to - target to scroll to
//   spy - make Link selected when scroll is at its targets position
//   smooth - animate the scrolling
//   offset - scroll additional px ( like padding )
//   duration - time of the scroll animation - can be a number or a function 
//             (function (scrollDistanceInPx) { return duration; }), 
//             that allows more granular control at run-time

function NavbarLink(props) {
  return (
    <div className={s.outer}>
      <Link activeClass={s.active} to={props.target} spy={true} smooth={true} offset={-24} duration={500}>
        <div className={s.inner}>{props.linkName}</div>
      </Link>
    </div>
  );
}

export default NavbarLink;

