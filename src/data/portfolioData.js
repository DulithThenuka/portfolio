export const portfolioData = {
  personal: {
    name: "Dulith Thenuka",
    role: "Associate Software Engineer",
    subtitle: "Software Engineering Undergraduate & Full-Stack Developer",
    headline: "Engineering scalable web applications, robust Spring Boot backends, and intelligent software systems.",
    bio: "Motivated Software Engineering Undergraduate and Full Stack Developer with a strong foundation in software and web application development. Experienced in developing user-friendly interfaces, implementing backend functionality, and integrating databases to build practical software solutions. Skilled in problem-solving, application development, and working with modern technologies. Passionate about building innovative, scalable applications, continuously improving technical skills, and contributing to collaborative software development projects.",
    careerGoals: "Aiming to leverage full-stack capabilities, cloud-native architectures, and software engineering design principles to engineer high-throughput systems and resilient digital platforms while growing as an Associate Software Engineer.",
    location: "Colombo, Sri Lanka",
    phone: "0715667783",
    email: "duliththenuka912@gmail.com",
    github: "https://github.com/DulithThenuka",
    linkedin: "https://www.linkedin.com/in/dulith-thenuka-0a85443b0",
    resumeUrl: "/Dulith_Thenuka_CV.pdf", // Link to resume PDF / download
    status: "Open for Software Engineering Opportunities"
  },

  stats: [
    { label: "Institution", value: "NSBM Green University" },
    { label: "Core Focus", value: "Java & Spring Boot" },
    { label: "Public Repositories", value: "10+ on GitHub" },
    { label: "Tech Stack", value: "Full-Stack Web" }
  ],

  // Core highlighted skills: Java, Python, React, Angular, Spring Boot, MySQL
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
      title: "AgroLink – Smart Agriculture Marketplace & Supply Chain Platform",
      category: "FULL-STACK & ENTERPRISE",
      featured: true,
      description: "An enterprise digital agriculture platform connecting smallholder farmers directly with commercial buyers, agricultural suppliers, and logistics fleets. Designed to eliminate predatory middlemen, ensure price transparency, and streamline agricultural commerce from seed to supermarket.",
      techStack: ["Java 17", "Spring Boot 3", "Spring Security", "JWT", "React", "Tailwind CSS", "MySQL", "Vite", "REST API"],
      highlights: [
        "Multi-Role Portals & Security: Built 5 tailored stakeholder workspaces (Farmer, Buyer, Supplier, Logistics, Admin) protected by Spring Security, stateless JWT authentication, and automated session interceptors.",
        "Traceability & Escrow Protection: Implemented verifiable batch passport tracking (BATCH-xxxx) for origin verification, along with milestone-based escrow payment workflows and dispute resolution.",
        "Agricultural Intelligence & Logistics: Integrated smart crop advisory, harvest forecasting analytics, machinery rentals, and automated order dispatch tracking across Sri Lankan farming districts."
      ],
      github: "https://github.com/DulithThenuka/agrolink",
      live: "https://github.com/DulithThenuka/agrolink"
    },
    {
      id: "disaster-management",
      title: "Araksha-LK & Humanitarian Crisis Platform",
      category: "Public Sector & GIS",
      featured: true,
      description: "A comprehensive disaster relief management platform coordinating emergency response during natural disasters in Sri Lanka. Features emergency incident reporting, volunteer allocation, shelter management, and interactive crisis mapping.",
      techStack: ["Spring Boot", "React", "Leaflet GIS", "MySQL", "WebSocket", "Tailwind CSS"],
      highlights: [
        "Real-time emergency incident reporting with severity triage and provincial tracking",
        "Interactive crisis mapping with Leaflet.js for shelter capacity and relief allocation",
        "Volunteer coordination portal with role-based dispatch workflows"
      ],
      github: "https://github.com/DulithThenuka/Araksha-LK-Disaster-Relief-System",
      live: "https://github.com/DulithThenuka/humanitarian-crisis-management-platform"
    },
    {
      id: "oceansafe",
      title: "OceanSafe – Marine Safety & Hazard Alert System",
      category: "Emergency & IoT",
      featured: true,
      description: "A maritime safety telemetry platform built for coastal fishing communities and harbor authorities. Provides real-time marine weather alert broadcasts, high-risk ocean zone mapping, and emergency distress beacon logging.",
      techStack: ["Java", "Spring Boot", "React", "MySQL", "Leaflet GIS", "Tailwind CSS"],
      highlights: [
        "Interactive hazard mapping with live maritime coordinates and weather telemetry",
        "Automated emergency SOS broadcasting and harbor dispatch notifications",
        "High-performance backend API with optimized geospatial queries"
      ],
      github: "https://github.com/DulithThenuka/Araksha-LK-Disaster-Relief-System",
      live: "https://github.com/DulithThenuka"
    },
    {
      id: "growlink",
      title: "GrowLink – Skill Sharing & Collaboration Platform",
      category: "Industrial Project",
      featured: true,
      description: "An industrial-grade platform designed to help users share skills, discover like-minded collaborators, request learning opportunities, and build meaningful software projects together.",
      techStack: ["Java", "Spring Boot", "React / Angular", "MySQL", "REST APIs"],
      highlights: [
        "Engineered user profiles, skill requests, project collaboration workspaces, and messaging",
        "Spring Boot microservice backend with robust notification pipelines"
      ],
      github: "https://github.com/DulithThenuka/GrowLink",
      live: "https://github.com/DulithThenuka/GrowLink"
    },
    {
      id: "ai-devsec",
      title: "AI DevSec Platform – DevOps & Vulnerability Scanner",
      category: "AI & Cloud",
      featured: false,
      description: "An AI-powered DevOps and security platform built to inspect code repositories, automate static analysis vulnerability detection, generate AI-assisted code reviews, and streamline containerized CI/CD deployments.",
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "AWS", "JWT"],
      highlights: [
        "Automated repository scanning and vulnerability triage with AI review insights",
        "JWT-secured REST API architecture containerized with Docker for AWS deployment"
      ],
      github: "https://github.com/DulithThenuka/ai-devsec-platform",
      live: "https://github.com/DulithThenuka/ai-devsec-platform"
    },
    {
      id: "studyflow-ai",
      title: "StudyFlow AI – Smart Study Planner & Focus SaaS",
      category: "AI & Web SaaS",
      featured: false,
      description: "A full-stack smart study planner application designed to help students organize tasks, manage subjects, improve focus with Pomodoro sessions, and track academic analytics through a modern SaaS interface.",
      techStack: ["PHP MVC", "MySQL", "JavaScript", "Chart.js", "Custom UI"],
      highlights: [
        "Smart task recommendations, deadline triage, and difficulty ratings",
        "Integrated Pomodoro focus sessions and interactive Chart.js analytics"
      ],
      github: "https://github.com/DulithThenuka/studyflow-ai",
      live: "https://github.com/DulithThenuka/studyflow-ai"
    },
    {
      id: "nextgen-mobile-care",
      title: "NextGen Mobile Care – Repair & E-Commerce",
      category: "Full-Stack",
      featured: false,
      description: "A web-based platform for mobile repair bookings, diagnostic status tracking, and an electronics e-commerce store with full shopping cart and order processing.",
      techStack: ["PHP MVC", "MySQL", "Tailwind CSS", "JavaScript"],
      highlights: [
        "Modular MVC architecture separating repair diagnostic workflow from e-commerce",
        "Clean, responsive mobile-first UI designed using Tailwind CSS"
      ],
      github: "https://github.com/DulithThenuka/nextgen-mobile-care",
      live: "https://github.com/DulithThenuka/nextgen-mobile-care"
    },
    {
      id: "gamehub-pro",
      title: "GameHub Pro – Digital Game Library Web App",
      category: "Web Application",
      featured: false,
      description: "A full-stack application for managing and exploring a curated digital game catalog with dynamic filtering, rating breakdowns, and database persistence.",
      techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "HTML/CSS"],
      highlights: [
        "Spring Data JPA integration with MySQL relational database",
        "Dynamic server-rendered Thymeleaf templates for responsive game browsing"
      ],
      github: "https://github.com/DulithThenuka/gamehub-pro",
      live: "https://github.com/DulithThenuka/gamehub-pro"
    },
    {
      id: "fleetpro",
      title: "FleetPro – Enterprise Fleet Management",
      category: "Enterprise System",
      featured: false,
      description: "An enterprise fleet management application designed for corporate transport logistics, vehicle maintenance scheduling, fuel expenditure tracking, and driver assignments.",
      techStack: ["C#", "WPF", ".NET 10", "SQL Server", "Clean Architecture"],
      highlights: [
        "Built with Clean Architecture patterns, repository abstractions, and dependency injection",
        "Real-time fleet diagnostics, service log audits, and expense reports"
      ],
      github: "https://github.com/DulithThenuka/FleetPro",
      live: "https://github.com/DulithThenuka/FleetPro"
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
