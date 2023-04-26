import React from 'react';
import s from './Workplace.module.css';


function Workplace(props) {

  const description = props.position.description.map((text, index) => <li key={index}>{text}</li>)

  return (
    <div className={s.container}>
      <div className={s.left}>
        <img className={s.companyLogo} src={props.position.icon} alt={props.position.alt} />
        <h3>{props.position.title}</h3>
        <p>{props.position.company} | {props.position.years}</p>
      </div>
      <div className={s.right}>
        <ul>
          { description }
        </ul>
      </div>
      
    </div>
  );
}

export default Workplace;
