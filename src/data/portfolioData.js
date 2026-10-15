export const personalInfo = {
  name: "Sakshi Rajput",
  brand: "sakshi.",
  role: "FULL STACK DEVELOPER",
  experienceYears: "2+",
  headline: {
    start: "Building digital experiences that ",
    accent: "make an impact.",
  },
  bio: "Hi, I'm Sakshi Rajput, a Full Stack Developer passionate about building responsive web applications, cross-platform mobile apps, and reliable backend systems.",
  aboutParagraphs: [
    "I'm a Full Stack Developer with 2+ years of experience developing web and mobile applications. My expertise includes frontend development, backend services, REST API integration, database management, and responsive UI development.",
    "I enjoy solving practical problems, improving application performance, and creating reliable digital experiences. I continuously explore new technologies and aim to build software that delivers real value to users.",
  ],
  location: "Pune, Maharashtra, India",
  email: "rajputsakshig@gmail.com",
  github: "https://github.com/Sakshi221201",
  linkedin: "https://www.linkedin.com/in/sakshi-rajput/",
  resumeUrl: "/SakshiRajput.pdf",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Core Projects", value: "3+" },
    { label: "Tech Stack Tools", value: "15+" },
    { label: "Code Quality", value: "100%" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    description: "Designing modern, fluid, and responsive user interfaces with high performance.",
    skills: [
      { name: "React.js", level: "Core", highlight: true },
      { name: "JavaScript ES6+", level: "Core", highlight: true },
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "Bootstrap", level: "Framework" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    description: "Architecting reliable REST APIs, microservices, and server-side application logic.",
    skills: [
      { name: "Node.js", level: "Runtime", highlight: true },
      { name: "Express.js", level: "Framework", highlight: true },
      { name: "PHP", level: "Language" },
      { name: "CodeIgniter", level: "MVC" },
      { name: "REST APIs", level: "Architecture", highlight: true },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    description: "Structuring schemas, optimizing queries, and managing relational & document stores.",
    skills: [
      { name: "MongoDB", level: "NoSQL", highlight: true },
      { name: "MySQL", level: "Relational", highlight: true },
      { name: "PostgreSQL", level: "Relational" },
    ],
  },
  {
    id: "mobile-tools",
    title: "Mobile Development & Tools",
    icon: "Smartphone",
    description: "Cross-platform mobile apps, version control pipelines, and developer tooling.",
    skills: [
      { name: "React Native", level: "Mobile", highlight: true },
      { name: "Git", level: "VCS", highlight: true },
      { name: "GitHub", level: "Collaboration" },
      { name: "Postman", level: "API Testing" },
      { name: "VS Code", level: "IDE" },
    ],
  },
];

export const projects = [
  {
    id: "grain-distribution",
    title: "Grain Distribution Mobile Application",
    badge: "AgriTech & Mobile App",
    status: "Production Ready",
    category: "Mobile & AI",
    description:
      "Developed a production-ready agricultural mobile application providing real-time grain market prices, commodity updates, advance order booking, distribution management, and AI-powered grain quality analysis.",
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask",
      "REST APIs",
    ],
    features: [
      "Real-time grain market prices.",
      "Advance order booking and order tracking.",
      "Role-based access and authentication.",
      "AI-powered grain quality analysis.",
      "Image upload and quality reports.",
      "Backend API integration.",
    ],
    accentColor: "#64F0D1",
    themeIcon: "Wheat",
    stats: {
      metrics: "Live Market Sync",
      scope: "Enterprise Distribution",
    },
  },
  {
    id: "tpms-iot",
    title: "Real-Time Tire Pressure Monitoring System",
    badge: "IoT Telemetry & BLE",
    status: "Hardware Integrated",
    category: "IoT Mobile",
    description:
      "Developed a mobile application that connects with Bluetooth Low Energy sensors to monitor tire pressure, temperature, battery status, and device information in real time.",
    technologies: [
      "React Native",
      "JavaScript",
      "Bluetooth Low Energy",
      "AsyncStorage",
      "REST APIs",
    ],
    features: [
      "Bluetooth device scanning and pairing.",
      "Live tire pressure and temperature monitoring.",
      "Battery status and sensor information.",
      "Device management and reconnection.",
      "API integration and synchronization.",
    ],
    accentColor: "#7B9CFF",
    themeIcon: "Radio",
    stats: {
      metrics: "< 100ms BLE Latency",
      scope: "4-Wheel Telemetry",
    },
  },
  {
    id: "life-of-chai",
    title: "Life Of Chai — Cafe Management Web Application",
    badge: "Commercial Web Application",
    status: "Active Management",
    category: "Full Stack Web",
    description:
      "Developed and maintained a cafe management web application with responsive user interfaces, dynamic content management, backend functionality, and database-driven features.",
    technologies: [
      "PHP",
      "MySQL",
      "CodeIgniter",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Bootstrap",
    ],
    features: [
      "Responsive web interfaces.",
      "CRUD operations.",
      "Database integration.",
      "Dynamic content management.",
      "Backend development and maintenance.",
    ],
    accentColor: "#64F0D1",
    themeIcon: "Coffee",
    stats: {
      metrics: "Real-Time Orders",
      scope: "Full Store Operations",
    },
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Embel Technologies",
    location: "Pune, India",
    period: "January 2025 – Present",
    current: true,
    description:
      "Working on web and mobile application development, frontend components, backend APIs, database operations, debugging, and production support.",
    highlights: [
      "Developing scalable frontend interfaces and cross-platform mobile features",
      "Building and integrating robust backend REST APIs and database queries",
      "Troubleshooting, debugging issues, and maintaining production availability",
    ],
    technologies: ["React.js", "React Native", "Node.js", "REST APIs", "Production Support"],
  },
  {
    role: "Software Developer",
    company: "CodingBit IT Solutions",
    location: "Nashik, India",
    period: "January 2024 – July 2024",
    current: false,
    description:
      "Contributed to software development, application functionality, database-driven features, and technical problem-solving.",
    highlights: [
      "Implemented dynamic web features and database-driven workflows",
      "Created backend logic and streamlined relational database structures",
      "Participated in agile code reviews and client feature delivery",
    ],
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
  },
];

export const education = {
  degree: "Master of Computer Applications (MCA)",
  institution: "North Maharashtra University",
  duration: "2019–2024",
  grade: "Postgraduate Degree",
  description:
    "Completed rigorous postgraduate academic training specializing in Advanced Computer Science, Software Engineering methodologies, Relational & NoSQL Database Design, and Full Stack Web Application Development.",
  courses: [
    "Object-Oriented Programming & Design Patterns",
    "Database Management Systems & Query Optimization",
    "Web Application Architecture & REST API Design",
    "Data Structures, Algorithms & Problem Solving",
  ],
};
