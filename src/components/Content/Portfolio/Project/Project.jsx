import React from 'react';
import s from './Project.module.css';

export function toggleProject(e) {
  e.classList.toggle(`${s.displayNone}`);
}

function Project(props) {
  let skills = props.skills.map((skill, index)=><div className={s.skill} key={index}>{skill}</div>);
  return (
    <div className={s.projectContainer} is_show={"true"} skills={props.skills} ref={props.projRef}>
      <img className={s.projImg} src={props.photo} alt={props.name} />
      <div className={s.content}>
        <h3>{props.name}</h3>
        <div>{skills}</div>
        <p>{props.description}</p>
        <div className={s.githubLink}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">{props.linkTo}</a>
        </div>
      </div>
    </div>
  );
}

export default Project;

