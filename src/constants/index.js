import {
  web,
  mobile,
  javascript,
  pycharm,
  python,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  nextjsImage,
  mongodb,
  webautomation,
  iphone,
  cloth,
  threejs,
  github,
  Rapidev,
  Emrchains,
  ecodecamp,
  intern,
  GitHub,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Intern",
    icon: intern,
  },
  {
    title: "Mern Stack Development",
    icon: mobile,
  },
  {
    title: "Frontend web Development",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "pycharm",
    icon: pycharm,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "GitHub",
    icon: GitHub,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "nextjsImage",
    icon: nextjsImage,
  },
];

const experiences = [
  {
    title: "Python Intern",
    company_name: "Rapidev NSTP Nust Islamabad",
    icon: Rapidev,
    iconBg: "#383E56",
    date: "October 2023 - Jan 2024",
    points: [
        "Learn about the python basic.",
        "Create application using Selenium.",
        "Web Automation of Social Media Accounts.",
      ],
  },
  {
    title: "Mern Stack Development",
    company_name: "EMRChains NSTP Nust Islamabad",
    icon: Emrchains,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies Nextjs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Web Development",
    company_name: "Ecode Camp pvt ltd",
    icon: ecodecamp,
    iconBg: "#383E56",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Developing and maintaining web applications using React.js, Html, Css, Js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "I thought it was impossible to make an Application as beautiful as our product, but Aqsa Waheed proved me wrong.",
    name: "Husnain",
    designation: "Senior Developer",
    company: "Rapidev",
  },
  {
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Aqsa Waheed does.",
    name: "Majid",
    designation: "Seneior Developer",
    company: "Emrchain",
  },
  {
    testimonial:
    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Umer",
    designation: "Senior Developer",
    company: "Ecode camp pvt ltd",
  },
];

const projects = [
  {
    name: "Web Automation",
    description:
    " Python-Web-crawling/Automation-project.Crawl social accounts(insta,fb,twitter,linkein,reddit).",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    image: webautomation,
    source_code_link: "https://github.com/Aqsawaheedgithub/Python-Web-crawling-project/tree/main",
  },
  {
    name: "IPHONE-Website",
    description:
    "Web application that enables users to This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/Aqsawaheedgithub/IPHONE-",
  },
  {
    name: "clothing websites",
    description:
    "The template is for the Online Clothing Fashion which includes trending wardrobe collection. The website is made from scratch 🥳 and doesn't include any readymade code. Mytalorzone By Sahiba doesn't include anything related to database, it is just a HTML, CSS and JS template. Though you can find some familiar images used in the website taken from various sources, but the purpose is to only make it more beautiful.🖤",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cloth,
    source_code_link: "https://github.com/Aqsawaheedgithub/Mytalorzone-By-Sahiba-clothing-websites",
  },
];

export { services, technologies, experiences, testimonials, projects };