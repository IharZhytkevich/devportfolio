/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Wei Yuxi",
  title: "Hi all, I'm Yuxi",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native, NFT / Web3 / Dex and some other cool libraries and frameworks."
  ),
  resumeLink: "https://resume.io/r/jj2OItsuz", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fierce-dragon",
  linkedin: "https://www.linkedin.com/in/wei-yuxi-237790228/",
  gmail: "wei.yuxi@outlook.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
		emoji("⚡ Generate your own currency or writing smart-contracts on Ethereum Network for Decentralized Exchange"),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
		{
      skillName: "Bitcoin",
      fontAwesomeClassname: "fab fa-bitcoin"
    },
		{
      skillName: "Ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Science and Technology Beijing",
      logo: require("./assets/images/university.png"),
      subHeader: "Bachelor's Degree in Computer Science",
      duration: "Feb 2008 - Aug 2012",
      descBullets: [
				"I was selected for ACM Contest which is given to top 10% of students in college.",
        "I have received award from respected director for consistently best performance in academics."
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Game Develop",
      progressPercentage: "95%"
    },
    {
      Stack: "Defi / NFT Marketplace",
      progressPercentage: "92%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/epichero.png"),
      projectName: "EpicHero 3D NFT Metaverse",
      projectDesc: "Binance Smart Chain",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://epichero.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/holyCows.png"),
      projectName: "Holycows NFT",
      projectDesc: "Ethereum (ETH)-based NFT collectible",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://opensea.io/collection/holycows"
        }
      ]
    },
    {
      image: require("./assets/images/kraken.png"),
      projectName: "Kraken",
      projectDesc: "Bitcoin Trading Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.kraken.com/"
        }
      ]
    },
    {
      image: require("./assets/images/blockonomi.png"),
      projectName: "Blockonomi",
      projectDesc: "Cryptocurrency News",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blockonomi.com/"
        }
      ]
    },
    {
      image: require("./assets/images/krimoni.jpg"),
      projectName: "Krimoni Tours",
      projectDesc: "Leading Travel Company",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://krimoni.com/"
        }
      ]
    },
    {
      image: require("./assets/images/polyyork.jpg"),
      projectName: "Polygon network",
      projectDesc: "Yield Farming Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://polyyork.farm/"
        }
      ]
    },
    {
      image: require("./assets/images/pantherSwap.png"),
      projectName: "Panther Swap",
      projectDesc: "Yield Farm & AMM on Binance Smart Chain",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pantherswap.com/"
        }
      ]
    },
    {
      image: require("./assets/images/cryptoHeroes.png"),
      projectName: "My Crypto Heroes",
      projectDesc: "Block Chain Game",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mycryptoheroes.net/"
        }
      ]
    },
    {
      image: require("./assets/images/dogOB.png"),
      projectName: "Emprunte mon toutou",
      projectDesc: "Dog Owner & Borrower",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.empruntemontoutou.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "HackerRank Certifications that I have done !",

  achievementsCards: [
    {
      title: "React",
      subtitle: "HackerRank Certificate",
      image: require("./assets/images/React-Basic.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/d92ab56518f1"
        }
      ]
    },
    {
      title: "Problem Solving",
      subtitle: "HackerRank Certificate",
      image: require("./assets/images/Problem-Solving.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/2cb9f32d6e2a"
        }
      ]
    },
    {
      title: "CSS",
      subtitle: "HackerRank Certificate",
      image: require("./assets/images/CSS.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.hackerrank.com/certificates/aedf30c31052"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me!"),
  subtitle: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
	bio: "Aspiring Software Developer 👾 | Open Source Contributor 🔥 | Speaker🎙 | Tech Writer ✍️ ",
	location: "Jilin, China",
  number: "+86 17521626266",
	hireable: "Yes",
	avatar: require("./assets/images/avatar.png"),
  email_address: "wei.yuxi@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
