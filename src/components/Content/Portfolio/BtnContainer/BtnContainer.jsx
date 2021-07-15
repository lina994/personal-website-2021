import React from 'react';

import s from './BtnContainer.module.css';


function setActiveButtom(btnsRefs, activeButton) {
  let i;
  for (i in btnsRefs) {
    let btn = btnsRefs[i].current;
    btn.className = btn.className.replace(" "+s.active, "");
  }
  activeButton.className += " "+s.active;
}


function BtnContainer(props) {
  let btnsRefs = [];

  const handleClick=(btnName, activeButtonRef)=> {
    props.filterSelection(btnName);
    setActiveButtom(btnsRefs, activeButtonRef.current);
  }

  const listbuttoms = props.categories.map((btnName, index) => {
    let btnRef = React.createRef();
    btnsRefs.push(btnRef);
    let btnClasses = index === 0 ? s.btn+" "+s.active : s.btn;
    return <button className={btnClasses} key={index} ref={btnRef} onClick={() => handleClick(btnName, btnRef)}>{btnName}</button>
  });

  return (
    <div className={s.myBtnContainer}>
      {listbuttoms}
    </div>
  );
}

export default BtnContainer;

