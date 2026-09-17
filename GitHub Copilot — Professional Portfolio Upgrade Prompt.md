# Professional Portfolio Website Upgrade — Engineering Brief

You are working on my existing personal portfolio website.

Your task is to **upgrade the existing portfolio into a professional-grade developer/engineering portfolio suitable for real job applications, recruiters, technical hiring managers, freelance opportunities, and professional networking.**

Do **not** treat this as a simple visual redesign.

Treat it as a **production-quality portfolio engineering project**.

---

# 1. FIRST: AUDIT THE EXISTING PROJECT

Before changing anything:

1. Inspect the entire repository.
2. Identify the existing:
   - Framework
   - React/Next.js version
   - TypeScript configuration
   - Styling system
   - Component architecture
   - Routing
   - API integrations
   - Database usage, if any
   - Authentication, if any
   - Image/media handling
   - SEO implementation
   - Metadata
   - Animations
   - Responsive behavior
   - Accessibility
   - Performance
   - Existing pages
   - Existing reusable components
   - Existing assets
   - Existing content
3. Read the existing README and configuration files.
4. Determine what is already working before modifying it.
5. Do not unnecessarily replace the existing architecture.
6. Reuse good existing components and code.
7. Refactor only where there is a clear engineering benefit.

Create a short internal implementation plan before making major changes.

Do not ask me to manually explain code that you can inspect yourself.

---

# 2. PRIMARY OBJECTIVE

Transform the website into a portfolio that communicates:

> "This is a serious software developer and mechatronics engineering student who can design, build, document, and ship real systems."

The website should demonstrate both:

### Software Engineering

- Java
- Spring Boot
- REST APIs
- PostgreSQL
- MySQL
- MongoDB
- JWT authentication
- Spring Security
- WebSockets
- MQTT
- Firebase
- Kafka
- TypeScript
- JavaScript
- React
- Next.js
- Prisma
- Git/GitHub
- API design
- Database design
- System architecture

### Engineering / Mechatronics

- Embedded systems
- ESP32
- STM32
- Instrumentation
- Control systems
- Electronics
- Battery management systems
- EV systems
- CAD
- Autodesk Inventor
- SolidWorks
- FreeCAD
- AutoCAD
- Manufacturing
- CNC
- Mechanical design

The portfolio must make these areas feel connected rather than looking like two unrelated careers.

---

# 3. PERSONAL BRAND

The portfolio should represent me professionally.

Use the following brand context where appropriate:

## Main identity

**Andrew Braven**

Software Developer | Mechatronics Engineering Student

My professional direction combines:

**Software Engineering + Mechatronics + Embedded Systems + Product Development**

I am interested in building real-world technology rather than only tutorial projects.

---

# 4. BRAND ECOSYSTEM

The portfolio should be capable of referencing my broader projects and companies naturally.

### Braven Inc

Braven Inc is the main company/business identity.

### BonRaccoon Studios

BonRaccoon Studios is a creative technology/game studio under Braven Inc.

Its identity includes:

- Game development
- Interactive experiences
- Animation
- Film
- Music
- Kenyan creative culture
- Technology

### ma3sim

My major game-development project.

It is a Kenyan matatu/nganya simulation concept focused on authentic local transportation culture and simulation gameplay.

Do not portray it as a finished AAA game.

Present it honestly as an evolving game/product project.

---

# 5. PROFESSIONAL POSITIONING

Do NOT make the portfolio sound like a generic junior developer template.

Avoid phrases such as:

- "Passionate developer"
- "Coding enthusiast"
- "I love turning coffee into code"
- "Ninja developer"
- "Tech wizard"
- "Full-stack guru"
- Generic motivational statements
- Artificial corporate buzzwords

The writing should sound like a real engineer.

Use specific evidence instead.

For example:

Instead of:

> "I build amazing applications."

Prefer:

> "I build backend systems, APIs, and engineering software with Java, Spring Boot, databases, and embedded technologies."

The website should emphasize:

**What I build + how I build it + why it matters.**

---

# 6. HOMEPAGE

Redesign the homepage around a strong professional hierarchy.

Recommended structure:

## Hero

Clearly communicate:

**Andrew Braven**

**Software Developer & Mechatronics Engineering Student**

Supporting statement:

> I build software, embedded systems, and engineering products that connect the digital and physical world.

Include primary CTAs:

- View Projects
- View GitHub
- Download CV
- Contact Me

Do not overcrowd the hero.

The hero should immediately tell a recruiter:

1. Who I am
2. What I do
3. What technologies I use
4. Where they can see evidence

---

# 7. ABOUT SECTION

Create a concise but substantive professional introduction.

Mention my combination of:

- Mechatronics Engineering
- Full-stack software development
- Backend engineering
- Embedded systems
- Product development

Mention my software-development training/background where appropriate, including my MODCOM Full Stack Software Development experience.

Do not exaggerate qualifications.

Do not invent:

- Jobs
- Companies
- Certifications
- Degrees
- Awards
- Clients
- Revenue
- Users
- Production deployments

Everything must remain factually defensible.

---

# 8. PROJECTS SHOULD BE THE CORE OF THE WEBSITE

The Projects section should be one of the strongest parts of the portfolio.

Do NOT simply display cards containing:

> Project name + screenshot + GitHub button

Instead, each major project should communicate engineering depth.

Each project should include:

- Project name
- Short description
- Problem
- Solution
- Technologies
- Architecture
- Important technical decisions
- Key features
- Current status
- GitHub repository
- Live demo when available
- Screenshots/media where available

Use project categories:

- Software
- Backend
- Full Stack
- Embedded
- Engineering
- Game Development

Allow visitors to filter projects if appropriate.

---

# 9. FEATURE THESE PROJECTS

Use my actual projects where they exist in the repository/content.

## A. Fleet Management System

This should be presented as a serious backend/system engineering project.

Technologies/features include:

- Java
- Spring Boot
- MySQL
- MongoDB
- MQTT
- WebSockets
- STOMP
- Firebase Cloud Messaging
- JWT/security
- Fleet telemetry
- Alert rules

The system includes alert scenarios such as:

- Overspeed
- Low fuel
- Low battery
- Fuel theft
- Geofence exit

Explain the architecture visually if appropriate.

Potential architecture:

```text
Vehicles / Sensors
       |
       v
     MQTT
       |
       v
Spring Boot Backend
       |
 ┌─────┼──────────┐
 v     v          v
MySQL MongoDB   Rules Engine
       |
       v
 WebSocket / FCM
       |
       v
   Dashboard
```

Do not claim real-world fleet deployment unless the repository proves it.

---

# 10. BONRACCOON STUDIO API

Show the BonRaccoon Studio API as a substantial backend project.

Technologies:

- Java 25
- Spring Boot
- Spring Web MVC
- Spring Data JPA
- Spring Security
- PostgreSQL
- Flyway
- JWT
- OpenAPI
- Cloudinary
- MapStruct
- Maven

Features include:

- Games API
- News API
- Careers
- Press assets
- Contact submissions
- Subscribers
- Newsletter campaigns
- Site settings
- Search
- Sitemap
- Admin CMS API
- Role-based access control

Roles:

- EDITOR
- ADMIN
- SUPER_ADMIN

Highlight that this is an API/CMS foundation rather than pretending it is already a complete production SaaS platform.

---

# 11. E-COMMERCE SPRING APPLICATION

Include my Spring Java ecommerce application.

Emphasize:

- Java
- Spring Boot
- REST APIs
- Database architecture
- Authentication/security
- Product management
- Orders
- Payments where implemented
- API design
- Backend architecture

Only describe features that actually exist in the repository.

If the repository contains incomplete features, clearly mark them as:

- In development
- Planned
- Prototype

---

# 12. ma3sim

Create a visually distinctive project entry for:

**ma3sim**

Description:

A Kenyan transportation simulation project inspired by matatu/nganya culture and real-world public transport.

Concept areas include:

- Kenyan routes
- Matatus/nganyas
- Coaches
- Makanga systems
- SACCO mechanics
- M-Pesa-inspired economy
- NTSA-inspired compliance systems
- Traffic
- Boda bodas
- Tuk-tuks
- Authentic vehicle customization
- Kenyan environments
- Audio and visual culture

Technology direction may include Unity and potentially Unreal Engine experimentation.

Do not present planned features as completed features.

Show development status clearly.

---

# 13. ENGINEERING PROJECTS

Create a dedicated engineering section.

Potential areas:

### EV / BMS

Show my work around:

- 72V
- 83Ah battery system
- Lithium-ion battery architecture
- BMS
- BLDC motor systems
- EV power systems
- Solar charging considerations
- STM32 / ESP32
- ENNOID-BMS research
- System modelling

### CAD / Mechanical Engineering

Show relevant work involving:

- Autodesk Inventor
- SolidWorks
- FreeCAD
- AutoCAD
- Mechanical design
- Manufacturing
- CNC
- Engineering drawings

Do not fabricate project results.

If there are CAD files or images in the repository, present them visually.

---

# 14. SKILLS SECTION

Do not make a giant wall of technology logos.

Organize skills into meaningful categories.

## Software Engineering

Java  
Spring Boot  
Spring Security  
Spring Data JPA  
REST APIs  
PostgreSQL  
MySQL  
MongoDB  
JWT  
WebSockets  
MQTT  
Kafka  
Firebase

## Frontend

TypeScript  
JavaScript  
React  
Next.js  
HTML  
CSS  
Tailwind CSS if actually used

## Development Tools

Git  
GitHub  
Maven  
Docker  
Postman  
IntelliJ IDEA  
VS Code  
Neovim

## Embedded / Electronics

C  
C++  
ESP32  
STM32  
PlatformIO  
Sensors  
Embedded systems  
Communication protocols

## Engineering

Autodesk Inventor  
SolidWorks  
FreeCAD  
AutoCAD  
Multisim  
CAD  
Manufacturing  
Instrumentation  
Control systems

Only include technologies that I have actually used or am actively working with.

---

# 15. EXPERIENCE / EDUCATION

Create a professional timeline.

Include my:

**Mechatronics Engineering education at Murang'a University of Technology**

And relevant software development training:

**MODCOM Full Stack Software Development Program**

Do not fabricate employment experience.

If formal employment experience is limited, emphasize:

- Projects
- Engineering work
- Software development
- Independent product development
- Technical learning
- Open-source/GitHub activity

---

# 16. GITHUB INTEGRATION

The portfolio should make GitHub an important part of the experience.

Add:

- GitHub profile link
- Repository links
- Project repository links
- Technology information
- GitHub activity only if it can be implemented reliably

Do not build a fragile GitHub API integration just for a contribution graph.

Prefer stable links unless an API integration provides real value.

My GitHub identity should be represented consistently as:

**bonBavo**

---

# 17. RESUME / CV

Add a clear:

**Download CV**

CTA.

The CV should be treated as a professional artifact.

Do not generate fake information.

If a CV file already exists in the repository, inspect and link to the correct version.

---

# 18. CONTACT

Create a professional contact section.

Include appropriate channels such as:

- Email
- GitHub
- LinkedIn if available
- Portfolio
- Other professional profiles if actually configured

Do not expose unnecessary personal information.

The contact form should include:

- Name
- Email
- Subject
- Message

Include proper validation and user feedback.

If there is a backend/API available, integrate with it rather than creating a fake form.

---

# 19. DESIGN DIRECTION

Use a modern engineering/product aesthetic.

The website should feel:

- Professional
- Technical
- Modern
- Clean
- Confident
- Minimal
- High-quality
- Slightly futuristic

Avoid:

- Generic developer portfolio templates
- Excessive glassmorphism
- Excessive gradients
- Excessive animations
- Giant text everywhere
- Random 3D objects
- Excessive neon
- Template-looking layouts
- Skill percentage bars

---

# 20. BRAND COLORS

Where appropriate, the broader Braven / BonRaccoon visual identity can use:

```text
Primary:        #007BFF
Secondary:      #A4FF00
Background:     #0A0F2C
Surface:        #121A3A
Text:           #F5F7FA
Text Secondary: #9AA4B2
Border:         #2A3A6A
Success:        #66FF00
Error:          #FF3B30
Warning:        #FFCC00
```

Use these as a design system rather than applying every color everywhere.

Typography should prioritize a professional modern sans-serif. Poppins may be used where it fits the existing brand.

---

# 21. ANIMATIONS

Animations should communicate quality rather than distract.

Use subtle:

- Page transitions
- Scroll reveals
- Hover states
- Card interactions
- Button transitions
- Image transitions

Avoid:

- Constant motion
- Excessive parallax
- Long loading animations
- Animations that hurt accessibility
- Animations that delay content

Respect:

```css
prefers-reduced-motion
```

---

# 22. RESPONSIVE DESIGN

The portfolio must work professionally on:

- Desktop
- Laptop
- Tablet
- Mobile

Do not simply shrink the desktop layout.

Design mobile layouts intentionally.

Test:

- Navigation
- Hero
- Project cards
- Project pages
- Images
- Forms
- Typography
- Buttons
- Footer
- Modals
- Animations

---

# 23. ACCESSIBILITY

Implement professional accessibility standards.

Pay attention to:

- Semantic HTML
- Keyboard navigation
- Focus states
- ARIA only where necessary
- Image alt text
- Color contrast
- Form labels
- Error messages
- Reduced motion
- Screen-reader usability

Do not sacrifice accessibility for visual effects.

---

# 24. SEO

Implement proper SEO.

Include:

- Page titles
- Meta descriptions
- Open Graph metadata
- Twitter/X metadata where appropriate
- Canonical URLs
- Sitemap
- Robots configuration
- Structured metadata where appropriate

Use my real information.

Do not generate fake company information or fake statistics.

---

# 25. PERFORMANCE

Treat performance as a feature.

Optimize:

- Images
- Fonts
- JavaScript
- CSS
- Client-side rendering
- API calls
- Animations
- Lazy loading

Avoid unnecessary dependencies.

Use framework-native optimizations where possible.

The site should feel fast on average mobile connections.

---

# 26. SECURITY

Do not expose:

- API keys
- Secrets
- Database credentials
- JWT secrets
- Private environment variables

Check:

```text
.env
.env.local
API keys
Public environment variables
Git history
```

Ensure only intentionally public environment variables are exposed to the browser.

---

# 27. ARCHITECTURE

Keep the code maintainable.

Prefer:

```text
app/
components/
features/
lib/
hooks/
data/
types/
public/
styles/
```

or the equivalent structure appropriate for the existing framework.

Use reusable components.

Avoid massive components containing:

- UI
- data fetching
- business logic
- configuration
- animations
- content

all in one file.

---

# 28. CONTENT ARCHITECTURE

Separate content from presentation wherever practical.

Project information should ideally have a structured model such as:

```ts
type Project = {
  title: string
  slug: string
  description: string
  category: string[]
  technologies: string[]
  status: string
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  image?: string
  features?: string[]
}
```

Adapt this to the existing project architecture rather than blindly introducing it.

---

# 29. PROJECT DETAIL PAGES

Major projects should have dedicated pages.

For example:

```text
/projects/fleet-management-system
/projects/bonraccoon-studio-api
/projects/ecommerce
/projects/ma3sim
```

A project page should feel like a technical case study.

Recommended structure:

```text
Project Hero
    ↓
Overview
    ↓
Problem
    ↓
Solution
    ↓
Architecture
    ↓
Technology
    ↓
Features
    ↓
Technical Challenges
    ↓
Screenshots / Media
    ↓
Current Status
    ↓
GitHub / Demo
    ↓
Related Projects
```

---

# 30. ENGINEERING CASE STUDIES

Where useful, allow projects to explain engineering decisions.

Examples:

### Fleet system

Why:

- MySQL + MongoDB
- MQTT
- WebSockets
- FCM
- Rules engine

### BonRaccoon API

Why:

- PostgreSQL
- Flyway
- JWT
- Cloudinary
- MapStruct
- modular domain architecture

### ma3sim

Why:

- Unity prototype
- simulation-oriented architecture
- authentic Kenyan transportation systems

The purpose is to show that I understand engineering decisions, not just syntax.

---

# 31. DO NOT LIE

This is extremely important.

Never invent:

- Clients
- Employers
- Users
- Revenue
- Production systems
- Awards
- Certifications
- Programming languages I have never used
- Features that are not implemented
- Performance benchmarks
- Project success metrics

If something is planned, label it:

**Planned**

If it is being developed:

**In Development**

If it is working:

**Implemented**

If it is experimental:

**Prototype**

---

# 32. REAL-WORLD QUALITY CHECK

Before considering the upgrade complete, test:

### Build

```bash
npm run build
```

or the equivalent command for the existing framework.

### Lint

Run the project's configured lint command.

### Tests

Run the project's test suite.

### Production build

Verify that the production build succeeds.

### Links

Check:

- Navigation
- GitHub links
- CV
- Project links
- Contact
- Social links

### Responsive

Check desktop and mobile layouts.

### Accessibility

Check keyboard navigation and obvious accessibility issues.

### SEO

Verify metadata and sitemap.

---

# 33. GITHUB README

After upgrading the portfolio, update its README if necessary.

The README should explain:

- What the portfolio is
- Technologies
- Architecture
- Features
- Local development
- Environment variables
- Deployment
- Project structure

Do not write an unnecessarily enormous README.

---

# 34. IMPLEMENTATION STRATEGY

Work in stages.

## Phase 1 — Audit

Inspect the repository and identify:

- Existing architecture
- Problems
- Missing functionality
- Design weaknesses
- Technical debt

## Phase 2 — Foundation

Improve:

- Layout
- Design system
- Typography
- Navigation
- Responsive architecture
- Metadata

## Phase 3 — Content

Improve:

- Hero
- About
- Skills
- Projects
- Education
- Contact

## Phase 4 — Project Case Studies

Create detailed project pages for the strongest projects.

## Phase 5 — Polish

Improve:

- Animations
- Accessibility
- SEO
- Performance
- Error states
- Loading states

## Phase 6 — Validation

Run:

- Build
- Tests
- Lint
- Type checking
- Production checks

Fix all issues introduced by the upgrade.

---

# 35. IMPORTANT AGENT RULES

Follow these rules throughout the implementation:

1. **Inspect before modifying.**
2. Do not delete working functionality without a reason.
3. Do not rewrite the entire application unnecessarily.
4. Reuse existing components where appropriate.
5. Keep dependencies minimal.
6. Do not fabricate portfolio content.
7. Do not fabricate achievements.
8. Do not expose secrets.
9. Do not introduce TypeScript errors.
10. Do not leave broken links.
11. Do not leave placeholder text such as "Lorem ipsum".
12. Do not leave unfinished TODOs unless they represent a documented future feature.
13. Keep the site responsive.
14. Keep accessibility in mind.
15. Optimize for performance.
16. Use semantic HTML.
17. Keep the visual design consistent.
18. Prefer maintainable code over clever code.
19. Run validation after significant changes.
20. Before finishing, review the entire website as if you were a recruiter visiting it for the first time.

---

# 36. FINAL SUCCESS CRITERIA

The finished portfolio should feel like a real professional developer's website rather than a student template.

A recruiter should be able to understand within approximately 10 seconds:

**Who I am**

**What I build**

**What technologies I use**

**What my strongest projects are**

**How to contact me**

Within a few minutes, they should also be able to inspect the technical depth of my work through project case studies and GitHub repositories.

The final product should communicate:

> Software engineering capability  
> +  
> Engineering thinking  
> +  
> Real projects  
> +  
> Professional presentation

Do not optimize the portfolio merely to look impressive.

Optimize it to make the **actual engineering work easy to understand and evaluate.**

Begin by auditing the existing repository before making changes.