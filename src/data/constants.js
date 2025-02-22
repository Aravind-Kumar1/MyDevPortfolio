import elim from '../images/elim.png'
import news from '../images/news.png'
import event from '../images/event.png'
import smart from '../images/smart.png'
import peters from '../images/peters.png'
import sri from '../images/sri.jpeg'
import html from '../images/html.png'
import css from '../images/css.png'
import java from '../images/java.png'
import sql from '../images/sq.png'
import js from '../images/js.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import boot from '../images/bot.png'
import ax from '../images/ax.png'
import jq from '../images/jq.png'
import jest from '../images/jest.png'
import cy from '../images/cypress.png'
import post from '../images/post.png'
import dev from '../images/dev.png'
import git from '../images/git.png'
import vs from '../images/vs.png'





export const Bio = {
  name: "Aravind Chamaakuri",
  roles: [
    "Software Engineer",
    "Frontend Developer",
  ],
  description:
    "I am a driven and adaptable professional, always ready to embrace new challenges. Passionate about continuous learning, I am committed to delivering exceptional results. With a proactive mindset and a results-oriented approach, I strive to make a meaningful impact and achieve excellence.",
  github: "https://github.com/Aravind-Kumar1",
  resume:
    "https://drive.google.com/file/d/1deddzUv37eelCeQxRKzHNEM8DljxTBNm/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/chamaakuri-aravind/",
  insta: "https://www.instagram.com/aravind_paul01/",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML5", image: html },
      { name: "CSS3", image: css },
      
      { name: "Java", image: java },
      { name: "SQL", image: sql },
      { name: "JavaScript (ES6+)", image: js },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", image: react },
      { name: "Redux", image: redux },
      { name: "Bootstrap", image: boot },
      { name: "Axios", image: ax },
      { name: "jQuery", image: jq },
    ],
  },
  {
    title: "Testing Tools",
    skills: [
      { name: "Jest", image: jest },
      { name: "Cypress", image: cy },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git & GitHub", image: git},
      { name: "VS Code", image: vs },
      { name: "Chrome DevTools", image: dev },
      { name: "Postman", image: post },
    ],
  },

  
];
export const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    project: "Emmanuel Living Impact Mission Website Development",
    date: "2024-25",
    desc: "Spearheaded the design and development of a responsive and dynamic website for Emmanuel Living Impact Mission to enhance user engagement and accessibility across devices. Implemented an intuitive UI using React.js and streamlined communication processes by integrating EmailJS for automated prayer request handling.",
    skills: [
      "React.js",
      "EmailJS",
      "Responsive Design"
    ]
  },
  {
    id: 2,
    role: "Frontend Developer",
    project: "Event Planning Platform",
    date: "2024",
    desc: "Engineered a comprehensive event booking solution for occasions like weddings and corporate events. Developed a visually compelling and device-responsive interface using HTML and CSS, while enhancing user interactivity through JavaScript-driven dynamic form handling.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "User Experience Design"
    ]
  }
];


export const education = [
  {
    id: 0,
    img:peters,
    school: "St.Peter's Engineering College,Hyderabad",
    date: "Oct 2021 - Sep 2025",
    grade: "83.2 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering atSt.Peter's Engineering College,Hyderabad. I have completed 6 semesters and have a CGPA of 83.2. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor in Engineering - BE, Computer Science and Engineering",
  },
  {
    id: 1,
    img: sri,
    school: "Sri Chaitanya Junior College, Hyderabad",
    date: "Apr 2019 - Apr 2021",
    grade: "87.4%",
    desc: "I completed my Intermediate at Sri Chaitanya Junior College,Hyderabad, where I studied MPC(Maths,Physics,Chemistry).",
    degree: "TSBIE(XII), MPC",
  },
  
];

export const projects = [
  {
    id: 1,
    title: "Emmanuel Living Impact Mission Website",
    date: "2024-25",
    description:
      "Engineered a fully responsive and dynamic website for Emmanuel Living Impact Mission, enhancing user engagement and accessibility across devices. Developed an intuitive UI with React.js, integrating EmailJS for automated prayer request submissions to streamline communication within the church community.",
    image: elim,
    tags: ["React.js", "EmailJS", "Responsive Design"],
    category: "web app",
    github: "https://github.com/Aravind-Kumar1/church-community",
    webapp: "https://elimimpact.com/",
  },
  {
    id: 2,
    title: "Event Planning Platform",
    date: "2024",
    description:
      "Developed a visually appealing and device-responsive platform for event bookings, catering to weddings, birthdays, and corporate events. Built using HTML, CSS, and JavaScript, the platform features dynamic forms and interactive elements for a seamless user experience.",
    image: event,
    tags: ["HTML", "CSS", "JavaScript", "Event Booking"],
    category: "web app",
    github: "https://github.com/Aravind-Kumar1/EventMaster",
    webapp: "https://nimble-monstera-9158e3.netlify.app",
  },
  {
    id: 3,
    title: "SmartRead Platform",
    date: "2024",
    description:
      "Developed an advanced book and audiobook platform featuring integrated note-taking capabilities to enhance user engagement. Leveraged Firebase for data management and Firestore for real-time updates, creating a seamless reading experience.",
    image: smart,
    tags: ["React", "Firebase", "Firestore", "Note-Taking"],
    category: "web app",
    github: "https://github.com/Aravind-Kumar1/smartread-platform",
    webapp: "https://www.smartread.com",
  },
  // {
  //   id: 4,
  //   title: "FlashFeed News Aggregator",
  //   date: "2023",
  //   description:
  //     "Built a real-time news aggregation platform using the BBC News API. Implemented features for category filtering and social media sharing, enabling users to access up-to-date information conveniently.",
  //   image: news,
  //   tags: ["HTML", "CSS", "JavaScript", "News API"],
  //   category: "web app",
  //   github: "https://github.com/Aravind-Kumar1/flashfeed-news-app",
  //   webapp: "https://www.flashfeed.com",
  // }
];

