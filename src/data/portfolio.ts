export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "leetcode" | "mail";
};

export type SkillGroup = {
  title: string;
  icon: string;
  blurb: string;
  items: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  type: string;
  description: string;
  features: string[];
  tags: string[];
  featured?: boolean;
  repo?: string;
  href?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  details?: string[];
};

export const profile = {
  name: "Muhammed Rabah M",
  handle: "rabah",
  role: "Python Full-Stack Developer",
  eyebrow: "PYTHON FULL-STACK DEVELOPER · KERALA, INDIA",
  headline: "Building reliable backends. Connecting systems. Solving real problems.",
  tagline:
    "Python developer focused on production-grade backend systems. I build REST APIs with Django, Django REST Framework and FastAPI, integrate third-party services, and keep data, background jobs and integrations fast and reliable.",
  heroTech: [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "PostgreSQL",
    "React.js",
  ],
  location: "Kannur, Kerala, India",
  email: "rabahmuhammedm@gmail.com",
  phone: "+91-8606559112",
  resumeUrl: "/resume.pdf",
  availability: "Open to Python & backend engineering roles",
  bio: [
    "I'm a Python developer with hands-on experience building and maintaining production backend systems. I specialize in Django, Django REST Framework and FastAPI — designing REST APIs, modelling data and integrating third-party services.",
    "My day-to-day work includes CRM automation, webhook-driven workflows, asynchronous background processing with Celery and Redis, and analytics dashboards. I also build full-stack features with React.js, and have integrated AI services such as Claude into backend workflows.",
    "I moved into software through an intensive full-stack bootcamp at Brototype, after completing a Bachelor of Commerce at Kannur University. I focus on understanding the problem behind a feature, writing maintainable code, and debugging until the result is genuinely reliable.",
  ],
  focus: [
    "Backend APIs with Django, DRF and FastAPI",
    "Third-party integrations and webhook workflows",
    "Asynchronous and scheduled background processing",
    "Full-stack development with React.js",
  ],
  stats: [
    { value: "1 yr", label: "Professional experience" },
    { value: "Python", label: "Primary specialization" },
    { value: "2", label: "Flagship projects" },
    { value: "5", label: "Third-party integrations" },
  ],
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Rabah-Muhammed", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammed-rabah-m/",
    icon: "linkedin",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Rabahbinshukkur/",
    icon: "leetcode",
  },
  { label: "Email", href: "mailto:rabahmuhammedm@gmail.com", icon: "mail" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    blurb: "Core languages I write",
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    blurb: "Services, APIs, authentication and reliability",
    items: [
      "Django",
      "Django REST Framework (DRF)",
      "FastAPI",
      "Django ORM",
      "JWT Authentication",
      "Celery",
      "Asynchronous Processing",
      "Error Handling",
      "API Testing",
      "Debugging",
      "Python Logging",
    ],
  },
  {
    title: "Databases & Caching",
    icon: "database",
    blurb: "Persisting and serving data",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Query Optimization",
      "Caching Strategies",
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    blurb: "Interfaces on top of the API",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Integrations & AI",
    icon: "plug",
    blurb: "Connecting platforms and services",
    items: [
      "Third-Party API Integrations",
      "Webhooks",
      "GoHighLevel API",
      "JobNimbus",
      "AccuLynx",
      "Claude AI",
      "Django Channels",
      "WebSockets",
      "PayPal",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "cloud",
    blurb: "Shipping and operating applications",
    items: [
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "NGINX",
      "CI/CD",
      "Linux",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Fixngo",
    subtitle: "Home Service Booking Platform",
    type: "Full-stack web application",
    description:
      "A home service booking platform that connects customers with service professionals, covering booking, payments and real-time communication end to end.",
    features: [
      "Service booking and scheduling workflows",
      "JWT-based authentication and protected routes",
      "PayPal payment processing",
      "Real-time chat and live updates with WebSockets and Django Channels",
      "REST APIs built with Django REST Framework",
      "React.js front end with Redux state management and Tailwind CSS",
    ],
    tags: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Django Channels",
      "WebSockets",
      "PayPal",
      "Postman",
    ],
    featured: true,
    repo: "https://github.com/Rabah-Muhammed/fixngo-backend",
  },
  {
    title: "Electro",
    subtitle: "Gadgets E-commerce Platform",
    type: "Django e-commerce web application",
    description:
      "An e-commerce platform for gadgets and electronics, with product browsing, checkout, order tracking and an admin dashboard for managing products and sales.",
    features: [
      "Product catalogue, browsing and purchasing",
      "Order tracking and inventory management",
      "Admin dashboard for managing products and sales",
      "PayPal payment processing",
      "Responsive storefront built with Bootstrap",
    ],
    tags: [
      "Python",
      "Django",
      "PostgreSQL",
      "Django ORM",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PayPal",
      "AWS EC2",
      "NGINX",
    ],
    featured: true,
    repo: "https://github.com/Rabah-Muhammed/electro_ecom",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Junior Backend Developer",
    company: "Authority Entrepreneurs",
    period: "September 2025 – June 2026",
    location: "Remote · Projects for US-based clients",
    summary:
      "Built and maintained Python backend applications — REST APIs, third-party integrations, automation workflows and analytics dashboards — for US-based clients.",
    highlights: [
      "Developed and maintained backend services with Python, Django and Django REST Framework, designing REST APIs for internal tools and external integrations.",
      "Integrated GoHighLevel and other CRM platforms such as JobNimbus and AccuLynx to automate workflows and keep customer and operational data in sync.",
      "Built webhook-driven workflows that process real-time events between internal systems and third-party services.",
      "Added asynchronous background processing with Celery and Redis for scheduled jobs, webhook handling and long-running tasks.",
      "Integrated Claude and other AI services to support chatbot features and workflow automation.",
      "Contributed to metrics and analytics dashboards, and optimized PostgreSQL queries and Django ORM usage to improve performance and data consistency.",
    ],
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "Celery",
      "Redis",
      "PostgreSQL",
      "GoHighLevel API",
      "Webhooks",
      "Claude AI",
      "Docker",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Brototype",
    location: "Calicut, India",
    period: "2024 – 2025",
    description:
      "Completed a 30-week intensive full-stack web development bootcamp.",
    details: [
      "Participated in weekly performance reviews led by experienced software developers.",
      "Developed two full-scale projects covering application development, prototyping, database design, and API documentation.",
      "Helped mentor newcomers by providing technical support and communication guidance.",
    ],
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Kannur University",
    location: "Kerala, India",
    period: "2020 – 2023",
    description:
      "Completed a Bachelor of Commerce degree before transitioning into software development.",
    details: [
      "Built a strong foundation in accounting, business operations and analytical problem solving.",
      "Developed the structured, detail-oriented approach I now bring to designing software systems.",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
