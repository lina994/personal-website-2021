import React from 'react';
import s from './Content.module.css';

import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

function Content(props) {
  return (
    <main className={s.content}>
      <About state={props.state.about} />
      <Education state={props.state.education} />
      <Experience state={props.state.experience} />
      <Skills state={props.state.skills} />
      <Portfolio state={props.state.portfolio} />
      <Contact />
    </main>
  );
}

export default Content;