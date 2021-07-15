import React from 'react';
import s from './Content.module.css';

import About from './About/About';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

function Content(props) {
  return (
    <main className={s.content}>
      <About state={props.state.about} />
      <Education state={props.state.education} />
      <Skills state={props.state.skills} />
      <Portfolio state={props.state.portfolio} />
      <Contact />
    </main>
  );
}

export default Content;