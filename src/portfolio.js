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
  username: "A.J/R",
  title: "Hi all, I'm Akhtar",
  subTitle: emoji(
    "Computer Science student at Bina Nusantara University who builds real-world AI and fullstack systems. from machine learning models to production-ready web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LZ6NTXd0lkZc9FBeS08K1dJEHCJPgDy4/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JustALearner101",
  linkedin: "https://www.linkedin.com/in/akhtar-jaffan-ramadhan/",
  gmail: "akhtar.ramadhan01@gmail.com",
  gitlab: "https://gitlab.com/akhtar.ramadhan01",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@akhtar.ramadhan01",
  stackoverflow: "https://stackoverflow.com/users/27552493/tar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "BUILDING REAL-WORLD AI AND FULLSTACK SYSTEMS",

  skills: [
    emoji(
      "⚡ Design and develop end-to-end applications, from machine learning models to production-ready web systems."
    ),
    emoji(
      "⚡ Hands-on experience in AI/ML (Computer Vision, LLM, classic ML) and fullstack development for real-world use cases."
    )
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Binus University",
      logo: require("./assets/images/binusLogo2.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 - Present",
      desc: "Focusing on Machine Learning and Software Development.",
      descBullets: [
        "Leading an initiative encouraging students to build portfolios.",
        "Keen on exploring sustainable development through technology.",
        "Frequently involved in developing various types of machine learning models to solve complex problems."
      ]
    },
    {
      schoolName: "SMAIT Thariq Bin Ziyad",
      logo: require("./assets/images/thariqLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Graduated from a science major (IPA) in high school, fostering a strong foundation in analytical thinking and problem-solving.",
      descBullets: [
        "Appointed as Head of Public Relation and IT Division of Thariq Festival 12",
        "Recommended to be part of the Class Deliberation Assembly"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Machine Learning & AI",
      progressPercentage: "85%"
    },
    {
      Stack: "Computer Vision (CNN, Transfer Learning)",
      progressPercentage: "80%"
    },
    {
      Stack: "LLM & NLP (LLaMA, Prompting, Fine-tuning)",
      progressPercentage: "75%"
    },
    {
      Stack: "Fullstack Web Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend Systems & APIs",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Fullstack Developer Intern",
      company: "Magna Solusi Indonesia",
      companylogo: require("./assets/images/magnaLogo.png"),
      date: "Feb 2025 – Aug 2025",
      desc: "Worked in a fast-paced consultancy environment delivering enterprise web applications for logistics and education sectors.",
      descBullets: [
        "Developed and deployed fullstack applications using Angular, Spring Framework, and ASP .NET Core.",
        "Collaborated across frontend, backend, and database layers to deliver production-ready systems.",
        "Handled bug fixing, feature enhancements, and production support across multiple client projects.",
        "Participated in UAT sessions and client-site deployments to ensure system reliability and usability."
      ]
    }
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
  subtitle: "PROJECTS THAT I GOT INVOLVED OR DIRECTED BY MYSELF",
  projects: [
    {
      image: require("./assets/images/noteitLogo.png"),
      projectName: "NoteIT",
      projectDesc:
        "Website Heavily Inspired by NotebookLM from Google, A note-taking app powered by an LLM for efficient research assistance and for studying, Currently in Development",
      footerLink: [
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Signfinity_Logo.png"),
      projectName: "Signfinity",
      projectDesc:
        "Signfinity is an innovative app enhancing communication for deaf and mute individuals by enabling custom language creation. It features data collection, visual analytics, and supports various machine learning models like Random Forest, Decision Tree, K-Nearest Neighbors, SVM, Naive Bayes, and CNN, with upcoming Azure Machine Learning integrations.",
      footerLink: [
        {
          name: "See Video Documentation",
          url: "https://youtu.be/tIWqfG8pJoQ?si=bKWhauc69-TSvvoN"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Selected Achievements & Credentials 🏆"),
  subtitle:
    "Selected achievements, certifications, and intensive programs demonstrating continuous growth in AI and software engineering.",

  achievementsCards: [
    {
      title: "Machine Learning Cohort",
      subtitle:
        "Selected Participant — 6-Month Intensive Program by DBS Foundation",
      image: require("./assets/images/DBS.png"),
      imageAlt: "DBS Foundation Logo",
      footerLink: [
        {
          name: "Program Overview",
          url: "https://www.dbs.com/foundation/index.html"
        },
        {
          name: "Certificate of Completion",
          url: "https://drive.google.com/file/d/17sOBbB7uuQS9jsWYq1qgescV5bCuV9PT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Top 20 Participant — BINUS AI4A Hackathon 2024",
      subtitle:
        "Ranked Top 20 out of 200+ participants for an AI-based accessibility project",
      image: require("./assets/images/binusLogo2.png"),
      imageAlt: "BINUS Logo",
      footerLink: [
        {
          name: "Project Video Demo",
          url: "https://youtu.be/tIWqfG8pJoQ?si=bKWhauc69-TSvvoN"
        },
        {
          name: "GitHub Repository",
          url: "https://github.com/adyamp107/Signfinity/tree/main"
        }
      ]
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      subtitle:
        "Official Microsoft Certification — AI concepts, NLP, computer vision, and responsible AI",
      image: require("./assets/images/microsoftLogo2.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1ozgwz7h8tShMFgz31myIMTc00absX9ix/view?usp=sharing"
        }
      ]
    },
    {
      title: "Skill Academy Pro — Mastering AI",
      subtitle:
        "Completed an end-to-end AI bootcamp covering model development, evaluation, and deployment",
      image: require("./assets/images/rea.png"),
      imageAlt: "Skill Academy Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1se8A5oMneY7RZivY2hxu9tQUOLdrO2SN/view?usp=sharing"
        }
      ]
    }
  ],

  display: true
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
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62 857-1430-7850",
  email_address: "akhtar.ramadhan01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

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
  resumeSection
};
