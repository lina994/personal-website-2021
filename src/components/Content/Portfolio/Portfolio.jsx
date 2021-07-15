import React from 'react';
import s from './Portfolio.module.css';
import Project from './Project/Project';
import { toggleProject } from './Project/Project'
import BtnContainer from './BtnContainer/BtnContainer';

function filterSelection(projectsRefs, selection) {
  let i;
  for (i in projectsRefs) {
    let proj = projectsRefs[i].current;
    let skills = proj.attributes.skills.value.split(",");
    let isShow = proj.attributes.is_show.value === "true" ;

    if (skills.includes(selection) || selection === "All") {
      if (!isShow) {
        toggleProject(proj);
        proj.attributes.is_show.value = "true";
      }
    }
    else {
      if (isShow) {
        toggleProject(proj);
        proj.attributes.is_show.value = "false";
      }
    }
  }
}

function Portfolio(props) {
  let projectsRefs = [];
  const listItems = props.state.projects.map((project, index) => {
    let projRef = React.createRef();
    projectsRefs.push(projRef);
    return <Project
      key={index}
      name={project.name}
      skills={project.skills}
      description={project.description}
      photo={project.photo}
      link={project.link}
      projRef={projRef} />
  });
  const filterProjects = (selection) => filterSelection(projectsRefs, selection);

  return (
    <section id="portfolio" className={s.portfolioSection}>
      <div>
        <h2>Portfolio</h2>
      </div>
      <BtnContainer filterSelection={filterProjects} categories={props.state.categories} />
      <div className={s.projects}>
        {listItems}
      </div>
    </section>
  );
}

export default Portfolio;

