import React from 'react';
import s from './Experience.module.css';
import Workplace from './Workplace/Workplace';


function Experience(props) {

  return (
    <section id="experience" className={s.experienceSection}>
      <div>
        <h2>Work experience</h2>
      </div>

      <div>
        <div id="cymbio">
          { props.state.map((position) => <Workplace position={position} key={position.company} />) } 
        </div>
      </div>
    </section>
  );
}

export default Experience;
