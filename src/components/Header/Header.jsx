import React from 'react';

import s from './Header.module.css';


function Header(props) {
  return (
    <header id="header" className={s.header}>
      <div className={s.headerTitle}>
        <h1 className={s.headerMainTitle}>{props.state.name}</h1>
        <h2 className={s.headerSecondTitle}>{props.state.title}</h2>
      </div>
    </header>

  );
}

export default Header;