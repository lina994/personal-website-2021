import React from 'react';
import s from './CoursesList.module.css';

function CoursesList(props) {
  const category = props.name;
  const listItems = props.courses.map((course, index) =>
    <li className={s.item} key={index}>{course}</li>
  );
  return (
    <div className="courses-container">
      <h4>{category}</h4>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default CoursesList;

