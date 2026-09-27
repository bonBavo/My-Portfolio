import type { Project } from '@/components/ProjectCard';
import {
  Code,
  Cpu,
  Database,
  GitBranch,
  Globe,
  HardDrive,
  Monitor,
  Network,
  Radio,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
  Zap,
} from 'lucide-react';

export type SkillLevel = 'primary' | 'working' | 'exploring';

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

export const skillGroupsNew: SkillCategory[] = [
  {
    title: 'Software Engineering',
    tagline: 'Backend architecture, web platforms & typed systems',
    icon: Server,
    skills: [
      { name: 'Java', level: 'primary' },
      { name: 'Spring Boot', level: 'primary' },
      { name: 'Spring Security', level: 'primary' },
      { name: 'REST APIs', level: 'primary' },
      { name: 'Spring Data JPA', level: 'primary' },
      { name: 'TypeScript', level: 'primary' },
      { name: 'JavaScript', level: 'primary' },
      { name: 'React', level: 'working' },
      { name: 'Next.js', level: 'working' },
    ],
  },
  {
    title: 'Real-Time & Connected Systems',
    tagline: 'Protocols, telemetry pipelines & streaming',
    icon: Network,
    skills: [
      { name: 'WebSockets', level: 'primary' },
      { name: 'STOMP', level: 'primary' },
      { name: 'MQTT', level: 'primary' },
      { name: 'TCP/IP', level: 'working' },
      { name: 'IoT', level: 'working' },
      { name: 'Telemetry', level: 'primary' },
      { name: 'Real-time communication', level: 'primary' },
    ],
  },
  {
    title: 'Data & Infrastructure',
    tagline: 'Storage engines, containers & delivery tooling',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 'primary' },
      { name: 'MySQL', level: 'primary' },
      { name: 'MongoDB', level: 'working' },
      { name: 'Redis', level: 'working' },
      { name: 'Docker', level: 'working' },
      { name: 'Git', level: 'primary' },
      { name: 'GitHub', level: 'primary' },
      { name: 'Linux', level: 'working' },
      { name: 'Maven', level: 'primary' },
      { name: 'Gradle', level: 'working' },
      { name: 'OpenAPI / Swagger', level: 'primary' },
    ],
  },
  {
    title: 'Engineering & Embedded',
    tagline: 'Hardware, CAD, simulation & physical computing',
    icon: Cpu,
    skills: [
      { name: 'C / C++', level: 'working' },
      { name: 'ESP32', level: 'working' },
      { name: 'STM32', level: 'exploring' },
      { name: 'FreeRTOS', level: 'exploring' },
      { name: 'CAD', level: 'working' },
      { name: 'Autodesk Inventor', level: 'working' },
      { name: 'AutoCAD', level: 'working' },
      { name: 'Blender', level: 'working' },
      { name: 'Unity', level: 'exploring' },
      { name: 'Sensors', level: 'working' },
      { name: 'Control Systems', level: 'working' },
      { name: 'Vehicle Systems', level: 'working' },
    ],
  },
];

// Backward compatibility alias for any existing imports
export const skillGroups = skillGroupsNew.map(group => ({
  title: group.title,
  icon: group.icon,
  items: group.skills.map(s => s.name),
}));

export const skills = [
  { name: 'Java / Spring', icon: Server },
  { name: 'MQTT / Telemetry', icon: Radio },
  { name: 'TypeScript / React', icon: Monitor },
  { name: 'PostgreSQL & MySQL', icon: Database },
  { name: 'WebSockets & STOMP', icon: Network },
  { name: 'Embedded & C/C++', icon: Cpu },
  { name: 'CAD & Vehicle Eng', icon: Wrench },
  { name: 'Linux & Docker', icon: Terminal },
];

export const projects: Project[] = [
  {
    id: 'fleet-management-system',
    slug: 'fleet-management-system',
    title: 'Fleet Management System',
    category: 'Connected Fleet Platform',
    status: 'BUILDING',
    statusType: 'building',
    featured: true,
    description: 'A connected fleet-management platform designed around vehicle operations, telemetry, trips, alerts, geofencing, fuel monitoring, notifications and real-time communication.',
    image: {
      src: '/fleet-management.jpg',
      hint: 'vehicle fleet management and real-time monitoring dashboard',
    },
    tags: ['Java', 'Spring Boot', 'MySQL', 'MongoDB', 'MQTT', 'WebSockets', 'JWT'],
    specs: {
      engine: 'Spring Boot 3 REST & WebSocket API',
      transmission: 'MQTT Telemetry Broker + STOMP Messaging',
      ecu: 'Rules engine for geofence breaches, low fuel/battery, theft alerts, overspeeding',
      chassis: 'Operational relational schema (MySQL) + Time-series telemetry (MongoDB)',
    },
    systemFlow: 'VEHICLE → MQTT → SPRING BOOT → DATABASE → WEBSOCKET → DASHBOARD',
    problem: 'Fleet operators struggle with delayed, fragmented data when monitoring commercial vehicle fleets, leading to unaddressed mechanical anomalies, inefficient route utilization, fuel theft, and delayed incident responses.',
    solution: 'Engineered an end-to-end connected telemetry backend that ingests high-throughput MQTT vehicle sensor feeds, validates coordinates and thresholds against geofence & safety rules in real time, persists states across structured databases, and broadcasts live telemetry updates to fleet operator dashboards via WebSockets.',
    architecture: 'Edge IoT devices and onboard vehicle sensors publish payload telemetry via MQTT. The Spring Boot backend ingests the stream, processes alert rules, stores operational data in MySQL and raw time-series logs in MongoDB, and pushes live updates to subscribers over authenticated WebSockets.',
    engineeringDecisions: [
      'Dual-database strategy: Separated high-write time-series sensor telemetry (MongoDB) from transactional fleet records, driver profiles, and billing (MySQL).',
      'Event-driven alert engine: In-memory rule evaluation pipeline checks geofence boundaries and sensor anomalies within sub-50ms latency.',
      'Stateless token authentication with JWT across REST endpoints and secured STOMP message brokers.',
    ],
    challenges: [
      'Managing intermittent vehicle network connectivity by buffering payloads at edge nodes and supporting idempotent batch processing on reconnect.',
      'Balancing high-frequency sensor writes with instant alert dispatching without locking relational tables.',
    ],
    currentState: 'Backend ingestion pipelines, MQTT protocol bridge, rule engine, relational schemas, and WebSocket dispatchers are fully implemented. Next phase: web operations dashboard and mobile driver companion.',
    whatILearned: 'Deepened hands-on understanding of event-driven distributed ingestion, decoupling analytical storage from operational stores, and managing bidirectional real-time state synchronization.',
    features: [
      'Real-time vehicle telemetry ingestion via MQTT',
      'Configurable alert rules for speed, fuel level, low voltage & theft',
      'Geofencing boundary detection & trip logging',
      'Dual MySQL + MongoDB persistence architecture',
      'WebSocket & STOMP live streaming to client dashboards',
      'JWT-authenticated REST API for fleet admin operations',
    ],
    highlights: [
      'Designed around real-time vehicle streams and event-driven alerts',
      'Engineered data separation between operational records and time-series telemetry',
      'Sub-50ms rule evaluation for safety violations and geofencing',
    ],
    githubUrl: 'https://github.com/bonBavo',
  },
  {
    id: 'mut-002',
    slug: 'mut-002',
    title: 'MUT 002',
    category: 'Electric Vehicle Platform',
    status: 'BUILDING',
    statusType: 'building',
    featured: true,
    description: 'An ongoing vehicle engineering project exploring EV architecture, battery systems, powertrain integration, vehicle packaging, structural design, embedded control and battery-management systems.',
    image: {
      src: '/fleet-management.jpg',
      hint: 'MUT 002 Electric vehicle chassis and powertrain CAD blueprint layout',
    },
    tags: ['EV', 'CAD', 'BMS', 'Embedded Systems', 'Vehicle Engineering', 'Electronics'],
    specs: {
      engine: 'Electric Powertrain & High-Torque Motor Integration',
      transmission: 'Direct-drive reduction gear & differential packaging',
      ecu: 'Custom BMS & Microcontroller telemetry unit (ESP32/STM32)',
      chassis: 'Spaceframe structure & optimized suspension geometry in CAD',
    },
    systemFlow: 'BATTERY PACK → BMS SENSING → CONTROLLER → MOTOR DRIVE → TELEMETRY',
    problem: 'Developing an accessible, robust light electric vehicle architecture tailored for modular prototyping requires solving complex packaging constraints, thermal management, cell balancing, and safe power distribution.',
    solution: 'Designing an integrated EV research platform combining CAD structural modeling (Autodesk Inventor), custom battery management logic with individual cell voltage/temperature monitoring, CAN/UART sensor telemetry, and motor controller firmware integration.',
    architecture: 'High-voltage battery module connects through protection contactors to motor inverter; embedded microcontroller continuously samples thermistors, current shunts, and cell voltages, feeding telemetry to the onboard display and remote logger.',
    engineeringDecisions: [
      'Modular pack layout: Grouped Li-ion cells into serviceable modular blocks with passive cell balancing and multi-point temperature sensors.',
      'Chassis structural analysis: Iterated frame tubular geometry using CAD FEA load modeling for torsional rigidity and occupant safety.',
      'Fail-safe BMS firmware: Implemented hardware watchdog timers and multi-level overcurrent/undervoltage shutdown logic.',
    ],
    challenges: [
      'Balancing structural strength against mass constraints while accommodating battery enclosure protection.',
      'Designing reliable noise-immune analog sensing circuits in proximity to high-current pulse-width-modulated motor drives.',
    ],
    currentState: 'Chassis design and CAD packaging models completed. BMS sensing schematic and firmware prototype under active bench testing. Powertrain physical integration in progress.',
    whatILearned: 'Gained comprehensive cross-disciplinary mechatronic experience spanning mechanical CAD packaging, thermal dissipation, high-current electrical safety, and deterministic embedded control.',
    features: [
      'Full vehicle CAD packaging and spaceframe structural design',
      'Custom Battery Management System (BMS) schematic and telemetry',
      'Powertrain selection, reduction ratio modeling & torque curve analysis',
      'Embedded sensor telemetry with real-time state of charge (SoC) estimation',
      'Thermal monitoring across individual battery pack modules',
      'Hardware-level fail-safe disconnect and isolation monitoring',
    ],
    highlights: [
      'Cross-disciplinary engineering blending CAD, power electronics, and embedded code',
      'Custom BMS architecture prioritizing cell safety and state telemetry',
      'Ground-up vehicle packaging designed for modular testing',
    ],
    githubUrl: 'https://github.com/bonBavo',
  },
  {
    id: 'ma3sim',
    slug: 'ma3sim',
    title: 'Ma3sim',
    category: 'Kenyan Transport Simulator',
    status: 'EXPERIMENTAL',
    statusType: 'experimental',
    featured: true,
    description: 'A transport simulation project exploring Kenyan public transport through vehicle operation, passenger systems, routes, SACCO management, vehicle customisation and transport economics.',
    image: {
      src: '/nganya-logo.png',
      hint: 'Ma3sim Kenyan transport simulator visual identity and route system',
    },
    tags: ['Unity', 'C#', 'Blender', 'Simulation', 'Vehicle Systems'],
    specs: {
      engine: 'Unity Engine & C# Systems Architecture',
      transmission: 'Dynamic Route Dispatch & Traffic Loop Logic',
      ecu: 'SACCO operational rules, fare economics & passenger AI',
      chassis: 'Custom 3D matatu vehicle models & Kenyan urban environment assets',
    },
    systemFlow: 'ROUTE SELECT → PASSENGER AI → VEHICLE PHYSICS → FARE ECONOMY → SACCO FLEET',
    problem: 'Public transport systems in Kenya possess vibrant cultural, social, and economic dynamics—ranging from route SACCO management and fare fluctuations to custom vehicle audio and lighting—that standard vehicle simulators completely overlook.',
    solution: 'Building an interactive simulation environment in Unity that faithfully models Kenyan urban transport dynamics: route scheduling, passenger queuing AI, SACCO revenue sharing, vehicle tuning, and realistic vehicle handling tailored to local driving patterns.',
    architecture: 'Modular component-based architecture in C#: Physics controller handles vehicle traction and steering; Passenger Manager handles pathfinding and boarding queues; Economy Engine models trip fares, fuel costs, and SACCO dividends.',
    engineeringDecisions: [
      'Custom wheel collider physics tuning to replicate the distinctive weight distribution and dynamics of customized Kenyan mini-buses.',
      'State-machine driven passenger AI responding to route congestion, time of day, and vehicle audio ambiance.',
      'Asset creation pipeline using Blender to model authentic vehicle bodykits, lighting rigs, and urban environmental props.',
    ],
    challenges: [
      'Simulating realistic multi-agent passenger boarding and alighting loops without causing frame-rate drops on complex route stages.',
      'Fine-tuning vehicle physics to feel responsive yet appropriately weighted under varying passenger load conditions.',
    ],
    currentState: 'Core driving mechanics, route path system, 3D vehicle assets, and base economy loop prototyped. Next phase: SACCO fleet management layer and expanded city routes.',
    whatILearned: 'Practical mastery of Unity physics, state machines, 3D asset integration pipelines, and computational modeling of real-world socio-economic transport systems.',
    features: [
      'Realistic matatu physics with variable passenger mass dynamics',
      'Dynamic route simulation with traffic flow and passenger queuing',
      'Kenyan transport SACCO financial & management simulation',
      'Custom 3D vehicle models, sound systems, and visual customization in Blender',
      'Time-of-day fare fluctuations and route demand spikes',
      'Interactive cockpit and audio-visual ambiance controls',
    ],
    highlights: [
      'Faithful systems-level modeling of Kenyan public transport economics',
      'Custom physics and passenger AI algorithms in C#',
      'Authentic local cultural and architectural 3D environment',
    ],
    githubUrl: 'https://github.com/bonBavo',
  },
  {
    id: 'bonraccoon-studios-webapp',
    slug: 'bonraccoon-studios-webapp',
    title: 'BonRaccoon Studios',
    category: 'Technology & Creative Studio',
    status: 'COMPLETED',
    statusType: 'completed',
    featured: true,
    description: 'An independent studio exploring games, interactive experiences, software and original creative products.',
    image: {
      src: '/bonraccoon-logo.png',
      hint: 'BonRaccoon Studios creative brand identity and platform preview',
    },
    tags: ['TanStack Start', 'TypeScript', 'Spring Boot', 'REST API', 'PostgreSQL', 'JWT'],
    specs: {
      engine: 'TanStack Start SSR frontend + Spring Boot 3 API services',
      transmission: 'RESTful API contracts + WebSocket live notifications',
      ecu: 'Role-based access control, content publishing pipeline & game registry',
      chassis: 'PostgreSQL relational persistence with secured administrative endpoints',
    },
    systemFlow: 'PUBLIC CLIENT → TANSTACK START → SECURE REST API → SPRING BOOT → POSTGRESQL',
    problem: 'Independent studios need a unified, high-performance brand platform that seamlessly presents game titles and creative experiments while offering a robust backend CMS for publishing metadata, media, and release builds.',
    solution: 'Designed and deployed a decoupled studio web platform combining a fast, cinematic TanStack Start frontend with a Spring Boot enterprise backend handling secure role-based administration, content curation, and media metadata management.',
    architecture: 'Clean service-oriented separation: The public web application handles fast SSR rendering and interactive showcases, while the Spring Boot backend isolates business logic, security filters, PostgreSQL persistence, and media asset endpoints.',
    engineeringDecisions: [
      'Full separation between public showcase frontend and administrative backend API.',
      'Implemented JWT-based stateless authentication with granular RBAC permissions for studio staff and contributors.',
      'Type-safe data contracts between client routes and server endpoints using TypeScript interfaces.',
    ],
    challenges: [
      'Balancing rich multimedia presentations with strict performance and asset loading optimization across devices.',
      'Creating an intuitive content publishing workflow that requires zero manual database adjustments.',
    ],
    currentState: 'Production-ready platform. Frontend showcase and administrative backend APIs deployed and operational.',
    whatILearned: 'Architectural advantages of strict frontend/backend decoupling, SSR performance optimization, and developing enterprise-grade REST APIs in Spring Boot.',
    features: [
      'Cinematic studio showcase and interactive game catalog',
      'Decoupled architecture with TanStack Start frontend and Spring Boot backend',
      'Administrative dashboard for publishing game updates and media',
      'Role-based access control (RBAC) with secure JWT authentication',
      'PostgreSQL data model for game metadata, releases, and logs',
      'Optimized responsive layout with seamless dark studio aesthetic',
    ],
    highlights: [
      'Distinct product/brand architecture rather than a standard developer showcase',
      'Complete decoupling between public SSR client and secure Spring Boot services',
      'Production-tested authentication and content management pipeline',
    ],
    githubUrl: 'https://github.com/bonBavo',
  },
  {
    id: 'ecommerce-spring-app',
    slug: 'ecommerce',
    title: 'E-Commerce Platform Backend',
    category: 'Backend / Systems Architecture',
    status: 'COMPLETED',
    statusType: 'completed',
    featured: false,
    description: 'A Spring-based commerce backend focused on secure product management, order handling, transactional consistency and service-oriented API design.',
    image: {
      src: '/ecommerce.jpg',
      hint: 'e-commerce platform backend and product management system',
    },
    tags: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST APIs', 'JWT'],
    specs: {
      engine: 'Spring Boot 3 application core',
      transmission: 'REST endpoints for inventory, orders, cart & user accounts',
      ecu: 'Spring Security authentication, BCrypt hashing & RBAC filters',
      chassis: 'MySQL relational database with JPA / Hibernate transactional integrity',
    },
    systemFlow: 'CLIENT REQUEST → SPRING SECURITY → CONTROLLER → SERVICE LAYER → JPA / MYSQL',
    problem: 'Modern commerce backends demand strict transaction isolation, secure privilege boundaries between customers and inventory admins, and robust error handling during checkout and stock reservations.',
    solution: 'Built a modular commerce API using Java and Spring Boot, establishing clear domain layers, transactional guarantees on checkout flows, and granular endpoint protection.',
    architecture: 'Layered domain design with dedicated controller, service, and repository tiers for Catalog, Cart, Order, and Customer modules backed by MySQL and secured via Spring Security.',
    engineeringDecisions: [
      'Declarative transaction management ensures inventory rollback on payment or checkout failures.',
      'Stateless JWT session handling with dedicated Admin and Customer roles.',
      'Standardized REST error response schemas conforming to RFC 7807.',
    ],
    challenges: [
      'Preventing race conditions during concurrent stock decrements under simulated peak loads.',
      'Structuring clean entity relationships to avoid N+1 query performance bottlenecks.',
    ],
    currentState: 'Core API completed, tested with comprehensive Postman test suites and unit tests.',
    whatILearned: 'Gained in-depth mastery of Spring Boot lifecycle, JPA persistence contexts, database transaction isolation, and secure API architecture.',
    features: [
      'Catalog & inventory management with categorization and search',
      'Secure customer registration, login and profile management with JWT',
      'Shopping cart persistence and checkout transaction workflows',
      'Admin endpoints for inventory adjustments and order fulfillment',
      'Swagger / OpenAPI interactive documentation',
    ],
    highlights: [
      'Emphasis on transaction safety and clean API contracts',
      'Clear separation of domain boundaries across catalog, order, and auth',
      'Production-oriented security configuration with Spring Security',
    ],
    githubUrl: 'https://github.com/bonBavo',
  },
];

export const projectLookup = Object.fromEntries(projects.map((project) => [project.slug, project]));
