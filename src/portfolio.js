/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Samuel Laporte",
  title: "Hi all, I'm Samuel",
  subTitle: emoji(
    ""
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HjnjVCHLsxSw9Lj8gPxtoYB5LPIqjqRD/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/samuel-laporte-034598140/",
  gmail: "laporte.samuel2000@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Specializing in low-level software engineering, particularly in game engines and real-time data applications, leveraging advanced threading techniques and low-level optimizations.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Full-Stack application for your web and mobile applications"
    ),
    emoji("🔧 Drive the implementation of DevOps practices to streamline the development, deployment, and maintenance of your applications."),
    emoji(
      "🎮 Dive into the captivating world of game development, exploring its intricacies and innovations."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-azure"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Polytehcnique Montreal",
      logo: require("./assets/images/PolytechniqueLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2020 - May 2024",
      desc: "",
      descBullets: [
        "Game Architecture",
      ]
    },
    {
      schoolName: "EPFL",
      logo: require("./assets/images/EPFLLogo.jpg"),
      subHeader: "Student Exchange",
      duration: "February 2023 - June 2023",
      desc: "This school ranks among the top 11 universities worldwide for its computer science program, according to the QS World University Rankings.",
      descBullets: ["Advanced Computer Graphics", "Parallelism and Concurrency"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank:  false// Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer Student",
      company: "CAE",
      companylogo: require("./assets/images/CAELogo.png"),
      date: "Jan 2024 - May 2024",
      desc: "Linux compilation support project",
      descBullets: [
        "Update the code base for their build tool in order to support Linux for building software",
        "Modernise the application using new technologies",
        "Presented our group's work to over 100 individuals and provided suggestions for enhancing the application's future development",
        "Implemented the build pipeline in Azure DevOps"
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Uzinakod",
      companylogo: require("./assets/images/UzinakodLogo.jpg"),
      date: "May 2022 - August 2022",
      desc: "",
      descBullets: [
        "Developed a web app using Angular and .NET",
        "Automated some process during the development to ease the work of my peer",
        "Introduced and integrated DevContainer with Docker into our workflow, streamlining our workspace setup and effectively mitigating the \"it works on my machine\" problem"
      ]
    },
    {
      role: "Analyst Developer Intern",
      company: "Bridgestone",
      companylogo: require("./assets/images/BridgestoneLogo.png"),
      date: "May 2021 - August 2021",
      desc: "",
      descBullets: [
        "Developed a web application for streaming the security cameras of the factory",
        "Analysed and presented to the directors and supervisor various software on the market for Temporal Data Collection",
        "Prototyped a defect detection software using computer vision (OpenCV)"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "514-572-7783",
  email_address: "laporte.samuel2000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const personalProject = {
  projects : [
    {
      title: "Nori Engine",
      descriptions: [
        "Nori, a product of my academic journey at EPFL (École Polytechnique Fédérale de Lausanne), Switzerland, stands as a testament to the fruits of diligent exploration and learning. This CPU-based ray tracing engine embodies the culmination of my efforts to grasp the intricacies of computer graphics and render scenes with increasing realism and finesse.",
        "Over the course of the semester, we were tasked with numerous assignments aimed at implementing key features essential to a state-of-the-art rendering engine. These assignments provided practical opportunities to delve into the intricacies of computer graphics, allowing us to gain hands-on experience in developing functionalities commonly found in professional-grade software. Through these exercises, we not only honed our technical skills but also deepened our understanding of the foundational principles underpinning advanced rendering techniques.",
        "At some point for the final project, we had to implement our own feature without the help of the teacher or directive. At the end of the semester, a group a renowed searcher arround the world examined our result in several category like the difficulty of the implementation, the originality of the scene, etc."
      ],
      features: [
        {
          desc: "Simple point light",
          url: require("./assets/images/ajax-simple.png"),
        },
        {
          desc: "Dielectric material",
          url: require("./assets/images/table_ems.png"),
        },
        {
          desc: "Normal Mapping",
          url: require("./assets/images/normal_mapping.png"),
        },
        {
          desc: "Environment Lighting",
          url: require("./assets/images/env_light.png")
        }
      ],
      result: {
        desc: "The final result of my project",
        url: require("./assets/images/result.png")
      }
    },
    {
      title: "Olympus Forge",
      descriptions: [
        "Olympus Forge represents my dive into game engine development, a project born out of a desire to understand every aspect of game creation. It's a simple yet practical engine aimed at rendering graphics and implementing logic for games, with the ultimate goal of participating in game development competitions like Ludum Dare.",
        "Olympus Forge is written in C++ and supports both Windows and Linux platforms. In my development journey, I strive to minimize dependencies, opting instead to implement core functionalities myself to deepen my understanding of the engine. Currently, it supports a range of low-level features",
      ],
      features: [
        {
          desc: "3D Model rendering in .obj file",
          url: require("./assets/images/3DModel.png"),
        }
      ],
      result: {
        desc: "",
        url: ""
      }
    },
  ]
}

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection,
  personalProject
};
