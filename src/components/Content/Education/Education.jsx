import React from 'react';
import s from './Education.module.css';
import CoursesList from './CoursesList/CoursesList';


function Education(props) {
  const listItemsBgu = props.state.bgu.courses.map((item, index) =>
    <CoursesList key={index} name={item.category} courses={item.courses} />
  );
  const listItemsSheCodes = props.state.sheCodes.courses.map((item, index) =>
    <CoursesList key={index} name={"Topics"} courses={item.courses} />
  );

  return (
    <section id="education" className={s.educationSection}>
      <div>
        <h2>Education</h2>
      </div>

      <div className={s.educationFrame}>
        <div className={s.educationContent}>
          <div>
            <img src={props.state.bgu.icon} alt="Ben Gurion University logo" />
          </div>
          <h3>{props.state.bgu.title}</h3>
          <p>
            Start date: {props.state.bgu.startDate}<br />
            Graduation: {props.state.bgu.endDate}<br />
            GPA: {props.state.bgu.gpa}<br />
          </p>
          {listItemsBgu}
        </div>

        <div className={s.educationContent}>
          <div>
            <img src={props.state.sheCodes.icon} alt="Ben Gurion University logo" />
          </div>
          <h3>{props.state.sheCodes.title}</h3>
          {listItemsSheCodes}
        </div>
      </div>
    </section>
  );
}

export default Education;