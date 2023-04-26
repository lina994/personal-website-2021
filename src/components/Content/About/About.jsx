import React from 'react';
import s from './About.module.css';

import ContactIcon from './ContactIcon/ContactIcon';

function About(props) {
  let aboutMeInfo = props.state.text.split('\n').map((line, index)=><div key={index}>{line}<br/></div>);

  let contactIcons = props.state.contacts.map((contact, index)=>{
    return <ContactIcon key={index} name={contact.name} link={contact.link} icon={contact.icon} />
  });
  
  return (
    <section id="about" className={s.aboutSection}>
      <div className={s.aboutHeader}>
        <h2>About Me</h2>
      </div>
      <div className={s.resume}>
        <a href={props.state.cv.link} target="_blank" rel="noopener noreferrer">
          <p>Download my resume</p>
          <img src={props.state.cv.icon} alt='download icon'/>
        </a>
      </div>
      <div className={s.aboutText}>
        {aboutMeInfo}
      </div>
      <div className={s.aboutContactIcons}>
        {contactIcons}
      </div>
    </section>
  );
}

export default About;







