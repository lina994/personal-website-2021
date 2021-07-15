import React from 'react';
import s from './ContactIcon.module.css';


function ContactIcon(props) {
  return (
    <div className={s.contact}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.icon} alt={props.name}/>
      </a>
    </div>
  );
}

export default ContactIcon;
