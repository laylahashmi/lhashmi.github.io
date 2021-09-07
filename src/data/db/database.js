import Mock from "../mock";

const database = {
  information: {
    name: 'Subaiyal Sheikh',
    aboutContent: "I build full stack web and mobile applications. By following agile principles I guide my clients through the entire Software Development Lifecycle and ship clean code.",
    age: 27,
    phone: '571 287 3419',
    nationality: 'Pakistani',
    language: 'English, Urdu',
    email: 'subaiyalshk@gmail.com',
    address: '2359 Sawyer Court, California, USA',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/subaiyalshk/',
      dribbble: '',
      github: 'https://github.com/subaiyalShk'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.png',
    aboutImageLg: '/images/about-image-lg.jpeg',
    cvfile: '/files/subaiyalshk_resume.pdf'
  },
  services: [
    {
      title: "Blockchain Apps",
      icon: 'bitcoin',
      details: "My strong foundation in web development has enabled me to build innovative blockchain apps. Having worked at various blockchain projects I have the know how to build DApps."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Wether its a static site or a real-time web application I can build it using any technology stack that fits the requirements."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "I have built multiple mobile applications using a cross platform tool called Flutter (by Google)."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Printing and packaging Website + CMS",
      subtitle: "For this project I used Reactjs for front-end and react-spring for animations. For the backend I used Django RestFramework to serve Json to front end app. This backend also renders static HTML CSS JS for the admin portal which also servers as Content Management System",
      imageUrl: "/images/printpoint.gif",
      // largeImageUrl: ["/images/printpoint.gif"],
      url: 'http://www.printpoint.io'
    },
    {
      id: 2,
      title: "Project Warpdrive",
      subtitle: "This is a Kanban project management web application inspired by Trello board. This web application is build using React + Node + Express + MongoDB (MERN Stack). It utilizes websockets to chat with teamates on projects in real time.",
      imageUrl: "/images/warpdrive.gif",
      // largeImageUrl: [
      //   "/images/warpdrive.gif",
      //   "/images/warpdrive.gif"
      // ],
      url: 'http://34.219.53.126/'
    },
    {
      id: 3,
      title: "Trading bot",
      subtitle: "This a trading bot built using nodejs, expressjs web3js to communiate with the ethereum virual machine. This was accomplished without running a local ethereum instance. The server connects to a remote ethereum RPC instance which is hosted at infura. The Bot listens to price changes for given crypto currency pair at two decentralized exchanges.",
      imageUrl: "/images/blockchain.jpg",
      url: 'https://github.com/subaiyalShk/crypto_pricebot'
    },
    {
      id: 4,
      title: "Door Hopper",
      subtitle: " A cross platform mobile application for door to door sales. The aim of this project was to provide a platform where door to door sales reps can log, schedule presentation and keep track of their performance. This project was built using Flutter to ship IOS and Android apps utilizing NoSQL and firebase for the backend",
      imageUrl: "/images/flutterchat.jpg",
      // largeImageUrl: ["/images/flutterchat.jpg"],
      url: 'https://github.com/subaiyalShk/door_hopper'
    },
    {
      id: 5,
      title: "Blog site- Mahin Tariq",
      subtitle: "This is a simple blog site built to show case client's professional work. Built using Material Ui and all art work is original, designed by closely working with the client.",
      imageUrl: "/images/mahintariq.gif",
      // largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url: 'http://mahintariq.com/'
    },
    {
      id: 6,
      title: "UIWC- United Immigrant Womens Counsil",
      subtitle: "This project is built using Django Rest-framework for backend and ReactJS for Front End. United Immigrant Womens Counsil is a non-profit organization based in Dallas, TX that is helping immigrant women in the USA integrate into society smoothly, provide job opportunites and create a mentor-mentee network of professionals.",
      imageUrl: "/images/uiwc.gif",
      // largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
      url:'http://uiwc.org/'
    },
    
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "May 2021 - Jul 2021",
        position: "Full Stack DApp Developer (Contract)",
        company: "Saint Token",
        details: "Coordinated with an external design team in an agile environment to develop and deploy a fully responsive front-end within 5 days using tracer bullet methodology. Integrated React.JS front end with solidity smart contracts using Ether.js, Web3.JS and Metamask. Setup CI/CD pipeline using Jenkins to drastically reduce test, build and deployment time."
      },
      {
        id: 2,
        year: "Jan 2021 - May 2021",
        position: "Software Engineer / Product Developer (Contract)",
        company: "Tradegrounds Inc",
        details: "Spearheaded R&D by learning Dart, Flutter SDK and Firebase services to build a cross platform mobile app. This reduced development cost without sacrificing performance and produced a lean code base. Provided agile Development using Jira, Confluence and GitLab to coordinate development, testing and integration. Built key mobile app features ; login/logout and real-time delivery dashboard using Firebase SDK and Cloud Firestore."
      },
      {
        id: 3,
        year: "Sep 2019 - Dec 2020",
        position: "Software Engineer / Co-founder",
        company: "Printpoint LLC",
        details: "Lead planning/analysis phase by defining scope, creating sitemap, wireframes and DB Schema.Developed the web application utilizing ReactJS as frontend and Django (python) backend REST API. Leveraged SQLite as a persistence layer since it is fast, small and highly scalable. Deployed this project to AWS using S3 bucket to host static files, EC2 to host backend and leveraged CloudFront edge locations to serve static files from S3 bucket fast and securely."
      },
      {
        id: 4,
        year: "Nov 2016 - December 2017",
        position: "R&D Test Specialist",
        company: "Ecomobix LLC",
        details: "Performed black-box testing of autonomous vehicle (AV) software on the streets of Vancouver (autonomously and manually) with a constant emphasis on safe public operation. Communicated AV behavior patterns to engineers and escalated issues in a timely manner. Performed troubleshooting on AV software. Improved operational efficiency by 30% by assisting with implementation of improved vehicle check in/out system"
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020",
        graduation: "Full Stack Web Development Bootcamp",
        university: "Coding Dojo​",
        details: "1000+ hrs of programing | Python, Java, MERN Stacks. Earned “Black Belt” C​ oding Dojo’s distinguished and highest level of knowledge achievement"
      },
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+1 571-287-3419'],
    emailAddress: ['subaiyalshk@gmail.com', 'subaiyalshk@printpoint.io'],
    address: "2359 Sawyer Ct, Santa Clara, California, USA"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});