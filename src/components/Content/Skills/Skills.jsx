import React from 'react';
import s from './Skills.module.css';


function Skills(props) {
  const listItems = props.state.map((skill, index) => <img className={s.skillImage} key={index} src={skill.icon} alt={skill.name} />);

  return (
    <section id="skills" className={s.skillsSection}>
      <div>
        <h2>Skills</h2>
      </div>
      <div className={s.skillsWrapper}>
        {listItems}
      </div>
    </section>
  );
}

export default Skills;