import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    sciquel,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    sciq,
    taxi,
    dash,
    feather,
} from "../assets";

export const navLinks = [{
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

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Designer",
        icon: creator,
    },
];

const technologies = [{
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
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
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "Web Developer Intern",
        company_name: "SciQuel",
        icon: sciquel,
        iconBg: "#383E56",
        date: "February 2022 - May 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborated with a dynamic team of Harvard Medical School students and scientists at SciQuel to develop a mobile application for scientific publications.}",
            "Leveraged Expo to efficiently build and deploy the React Native app on both iOS and Android platforms, ensuring widespread accessibility",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Enginner Intern",
        company_name: "Skinalytics",
        icon: sciq,
        iconBg: "#E6DEDD",
        date: "June 2022 - September 2022",
        points: [
            "Developed and refactored an andorid application using Android Studio and Java",
            "Collaborated on the implementation of a comprehensive feature set, including an intuitive review system, personalized recommendations based on individual skin types, and seamless photo posting functionality.",
            "Utilized Android Studio XML to design and implement the visually appealing main feed post and review view holder.",
            "Demonstrated a strong understanding of software architecture principles by refactoring codebase using the model-view-presenter (MVP) pattern, ensuring a scalable and maintainable code structure.",
        ],
    },
    
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "Analytics Dashboard",
        description: "Developed a server-side MVC application using the LAMP environment, supplemented with Node.js, which included a JavaScript script for efficient and transmission to a REST API, a secure login system with JSON Web Tokens (JWT) for authentication and data transmission, MySQL database for data and login credentials storage, and ZingCharts for visually appealing data visualization.",
        tags: [{
                name: "NodeJS",
                color: "blue-text-gradient",
            },
            {
                name: "MySql",
                color: "green-text-gradient",
            },
            {
                name: "ZingCharts",
                color: "pink-text-gradient",
            },
        ],
        image: dash,
        source_code_link: "https://github.com/",
    },
    {
        name: "Birds of The Feather",
        description: "Developed an Android app for students to search and connect with fellow students who have taken classes together, utilizing XML for front-end design, Java/Java Persistence API for the back-end database, Android Nearby API for device communication, integrating Android permissions for location and Bluetooth, and implementing various design patterns such as Adapter, Observer, Factory Method, and Model View Presenter.",
        tags: [{
                name: "Android Studio",
                color: "blue-text-gradient",
            },
            {
                name: "Java",
                color: "green-text-gradient",
            },
            {
                name: "Bluetooth API",
                color: "pink-text-gradient",
            },
        ],
        image: feather,
        source_code_link: "https://github.com/",
    },
    {
        name: "NYC Taxi Utilization Analysis",
        description: "Utilizing the NYC Borough API and Geo pandas in Python to convert longitude and latitude coordinates into respective boroughs. Additionally, the training set was cross-validated using Ridge Regression, Random Forest Regression, and LightGBM Regressor to predict the target variable.",
        tags: [{
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Geo Pandas",
                color: "green-text-gradient",
            },
            {
                name: "Machine Learning",
                color: "pink-text-gradient",
            },
        ],
        image: taxi,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };