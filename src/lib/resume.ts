import { Briefcase, BrainCircuit, Award, GraduationCap, Lightbulb, Star, Zap, UserCheck } from 'lucide-react';

export const resumeData = {
  professionalSummary: "Full-Stack Software Developer & Mechatronics Engineering student with expertise in Java/Spring Boot backends, modern React/Next.js frontends, and networking fundamentals. Specialized in building scalable backend systems with microservices, event-driven architecture, and real-time communication. Strong cybersecurity foundations and currently expanding into game development with Unity. Proficient with TanStack ecosystem for advanced state management and data handling. Experienced with Kafka, Redis, Elasticsearch, and relational databases. Strong interest in system design, security architecture, networking protocols, and performance optimization.",
  technicalSkills: [
    {
      category: "Backend & APIs",
      icon: Zap,
      skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "GraphQL", "Microservices architecture", "Role-based access control (RBAC)", "JWT authentication", "Node.js", "Express.js"]
    },
    {
      category: "Frontend & Modern Web",
      icon: BrainCircuit,
      skills: ["React", "Next.js", "TypeScript", "TanStack Query", "TanStack Table", "TanStack Router", "Tailwind CSS", "shadcn/ui", "Component-driven architecture"]
    },
    {
      category: "Distributed Systems & Networking",
      icon: Briefcase,
      skills: ["Apache Kafka", "Redis (caching, sessions)", "WebSockets & socket programming", "Networking fundamentals", "TCP/IP protocols", "HTTP/HTTPS", "Real-time communication (STOMP)", "Network architecture"]
    },
    {
      category: "Databases & Search",
      icon: Briefcase,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch", "Prisma ORM", "Data modeling & query optimization", "Relational schema design"]
    },
    {
      category: "Security & Cybersecurity",
      icon: Lightbulb,
      skills: ["Backend security fundamentals", "Authentication & authorization", "Secure API design", "Cryptography basics", "Common vulnerabilities (OWASP)", "Network security", "Secure coding practices", "Cybersecurity concepts"]
    },
    {
      category: "DevOps, Systems & Game Dev",
      icon: Briefcase,
      skills: ["Linux (daily usage)", "Docker & containerization", "Git & GitHub", "Unity (currently learning)", "C/C++", "ESP32 & embedded systems", "CAD & 3D modeling (Blender)"]
    },
    {
      category: "Other Technologies",
      icon: Star,
      skills: ["Python (Flask, NumPy, Pandas)", "Maven & Gradle", "Postman & API testing", "JetBrains IDEs — advanced usage", "OpenAPI/Swagger"]
    }
  ],
  projects: [
    {
      title: "BonRaccoon Studios — Full-Stack Platform",
      technologies: "TanStack Start, Spring Boot, React, TypeScript, PostgreSQL, JWT",
      description: [
        "Frontend: Built with React & TanStack ecosystem for modern, maintainable state management and data handling.",
        "Backend: Designed Spring Boot REST API with JWT security, role-based access control, and microservices patterns.",
        "Integrated real-time communications using WebSockets for studio updates and game showcases.",
        "Implemented comprehensive admin dashboard with secure authentication and content management.",
        "Applied networking principles for client-server communication and WebSocket real-time data flow."
      ]
    },
    {
      title: "E-Commerce Backend System",
      technologies: "Spring Boot, Spring Security, MySQL, Redis, Networking",
      description: [
        "Built a full-featured e-commerce backend with secure authentication and role-based access control.",
        "Implemented user management, product catalog, order processing, and protected admin endpoints.",
        "Designed scalable REST APIs with proper validation, error handling, and network protocol optimization.",
        "Applied cybersecurity best practices to prevent unauthorized access and secure data transmission."
      ]
    },
    {
      title: "Next.js Full-Stack E-Commerce Application",
      technologies: "Next.js, React, TypeScript, Prisma, PostgreSQL, Tailwind CSS",
      description: [
        "Built an adaptable e-commerce application with dynamic content management.",
        "Implemented full-stack architecture with Next.js server and client components.",
        "Applied TanStack patterns for efficient data fetching and client-side state management.",
        "Designed for easy configuration and reusability without rebuilding the application."
      ]
    },
    {
      title: "Real-Time Chat Application Server",
      technologies: "Java, Spring Boot, WebSockets, Socket Programming, Networking",
      description: [
        "Developed a real-time chat server using WebSocket and socket programming for low-latency communication.",
        "Managed concurrent client connections and message routing with networking protocols.",
        "Implemented secure message exchange with encryption and authentication.",
        "Focused on performance, reliability, and handling high-volume concurrent connections."
      ]
    },
    {
      title: "Learning & Emerging Technologies",
      technologies: "Unity, C#, Cybersecurity, Network Security, Game Development",
      description: [
        "Currently learning game development with Unity and C# for interactive experiences.",
        "Studying cybersecurity fundamentals, network security, and secure coding practices.",
        "Exploring embedded networking with ESP32 and IoT protocols (MQTT, TCP/IP).",
        "Combining mechatronics knowledge with modern web and game development skills."
      ]
    }
  ],
  education: {
    degree: "Bachelor of Engineering — Mechatronics Engineering",
    university: "Murang’a University of Technology",
    status: "Currently in Second Year",
    icon: GraduationCap,
  },
  certifications: [
    {
      title: "Basic IT Skills Certificate — Software Development",
      institution: "Modcom Institute",
      icon: Award,
    }
  ],
  softSkills: [
    "Strong leadership and communication skills",
    "Excellent problem-solving ability",
    "High curiosity for how systems work behind the scenes",
    "Fast learner, comfortable with new languages and technologies",
    "Highly productive with modern development tools",
    "Strong networking and cybersecurity mindset"
  ],
  interests: [
    "Backend architecture & system design",
    "Networking fundamentals & protocols",
    "Security engineering & cybersecurity",
    "Distributed systems & microservices",
    "Performance optimization & scalability",
    "Operating systems & network security",
    "Game development (currently learning Unity)",
    "Full-stack development with React, Next.js & TanStack ecosystem",
    "Real-time communication systems"
  ]
};
