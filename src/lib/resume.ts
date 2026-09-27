import { Briefcase, BrainCircuit, Award, GraduationCap, Lightbulb, Star, Zap, Cpu, Server, Network, Database } from 'lucide-react';

export const resumeData = {
  professionalSummary: "Software Developer & Mechatronics Engineering student building systems at the intersection of backend engineering, connected vehicles, embedded technology, and IoT. Hands-on experience with Java/Spring Boot microservices, REST APIs, WebSockets, STOMP, MQTT telemetry, relational and document databases, and modern typed web applications. Actively developing MUT 002 electric vehicle platform, Ma3sim transport simulator, and connected fleet architectures.",
  technicalSkills: [
    {
      category: "Software Engineering",
      icon: Server,
      skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "TypeScript", "JavaScript", "React", "Next.js", "JWT"]
    },
    {
      category: "Real-Time & Connected Systems",
      icon: Network,
      skills: ["WebSockets", "STOMP", "MQTT", "TCP/IP protocols", "Telemetry pipelines", "IoT", "Real-time communication"]
    },
    {
      category: "Data & Infrastructure",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Git", "GitHub", "Linux", "Maven", "Gradle", "OpenAPI/Swagger"]
    },
    {
      category: "Engineering & Embedded",
      icon: Cpu,
      skills: ["C/C++", "ESP32", "STM32 (Exploring)", "FreeRTOS (Exploring)", "Autodesk Inventor (CAD)", "AutoCAD", "Blender", "Unity", "Sensors", "Control Systems", "Vehicle Systems"]
    }
  ],
  projects: [
    {
      title: "Fleet Management System",
      technologies: "Java, Spring Boot, MySQL, MongoDB, MQTT, WebSockets, JWT",
      description: [
        "Architected an end-to-end telemetry platform ingesting vehicle feeds via MQTT and streaming live dashboard updates over WebSockets.",
        "Implemented real-time rules engine for overspeeding, low battery/fuel, geofencing breaches, and alert dispatching.",
        "Engineered dual-database persistence separating high-throughput time-series sensor telemetry (MongoDB) from relational fleet records (MySQL)."
      ]
    },
    {
      title: "MUT 002 — Electric Vehicle Platform",
      technologies: "EV Engineering, Autodesk Inventor, BMS, Embedded Systems, ESP32, Power Electronics",
      description: [
        "Developing an electric vehicle platform with CAD structural modeling and spaceframe packaging analysis.",
        "Prototyping custom Battery Management System (BMS) schematic with individual cell temperature/voltage sensing and fail-safe disconnect logic.",
        "Integrating powertrain motor drives, reduction differential packaging, and real-time state of charge (SoC) telemetry."
      ]
    },
    {
      title: "Ma3sim — Kenyan Transport Simulator",
      technologies: "Unity Engine, C#, Blender, Simulation, Vehicle Physics",
      description: [
        "Developing an interactive transport simulation modeling Kenyan urban mobility, SACCO management, and passenger queuing AI.",
        "Built custom vehicle physics for matatus and dynamic route dispatching loops.",
        "Designed 3D vehicle assets, lighting customization, and local environmental architecture in Blender."
      ]
    },
    {
      title: "BonRaccoon Studios — Full-Stack Platform",
      technologies: "TanStack Start, Spring Boot, React, TypeScript, PostgreSQL, JWT",
      description: [
        "Built a decoupled studio platform featuring a modern TanStack Start frontend and an independent Spring Boot administration backend.",
        "Secured administrative CMS workflows and content publishing APIs using stateless JWT authentication with role-based access control (RBAC).",
        "Designed PostgreSQL relational schemas for studio releases, metadata, and game showcase showcases."
      ]
    }
  ],
  education: {
    degree: "BSc Mechatronic Engineering",
    university: "Murang'a University of Technology",
    status: "Currently pursuing",
    icon: GraduationCap,
  },
  certifications: [
    {
      title: "Full Stack Software Development Program",
      institution: "MODCOM Institute",
      icon: Award,
    }
  ],
  softSkills: [
    "Systems-level problem solving across software and hardware",
    "Clear technical communication and documentation",
    "Curiosity for physical computing and mechanical integration",
    "Rapid prototyping and disciplined iteration",
    "Security-first API and protocol design"
  ],
  interests: [
    "Connected vehicles & automotive software",
    "Battery management systems & power electronics",
    "Distributed telemetry pipelines & MQTT/WebSockets",
    "Full-stack development with Java, Spring Boot & TypeScript",
    "Transport simulation and physics modeling in Unity"
  ]
};
