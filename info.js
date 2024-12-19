let info = {
  name: "Phan Đức",
  logo_name: "PD",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "A Software Engineering graduate from Hue University of Sciences, interested in Software Development, UX Design and looking for exciting opportunities related to these fields.<br>I am a detail-oriented person who always prioritizes goals and tasks to maintain high productivity. I bring a strong set of front-end development skills, with expertise in designing and building intuitive user interfaces, optimizing user experiences, and ensuring responsive, high-quality web applications. I believe that the skills I have gained in the dynamic, competitive environment at university have shaped me, and I am excited to apply and further develop them in any front-end development opportunity I receive.",
  links: {
    github: "https://github.com/phanduc172/",
    resume:
      "https://drive.google.com/file/d/1PiK0Dc0eFV7ttKmLWRkqf51kleyvNxEu/view?usp=sharing"
  },
  education: [
    {
      name: "Hue University of Sciences",
      place: "Viet Nam",
      date: "October 2020 - June 2024",
      degree: "Bachelor of Information Technology",
      gpa: "3.34/4.0",
      description:
        "Currently pursuing my Master's in Computer Science, while specializing in the field of Artificial Intelligence and Machine Learning.",
      skills: [
        "C++",
        "Java",
        "Javascript",
        "Vuejs",
        "Angular"
      ]
    },
  ],
  experience: [
    {
      name: "Digital Agricultural Cooperative",
      place: "Hue, VietNam",
      date: "August, 2024 - Present",
      position: "Intern",
      description:
        "Work as a system developer using Vue Framework to build user interfaces for projects.",
      skills: ["VueJS", "Javascript"]
    },
    {
      name: "Brycen LLC",
      place: "Hue, VietNam",
      date: "April, 2024 - June, 2024",
      position: "Intern",
      description:
        "Worked as an in-house system developer using Java and Spring Boot framework combined with Angular Framework for UI.",
      skills: ["Angular", "Java", "Springboot", "Sourcetree", "Typescript"]
    },
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "C++",
        "Java",
        "Javascript",
        "TypeScript",
        "SQL",
        "NoSQL",
      ],
      icon: "fa fa-code"
    },
    // {
    //   title: "data frameworks",
    //   info: [
    //     "Keras",
    //     "Numpy",
    //     "Pandas",
    //     "OpenCV",
    //     "SciPy",
    //     "Sklearn",
    //     "LibROSA",
    //     "Pillow"
    //   ],
    //   icon: "fa fa-cubes"
    // },
    {
      title: "Web Technologies",
      info: ["HTML", "CSS", "Javascript", "Typescript", "Vue", "React", "Node",],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: ["MySQL", "SQLServer", "MongoDB",],
      icon: "fa fa-database"
    },
    {
      title: "Operating systems & Tools",
      info: [
        "Ubuntu",
        "Windows",
        "Sourcetree",
        "Scrum",
        "Jira",
      ],
      icon: "fas fa-tools"
    },
    {
      title: "Design",
      info: ["Photoshop", "Figma", "Corel"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Sentiment Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/one.png")
        },
        {
          img: require("./src/assets/portfolio/smit/two.png")
        },
        {
          img: require("./src/assets/portfolio/smit/three.png")
        },
        {
          img: require("./src/assets/portfolio/smit/four.png")
        }
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png")
        },
        {
          img: require("./src/assets/portfolio/nc/two.png")
        },
        {
          img: require("./src/assets/portfolio/nc/three.png")
        },
        {
          img: require("./src/assets/portfolio/nc/four.png")
        },
        {
          img: require("./src/assets/portfolio/nc/five.png")
        },
        {
          img: require("./src/assets/portfolio/nc/six.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  // portfolio_design: [
  //   {
  //     name: "Guituna",
  //     title: "Guituna - Mockup Design",
  //     pictures: [
  //       {
  //         img: require("./src/assets/designs/coursera1/MoodBoard.png"),
  //         title: "MoodBoard"
  //       },
  //       {
  //         img: require("./src/assets/designs/coursera1/Mockups 1.png"),
  //         title: "Mockups 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/coursera1/Mockups 2.png"),
  //         title: "Mockups 2"
  //       },
  //       {
  //         img: require("./src/assets/designs/coursera1/App Elements.png"),
  //         title: "App Elements"
  //       }
  //     ],
  //     technologies: ["XD", "Illustrator"],
  //     category: "Visual Design",
  //     github: "",
  //     date: "May, 2020 - Jun, 2020",
  //     visit: "",
  //     description:
  //       "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
  //   },
  //   {
  //     name: "Pantree",
  //     title: "Pantree - Mockup Design",
  //     pictures: [
  //       {
  //         img: require("./src/assets/designs/pantree/MoodBoard.png"),
  //         title: "Moodboard"
  //       },
  //       {
  //         img: require("./src/assets/designs/pantree/1.png"),
  //         title: "Mockups 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/pantree/2.png"),
  //         title: "Mockups 2"
  //       }
  //     ],
  //     technologies: ["XD", "Illustrator"],
  //     category: "Visual Design",
  //     github: "",
  //     date: "May, 2020 - July, 2020",
  //     visit: "",
  //     description:
  //       "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
  //   },
  //   {
  //     name: "Bunder",
  //     title: "Bunder - MVP Proposal",
  //     pictures: [
  //       {
  //         img: require("./src/assets/designs/bunder/Moodboard.png"),
  //         title: "Moodboard"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Mockup 1.png"),
  //         title: "Mockup 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Mockup 2.png"),
  //         title: "Mockup 2"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Mockup 3.png"),
  //         title: "Mockup 3"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Market Research 1.png"),
  //         title: "Market Research 1"
  //       },
  //       {
  //         img: require("./src/assets/designs/bunder/Market Research 2.png"),
  //         title: "Market Research 2"
  //       }
  //     ],
  //     technologies: ["XD", "Illustrator"],
  //     category: "Visual Design",
  //     github: "",
  //     date: "May, 2020 - July, 2020",
  //     visit: "",
  //     description:
  //       "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
  //   }
  // ],
  // recommendations: [
  //   {
  //     title:
  //       "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
  //     author: "Ushanas Shastri",
  //     position: "CTO",
  //     company: "Viteos Capital Market Services",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
  //     author: "Anil Dukkipatty",
  //     position: "CTO",
  //     company: "Elemential Labs",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
  //     author: "Chintan Shah",
  //     position: "Director",
  //     company: "Hridayam Soft Solution",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
  //     author: "Mrinal Pai",
  //     position: "Co-Founder & Director",
  //     company: "Skylark Drones",
  //     location: "Bangalore"
  //   }
  // ]
};

export default info;
