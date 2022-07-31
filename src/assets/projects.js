// import { v4 as uuidv4 } from "uuid";
import ProjectImg1 from "../assets/img1.png";
import ProjectImg2 from "../assets/img2.png";
import ProjectImg3 from "../assets/img3.png";
// import ProjectImg4 from "../assets/girl.jpeg";
// import ProjectImg5 from "../assets/projectImg.png";

const projectsData = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    desc: "This website provides personal backgrounds and recent built projects",
    tech: "Technologies: React, HTML, SCSS",
    img: ProjectImg1,
    website: "https://karencai.dev/",
    github: "https://github.com/gigi0310/gigi0310.github.io",
  },
  {
    id: 2,
    name: "HereI",
    desc: "This is a group project. This app can display all the properties of the trip in an easy-to-use platform: user authentication, waypoints, travel experience screen, Stripe payment gateway, and confirmation email.",
    tech: "Technologies: Nodejs, Express, PSQL, HTML, CSS, JavaScript",
    img: ProjectImg2,
    website: "https://thawing-basin-55117.herokuapp.com/",
    github: "https://github.com/gigi0310/herei",
  },
  {
    id: 3,
    name: "Coin Tracker",
    desc: "This app fetches data from coinGecko API and presents an order list for each cryptocurrency by paginating 10 coins per page. Users can search for the coin which they are interested in. Deploying the App on CI/CD Pipeline using Heroku and GitHub Actions",
    tech: "Technologies: React, Bootstrap, HTML, CSS, Jest",
    img: ProjectImg3,
    website: "https://cryptocurrency-au.herokuapp.com/",
    github: "https://github.com/gigi0310/Cryptocurrency",
  },
  // {
  //   id: 4,
  //   name: "Cavin's Portfolio",
  //   desc: "A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.lalalalal",
  //   img: ProjectImg4,
  // },
  // {
  //   id: 5,
  //   name: "Tracking Soft",
  //   desc: "A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.lalalalala",
  //   img: ProjectImg5,
  // },
];

export default projectsData;
