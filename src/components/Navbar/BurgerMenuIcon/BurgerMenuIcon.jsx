import React from 'react';
import s from './BurgerMenuIcon.module.css';

function toggleBurgerIcon(e){
  e.classList.toggle(`${s.change}`);
}

function onClickHandler(e, toggleNavbarLinks) {
  toggleBurgerIcon(e);
  toggleNavbarLinks();
}

function BurgerMenuIcon(props) {
  let burgerIconRef = React.createRef();
  return (
    <div className={s.burgerMenuIcon} ref={burgerIconRef} onClick={() => onClickHandler(burgerIconRef.current, props.toggleNavbarLinks)}>
      <div className={`${s.burgerLine} ${s.bar1}`} ></div>
      <div className={`${s.burgerLine} ${s.bar2}`}></div>
      <div className={`${s.burgerLine} ${s.bar3}`}></div>
    </div>
  );
}

export default BurgerMenuIcon;

