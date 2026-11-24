export const portfolioData = {
  personal: {
    name: "Dulith Thenuka",
    role: "Associate Software Engineer",
    subtitle: "Software Engineering Undergraduate & Full-Stack Developer",
    headline: "Engineering scalable web applications, robust Spring Boot backends, and intelligent software systems.",
    bio: "Motivated Software Engineering Undergraduate and Full Stack Developer with a strong foundation in software and web application development. Experienced in developing user-friendly interfaces, implementing backend functionality, and integrating databases to build practical software solutions. Skilled in problem-solving, application development, and working with modern technologies. Passionate about building innovative, scalable applications, continuously improving technical skills, and contributing to collaborative software development projects.",
    careerGoals: "Aiming to leverage full-stack capabilities, cloud-native architectures, and software engineering design principles to engineer high-throughput systems and resilient digital platforms while growing as an Associate Software Engineer.",
    location: "Colombo, Sri Lanka",
    phone: "071-566783",
    email: "duliththenuka912@gmail.com",
    github: "https://github.com/DulithThenuka",
    linkedin: "https://www.linkedin.com/in/dulith-thenuka-0a85443b0",
    resumeUrl: "#", // Link to resume PDF / download
    status: "Open for Software Engineering Opportunities"
  },

  stats: [
    { label: "Institution", value: "NSBM Green University" },
    { label: "Core Focus", value: "Java & Spring Boot" },
    { label: "Featured Projects", value: "8+ Built" },
    { label: "Tech Stack", value: "Full-Stack Web" }
  ],

  // Core highlighted skills as requested: Java, Python, React, Angular, Spring Boot, MySQL
  coreHighlights: [
    { name: "Java", category: "Backend", level: "Proficient" },
    { name: "Python", category: "Language & AI", level: "Proficient" },
    { name: "React", category: "Frontend", level: "Advanced" },
    { name: "Angular", category: "Frontend", level: "Intermediate" },
    { name: "Spring Boot", category: "Backend & Microservices", level: "Advanced" },
    { name: "MySQL", category: "Database", level: "Advanced" },
  ],

  skills: {
    "Backend & Architecture": [
      { name: "Java", level: "Proficient" },
      { name: "Spring Boot", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "PHP MVC", level: "Intermediate" },
      { name: "RESTful API Integration", level: "Advanced" },
      { name: "Microservices & Security", level: "Intermediate" }
    ],
    "Frontend & Mobile": [
      { name: "React", level: "Advanced" },
      { name: "Angular", level: "Intermediate" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "React Native", level: "Intermediate" },
      { name: "Tailwind CSS & CSS3", level: "Expert" },
      { name: "HTML5", level: "Expert" }
    ],
    "Databases & Cloud": [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS Basics", level: "Familiar" },
      { name: "Git & Version Control", level: "Advanced" }
    ],
    "Design & Methodologies": [
      { name: "Figma UI/UX", level: "Intermediate" },
      { name: "Agile & Scrum", level: "Practitioner" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced" },
      { name: "Database Design & Normalization", level: "Advanced" }
    ]
  },

  projects: [
    {
      id: "agrolink",
      title: "AgroLink – Smart Agriculture Marketplace",
      category: "Full-Stack & Enterprise",
      featured: true,
      description: "A web-based digital agriculture marketplace connecting farmers directly with commercial buyers. Implemented crop listing management, market pricing insights, and order workflows to eliminate intermediaries.",
      techStack: ["Java", "Spring Boot", "MySQL", "React", "REST API", "Tailwind CSS"],
      highlights: [
        "Built responsive marketplace functionality with Spring Boot REST controllers",
        "Implemented secure crop catalog, inventory tracking, and transaction records in MySQL",
        "Empowers local agricultural suppliers with fair pricing transparency"
      ],
      github: "https://github.com/DulithThenuka",
      live: "https://github.com/DulithThenuka"
    },
    {
      id: "oceansafe",
      title: "OceanSafe – Maritime Safety & Hazard Warning System",
      category: "Emergency & GIS",
      featured: true,
      description: "A digital safety platform built for coastal fishing communities, port authorities, and maritime surveillance. Provides real-time marine weather alerts, high-risk ocean zone mapping, and emergency distress beacon logging.",
      techStack: ["Java", "Spring Boot", "React", "MySQL", "Leaflet GIS", "Tailwind CSS"],
      highlights: [
        "Interactive hazard mapping with live maritime coordinates and weather telemetry",
        "Automated emergency SOS event broadcasting and harbor dispatch notifications",
        "High-performance backend API with optimized geospatial queries"
      ],
      github: "https://github.com/DulithThenuka",
      live: "https://github.com/DulithThenuka"
    },
    {
      id: "disaster-management",
      title: "Smart National Disaster Management Platform",
      category: "Public Sector & IoT",
      featured: true,
      description: "An integrated disaster preparedness and relief coordination platform. Tracks flood, landslide, and adverse weather incidents across provinces, coordinating rescue operations, shelter allocations, and resource logistics.",
      techStack: ["Spring Boot", "Angular / React", "MySQL", "REST APIs", "WebSocket"],
      highlights: [
        "Real-time incident reporting dashboard with severity status triage",
        "Automated relief center inventory management and volunteer allocation",
        "Multi-agency role-based authorization for civil defense teams and responders"
      ],
      github: "https://github.com/DulithThenuka",
      live: "https://github.com/DulithThenuka"
    },
    {
      id: "growlink",
      title: "GrowLink – Skill Sharing & Collaboration Platform",
      category: "Industrial Project",
      featured: true,
      description: "An industrial-grade platform that helps users share skills, discover learning opportunities, connect with mentors, and collaborate on software projects.",
      techStack: ["Spring Boot", "Angular / React", "MySQL", "REST APIs", "WebSockets"],
      highlights: [
        "Implemented user profile portfolios, skill requests, and collaborative project workspaces",
        "Engineered real-time messaging, notifications, and connection workflows using Spring Boot"
      ],
      github: "https://github.com/DulithThenuka",
      live: "https://github.com/DulithThenuka"
    },
    {
      id: "ai-devsec",
      title: "AI DevSec Platform – AI-Powered DevOps & Security",
      category: "AI & Cloud",
      featured: false,
      description: "An AI-powered developer security and code inspection platform focused on repository analysis, vulnerability detection, and automated intelligent code reviews.",
      techStack: ["Python", "FastAPI", "Docker", "AWS", "AI Models", "Git APIs"],
      highlights: [
        "Integrates static code analysis with AI models to pinpoint security vulnerabilities",
        "Explored modern containerized deployment and automated CI pipeline checks"
      ],
      github: "https://github.com/DulithThenuka",
      live: "https://github.com/DulithThenuka"
    },
    {
      id: "studyflow-ai",
      title: "StudyFlow AI – AI-Powered Learning Platform",
      category: "AI & Web",
      featured: false,
      description: "An AI-focused educational application designed to enhance student study efficiency through automated summary generation, intelligent quiz synthesis, and study schedule tracking.",
      techStack: ["React", "Python", "Tailwind CSS", "REST API", "AI APIs"],
      highlights: [
        "Applied modern web architecture to build an interactive student learning workspace",
        "Integrated AI endpoints to generate contextual study materials and productivity tools"
      ],
      github: "https://github.com/DulithThenuka",
      live: "https://github.com/DulithThenuka"
    },
    {
      id: "nextgen-mobile-care",
      title: "NextGen Mobile Care – E-Commerce & Repair Service",
      category: "Full-Stack",
      featured: false,
      description: "A comprehensive web-based platform for mobile phone repair appointment bookings and an electronics e-commerce store with full shopping cart and order tracking.",
      techStack: ["PHP MVC", "MySQL", "Tailwind CSS", "JavaScript"],
      highlights: [
        "Built modular MVC architecture for repair status diagnostics and product catalogs",
        "Designed a responsive and modern mobile-first interface using Tailwind CSS"
      ],
      github: "https://github.com/DulithThenuka",
      live: "https://github.com/DulithThenuka"
    },
    {
      id: "gamehub-pro",
      title: "GameHub Pro – Digital Game Library Web App",
      category: "Web Application",
      featured: false,
      description: "A full-stack application for browsing, categorizing, and managing an extensive catalog of digital video games with user reviews and ratings.",
      techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap/Tailwind"],
      highlights: [
        "Implemented Spring Data JPA queries with MySQL database persistence",
        "Built dynamic server-rendered pages for library discovery and game analytics"
      ],
      github: "https://github.com/DulithThenuka",
      live: "https://github.com/DulithThenuka"
    }
  ],

  education: [
    {
      institution: "NSBM Green University",
      degree: "BSc (Hons) in Software Engineering",
      period: "2025 - Present",
      status: "Undergraduate",
      description: "Undergraduate software engineering studies focusing on object-oriented system development, enterprise application architecture, database engineering, and modern web frameworks.",
      highlights: [
        "Specialization in Enterprise Backend Architecture (Java & Spring Boot) and Modern Full-Stack Web Development",
        "Active contributor to university technical projects, software design exhibitions, and university events"
      ]
    },
    {
      institution: "D.S. Senanayake College",
      degree: "Primary & Secondary Education (G.C.E. A/L & O/L)",
      period: "2009 - 2022",
      status: "Alumnus",
      description: "Solid foundational education with strong performance in mathematics, physical sciences, and computer technologies.",
      highlights: [
        "Active participation in school ICT societies and academic co-curricular activities"
      ]
    }
  ],

  experience: [
    {
      role: "Volunteer – NSBM Career Fair 2026",
      organization: "Career Guidance Unit, NSBM Green University",
      period: "2026",
      type: "University Leadership & Event Coordination",
      responsibilities: [
        "Supported event planning, logistical scheduling, and venue organizing activities for top tech employers.",
        "Coordinated and communicated directly with participating IT and software companies.",
        "Assisted with marketing, brand coordination, and candidate-company interview facilitation."
      ]
    },
    {
      role: "Independent Full-Stack & Industrial Project Developer",
      organization: "Academic & Collaborative Initiatives",
      period: "2024 - Present",
      type: "Software Engineering & Project Delivery",
      responsibilities: [
        "Architected enterprise-ready backend systems using Spring Boot, Java, and MySQL.",
        "Built responsive client applications with React, Angular, and Tailwind CSS.",
        "Practiced clean Git version control, branch management, and collaborative software development."
      ]
    }
  ],

  reference: {
    name: "Miss Sherien Abeygoonesekera",
    title: "Head of the Department in Career Guidance",
    organization: "NSBM Green University",
    email: "careerguidance@nsbm.ac.lk",
    contact: "+94 71 672 6007"
  }
};
