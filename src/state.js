
import downloadIcon from './images/downloadIcon.svg';
import linkedinIcon from './images/contactIcon/linkedin.svg';
import githubIcon from './images/contactIcon/github.svg';
import codpenIcon from './images/contactIcon/codepen.svg';
import emailIcon from './images/contactIcon/email.svg';

import bguLogo from './images/logo_bgu.png';
import sheCodesLogo from './images/logo_she_codes.png';

import javaLogo from './images/progIcon/java_logo.svg';
import pythonLogo from './images/progIcon/python_logo.svg';
import cppLogo from './images/progIcon/cpp_logo.png';
import cLogo from './images/progIcon/c_logo.png';
import htmlLogo from './images/progIcon/html5_logo.svg';
import cssLogo from './images/progIcon/css3_logo.svg';
import javaScriptLogo from './images/progIcon/javascript_logo.svg';
import typeScriptLogo from './images/progIcon/typescript_logo.svg';
import reactJSLogo from './images/progIcon/react_logo.png';
import reduxLogo from './images/progIcon/redux_logo.png';
import nodejsLogo from './images/progIcon/nodejs_logo.png';
import mySqlLogo from './images/progIcon/mysql_logo.png';
import sqliteLogo from './images/progIcon/sqlite_logo.png';
import anacondaLogo from './images/progIcon/anaconda_logo.png';
import mavenLogo from './images/progIcon/maven_logo.png';
import jsonLogo from './images/progIcon/json_logo.png';
import junitLogo from './images/progIcon/junit_logo.png';
import gitLogo from './images/progIcon/git_logo.png';

import aiImg from './images/projects/ai_img.png';
import pongImg from './images/projects/pong.png';
import portfolioImg from './images/projects/portfolioImg.png';
import booksImg from './images/projects/books.jpg';
import rayTracingImg from './images/projects/rayTracingImg.png';
import cardsImg from './images/projects/cards.jpg';


const headerInfo = {
  name: 'Alina Gafarov',
  title: 'Software Developer'
};

const about = {
  cv: {
    link: 'https://drive.google.com/file/d/1PybUccZU6lRJNFYrUr-6-rGi_NnyvAGh/view?usp=sharing',
    icon: downloadIcon
  },
  text: [
    "Hey! I'm Alina, a Computer Science graduate (B.Sc) of Ben-Gurion University.",
    "In addition, I participated in web track of She Codes Program.",
    "Currently I looking for junior position as a software developer in HaDarom/ HaMerkaz areas.",
    "Feel free to email me at g94lina@gmail.com."
  ],
  contacts: [
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/alina-gafarov',
      icon: linkedinIcon
    },
    {
      name: 'github',
      link: 'https://github.com/lina994',
      icon: githubIcon
    },
    {
      name: 'codepen',
      link: 'https://codepen.io/lina994',
      icon: codpenIcon
    },
    {
      name: 'email',
      link: 'mailto:g94lina@gmail.com?Subject=Hello',
      icon: emailIcon
    }
  ]
};

const education = {
  bgu:
    {
      title: "Computer Science (B.Sc)",
      icon: bguLogo,
      startDate: "October 2015",
      endDate: "August 2019",
      gpa: "84",
      courses: [
        {
          category: 'Elective courses:',
          courses: [
            'Computer Graphics',
            'Introduction to Artificial Intelligence',
            'Introduction to Code-Motion Refactoring',
            'Principles of Object Oriented Programming'
          ]
        },
        {
          category: 'Mini-projects:',
          courses: [
            'Mini-Project on Network Security',
            'Topics in reinforcement learning'
          ]
        }
      ]
    },
  sheCodes: {
    title: "She Codes (Web)",
    icon: sheCodesLogo,
    courses: [
      {
        category: 'Web',
        courses: ["HTML5", "CSS3", "JavaScript"]
      }
    ]
  }
};

const skills = [
  { name: 'Java', icon: javaLogo },
  { name: 'Python', icon: pythonLogo },
  { name: 'C++', icon: cppLogo },
  { name: 'C', icon: cLogo },
  { name: 'HTML5', icon: htmlLogo },
  { name: 'CSS3', icon: cssLogo },
  { name: 'JavaScript', icon: javaScriptLogo },
  { name: 'TypeScript', icon: typeScriptLogo },
  { name: 'ReactJS', icon: reactJSLogo },
  { name: 'Redux', icon: reduxLogo },
  { name: 'Node.js', icon: nodejsLogo },
  { name: 'Anaconda ', icon: anacondaLogo },
  { name: 'MySQL', icon: mySqlLogo },
  { name: 'SQlite', icon: sqliteLogo },
  { name: 'Maven', icon: mavenLogo },
  { name: 'JSON', icon: jsonLogo },
  { name: 'JUnit', icon: junitLogo },
  { name: 'Git', icon: gitLogo },
];


const portfolio = {
  categories: ['All', 'Web', 'Java', 'Python', 'C++', 'SQL', 'Artificial Intelligence', 'Reinforcement Learning', 'Computer Graphics'],
  projects: [
    {
      name: 'Personal site',
      skills: ['Web', 'ReactJS', 'HTML', 'CSS', 'JavaScript'],
      description: `My portfolio.`,
      photo: portfolioImg,
      link: 'https://github.com/lina994'
    },
    {
      name: 'Library management system',
      skills: ['Java', 'SQL', 'MySQL'],
      description: `Library management system (MySQL).`,
      photo: booksImg,
      link: 'https://github.com/lina994/LibraryManagementSystem'
    },
    {
      name: 'Ray-Tracing',
      skills: ['C++', 'OpenGL', 'Computer Graphics'],
      description: `enerating an image by tracing the path of light through pixels in an image plane and 
    simulating the effects of its encounters with virtual objects.`,
      photo: rayTracingImg,
      link: 'https://github.com/lina994/Ray-Tracing'
    },
    {
      name: 'Quartets (card game)',
      skills: ['C++'],
      description: `Card game.`,
      photo: cardsImg,
      link: 'https://github.com/lina994/spl171'
    },
    {
      name: 'DQN agent',
      skills: ['Python', 'Reinforcement Learning', 'Neural Networks'],
      description: `Implementation of Deep Q-Network (DQN) to train an agent to play Atari Pong game from OpenAI Gym.`,
      photo: pongImg,
      link: 'https://github.com/lina994/Topics-in-reinforcement-learning'
    },
    {
      name: 'Hurricane Evacuation Problem: Environment simulator and search agents',
      skills: ['Java', 'Artificial Intelligence'],
      description: `Construction of an environment simulator that runs a path optimization problem on a 
    weighted undirected graph and solving it using simple agents and search agents.`,
      photo: aiImg,
      link: 'https://github.com/lina994/AI_Ass1'
    },
    {
      name: 'Hurricane Evacuation Problem: Cooperating and adversarial agents',
      skills: ['Java', 'Artificial Intelligence'],
      description: `Construction of an environment simulator that runs a path optimization problem on a 
    weighted undirected graph and solving it using game tree search agents.`,
      photo: aiImg,
      link: 'https://github.com/lina994/AI_Ass2'
    },
    {
      name: 'Hurricane Evacuation Problem: Reasoning under uncertainty',
      skills: ['Java', 'Artificial Intelligence'],
      description: `Probabilistic reasoning using Bayes networks, with scenarios similar to the hurricane 
    evacuation problem environmen.`,
      photo: aiImg,
      link: 'https://github.com/lina994/AI_Ass4'
    },
    {
      name: 'Hurricane Evacuation Problem: Decision-making under uncertainty',
      skills: ['Java', 'Artificial Intelligence'],
      description: `Sequential decision making under uncertainty using belief-state MDP for decision-making.`,
      photo: aiImg,
      link: 'https://github.com/lina994/AI_Ass5'
    }
  ]
};

const contentInfo = {
  about: about,
  skills: skills,
  portfolio: portfolio,
  education: education
};

const state = {
  headerInfo: headerInfo,
  contentInfo: contentInfo
};

export default state;