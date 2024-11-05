import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";


export const HERO_CONTENT = 'I am a junior web developer, with a strong foundation in building dynamic and responsive web applications. As a 3rd-year BSIT student at Caraga State University, I have developed skills in front-end technologies like React and Next.js, alongside back-end technologies such as Node.js, MySQL, and MongoDB. I aim to apply my knowledge to create innovative solutions that enhance user experiences and contribute to business success.';

export const ABOUT_TEXT = 'I am a dedicated and versatile junior web developer currently studying as a 3rd-year BSIT student at Caraga State University. My journey in web development began with a deep curiosity for how things work, and it has grown into a passion for creating efficient and user-friendly web applications. I am learning and working with various technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.';

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Project Lead - TutorHive (Campus-Based Tutoring Platform)",
    organization: "Caraga State University",
    description: `Leading the development of 'TutorHive,' a responsive campus-based tutoring platform. Utilizing Laravel and Vue.js for the backend and frontend, with PostgreSQL as the primary database. Managing a team to implement features like user authentication, real-time notifications, and a tutor search system. Ensuring responsive design across devices using Vuetify and Tailwind CSS.`,
    technologies: ["Laravel", "Vue.js", "Vuetify", "PostgreSQL", "Tailwind CSS"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer - Weather App Project",
    organization: "Personal Project",
    description: `Developed a weather app using Vue.js and Vuetify, focusing on creating an intuitive user interface with dynamic background effects based on weather conditions. Integrated with a weather API and emphasized accessibility and performance.`,
    technologies: ["Vue.js", "Vuetify", "Weather API"],
  },
  {
    year: "2023",
    role: "Full Stack Developer - E-commerce Platform",
    organization: "Freelance Project",
    description: `Built a fully-functional e-commerce platform featuring product listings, user authentication, and a shopping cart system. Implemented a responsive design using React for the frontend and Node.js for server-side operations, with MongoDB for handling user and product data.`,
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    year: "2022",
    role: "Frontend Developer Intern - Task Management App",
    organization: "TechHub - Student Organization",
    description: `Collaborated on a task management application using React, focusing on enhancing the user experience and adding new features such as task filtering and notifications. Integrated with backend APIs to synchronize tasks and support real-time updates.`,
    technologies: ["React", "Node.js", "REST API"],
  },
  {
    year: "2021",
    role: "Web Developer - Portfolio Website",
    organization: "Freelance Project",
    description: `Designed and developed a personal portfolio website showcasing web development projects. Utilized HTML, CSS, and JavaScript for static content, then upgraded to React for a more dynamic experience. Focused on modern design principles and responsive layouts.`,
    technologies: ["React", "HTML", "CSS", "JavaScript"],
  }
];

export const PROJECTS = [
  {
    title: "Classify",
    image: project1,
    description:
      "A mobile app for students to easily view and manage their class schedules, with features like timetable viewing, course details, and notifications for upcoming classes.",
    technologies: ["Supabase", "Bootstrap", "Android Studio", "JavaScript", "React Native"],
  },
  {
    title: "To-Do List Webpage",
    image: project2,
    description:
      "A task management application that helps users organize and track their daily tasks and project goals. Key features include task creation, categorization, assignment, and real-time progress tracking, making it ideal for individual productivity and team collaboration.",
    technologies: ["Vue.js", "Vuetify", "Tailwind"], 
  },
  {
    title: "Weather Forecast Website",
    image: project3,
    description:
      "A dynamic weather forecasting website that provides users with up-to-date weather conditions, forecasts, and alerts based on their location. The app uses a clean, responsive design and color-coded backgrounds to represent different weather conditions, making it visually engaging and easy to navigate.",
    technologies: ["Vue.js", "Tailwind", "Laravel"], 
  },
  {
    title: "TutorHive",
    image: project4,
    description:
      "A campus-based tutoring platform designed to connect students with qualified tutors within their university. TutorHive offers a streamlined interface where students can browse tutor profiles, view subjects of expertise, schedule sessions, and track their learning progress. The platform aims to enhance learning accessibility and improve academic support for students.",
    technologies: ["Tailwind", "Vue.js", "Supabase", "Laravel"], 
  },
];

export const Certificates = [
  {
    title: "JavaScript Certificate",
    image: 'certjs', // This key matches the one in the imageMap
    description:
      "This certificate demonstrates proficiency in JavaScript, a fundamental technology used for building interactive web applications. Skills from this certification were applied to projects, enabling dynamic user interfaces, form validations, and real-time updates.",
    technologies: ["JavaScript"],
  },

    {
      title: "Java Certificate",
      image: 'certjava',
      description:
        "Certified in Java programming, a versatile language commonly used in back-end development. This certification supported server-side logic, application structure, and database interactions, ensuring efficient data handling and smooth operations for larger applications.",
      technologies: ["Java"],
    },
    {
      title: "HTML Certificate",
      image: 'certhtml',
      description:
        "The HTML certification reflects mastery of web structure and semantics. The knowledge gained was foundational in constructing the skeleton of various web projects, ensuring clean, accessible, and well-organized code for front-end layouts.",
      technologies: ["HTML"],
    },
    {
      title: "CSS Certificate",
      image: 'certcss',
      description:
        "Certified in CSS, essential for styling and responsive design. This certification allowed the creation of visually appealing, user-friendly designs for web projects. Advanced CSS techniques were utilized to ensure responsive, mobile-friendly layouts across all devices.",
      technologies: ["CSS"],
    },
    {
      title: "Java Intermediate Certificate",
      image: 'certjavainter',
      description:
        "This certification highlights advanced skills in Java, including deeper understanding of object-oriented programming and back-end integration. The knowledge was applied in managing more complex tasks such as implementing APIs, handling server requests, and database connections.",
      technologies: ["Java (Intermediate)"],
    },
  ];

export const CONTACT = {
  address: "Magallanes, Agusan del Norte ",
  phoneNo: "09222222222 ",
  email: "becherante@gmail.com",
};
