import React from 'react';
import s from './Contact.module.css';


function Contact(props) {

  return (
    <section id="contact" className={s.contactSection}>
      <div className={s.contactHeader}>
        <h2>Contact</h2>
      </div>

      <form action="https://formspree.io/f/mqkgbkvp" method="POST">
        <div className={s.styledInput}>
          <input className={s.textInput} type="text" name="sender" required />
          <label>Name:</label>
        </div>
        <div className={s.styledInput}>
          <input className={s.emailInput} type="text" name="email" required />
          <label>Email:</label>
        </div>
        <div className={s.styledInput}>
          <textarea className={s.messageInput} name="message" required></textarea>
          <label>Message:</label>
        </div>
        <button className={s.submitBtn}>Send</button>
      </form>

    </section>
  );
}

export default Contact;