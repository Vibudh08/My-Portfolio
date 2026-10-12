import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import type {
  AboutCard,
  ContactLink,
  Experience,
  Highlight,
  Project,
  SkillCategory,
} from "@/types/portfolio";

export const profile = {
  name: "Vibudh Rathore",
  role: "Full Stack Developer",
  headline: "Next.js, Node.js, React.js and database-backed product builds.",
  intro:
    "I build SaaS dashboards, commerce automations, and workflow apps with Next.js, React, Node.js, PostgreSQL, MongoDB, and Shopify Liquid.",
  email: "vibudhrathore8@gmail.com",
  phone: "8736977153",
  location: "Noida, India",
  linkedin: "https://linkedin.com/in/vibudh08/",
  github: "https://github.com/Vibudh08",
  resumeUrl: "/resume.pdf",
};

export const highlights: Highlight[] = [
  { label: "Experience", value: "2 years" },
  { label: "Focus", value: "SaaS + E-commerce" },
  { label: "Stack", value: "Next.js + Node.js" },
  { label: "Location", value: "Noida / Remote" },
];

export const aboutCards: AboutCard[] = [
  {
    title: "Full-stack product delivery",
    description:
      "Builds production-focused interfaces and APIs across Next.js, React, Node.js, Express, Prisma, PostgreSQL, and MongoDB.",
    icon: Layers3,
  },
  {
    title: "SaaS workflow systems",
    description:
      "Experienced with Kanban workflows, board/list views, advanced filtering, role-based access control, and team collaboration flows.",
    icon: ShieldCheck,
  },
  {
    title: "Shopify and commerce",
    description:
      "Works with Shopify Liquid, discount automation, metafield updates, ranking logic, eligibility rules, Docker workflows, and cron jobs.",
    icon: ShoppingBag,
  },
  {
    title: "Clean developer workflow",
    description:
      "Uses Git, GitHub, Docker, Postman, Vercel, Render, and component-based architecture for maintainable delivery.",
    icon: Rocket,
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "REST APIs",
      "JWT Auth",
      "RBAC",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Schema Design"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Postman", "Cron Jobs", "Nodemailer"],
  },
  {
    title: "Deployment",
    icon: Globe2,
    items: ["Vercel", "Render", "Docker Workflows", "Responsive Delivery"],
  },
  {
    title: "Shopify",
    icon: PackageCheck,
    items: [
      "Shopify Liquid",
      "Metafields",
      "Discount Apps",
      "Product Variants",
      "Eligibility Logic",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Clickseon",
    role: "Full Stack Developer",
    duration: "Jun 2026 - Present",
    location: "Hybrid",
    bullets: [
      "Improved website performance and PageSpeed scores to 90+ across multiple client websites by optimizing Core Web Vitals, LCP elements, image and media loading, render-blocking resources, JavaScript/CSS execution, and third-party scripts.",
      "Refactored website structure, fixed layout, responsiveness, navigation, and functional issues, and optimized reusable components and UI/UX for better stability and maintainability.",
    ],
  },
  {
    company: "Suntek.ai",
    role: "Full Stack Developer",
    duration: "Oct 2025 - May 2026",
    location: "Remote",
    bullets: [
      "Designed, developed, and maintained scalable full-stack web applications for multiple client projects using Next.js, Node.js, and Shopify Liquid.",
      "Built a Kanban SaaS project management platform with PostgreSQL, board/list views, task workflows, advanced filtering, and role-based access control.",
      "Improved stakeholder visibility and collaboration by implementing project workflows tailored for multiple user roles and operational views.",
      "Developed a Shopify discount management app using Node.js to automate discount syncing and product/variant metafield updates.",
      "Implemented ranking and eligibility logic with Docker workflows and cron jobs for reliable commerce automation.",
    ],
  },
  {
    company: "BTJ Alpha Technology",
    role: "Full Stack Developer",
    duration: "Jul 2024 - Oct 2025",
    location: "Noida",
    bullets: [
      "Developed and deployed web applications including Admirer, Non Brokerage, and the BTJ Alpha Technology company website.",
      "Delivered dynamic, responsive, and performance-focused user experiences using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
      "Built maintainable component-based interfaces with HTML, CSS, JavaScript ES6+, and modern frontend architecture.",
      "Collaborated through Git and GitHub to support clean version control, integration workflows, and scalable project delivery.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Eventora",
    description:
      "A full-stack event booking platform with authentication, payment handling, booking workflows, and role-specific dashboards.",
    impact:
      "Supports real booking operations through Razorpay payments, email notifications, event search, filters, cancellations, seat tracking, and admin management.",
    imageUrl: "/eventora.webp",
    imageAlt: "Eventora event booking platform dashboard screenshot",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Nodemailer",
    ],
    githubUrl: "https://github.com/Vibudh08/eventora",
  },
  {
    title: "Feedback Fusion",
    description:
      "A feedback management and public roadmap platform for collecting, prioritizing, and tracking product feedback.",
    impact:
      "Includes feedback submission, voting, comments, category filtering, public roadmap tracking, and an RBAC admin dashboard for status updates.",
    imageUrl: "/feedback.webp",
    imageAlt: "Feedback Fusion product feedback and roadmap screenshot",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "RBAC",
    ],
    githubUrl: "https://github.com/Vibudh08/feedback-fusion",
    liveUrl: "https://feedback-fusion-app.vercel.app/",
  },
  {
    title: "Jobify",
    description:
      "A MERN job-management application with protected dashboard routes, authentication, job CRUD flows, profile management, admin views, and analytics.",
    impact:
      "Implements a production-style Express API with MongoDB, JWT auth, cookies, validation, secure middleware, Cloudinary uploads, and a Vite React dashboard using React Router loaders/actions.",
    imageUrl: "/jobify.webp",
    imageAlt: "Jobify job management dashboard screenshot",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
      "Recharts",
    ],
    githubUrl: "https://github.com/Vibudh08/Jobify",
  },
  {
    title: "Admirer",
    description:
      "A modern e-commerce frontend with product listing, product detail, cart/checkout flow, user dashboard, wishlist, blog pages, and policy/help pages.",
    impact:
      "Built a large routed React application with private routes, order tracking, responsive shopping flows, payment-ready UI, smooth interactions, and reusable commerce components.",
    imageUrl: "/admirer.webp",
    imageAlt: "Admirer e-commerce storefront screenshot",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Ant Design",
      "Razorpay",
      "React Router",
    ],
    liveUrl: "https://admirer.in/",
  },
  {
    title: "BTJ Alpha Technology",
    description:
      "A React company website showcasing IT and digital marketing services, technology expertise, industry solutions, and a project portfolio.",
    impact:
      "Developed the company website with service navigation, a consultation enquiry form, interactive service tabs, and expandable information sections to help visitors explore offerings and get in touch.",
    imageUrl: "/btj-alpha.webp",
    imageAlt: "BTJ Alpha Technology homepage with digital services and consultation form",
    techStack: ["React", "Company Website", "Interactive UI", "Enquiry Forms"],
    liveUrl: "https://btjalphatechnology.com/",
  },
  {
    title: "The Manatomy",
    description:
      "A Shopify menswear store with featured collections, product options, customer reviews, search, cart, and editorial content.",
    impact:
      "Contributed technical SEO work, storefront enhancements, and improvements to the existing e-commerce website and shopping experience.",
    imageUrl: "/manatomy.webp",
    imageAlt: "The Manatomy Shopify menswear storefront homepage",
    techStack: ["Shopify", "Technical SEO", "E-commerce", "Storefront Enhancements"],
    liveUrl: "https://themanatomy.com/",
  },
];

export const education = {
  degree: "Master of Computer Applications",
  institution: "Galgotias University",
  duration: "2022 - 2024",
  location: "Gr. Noida, India",
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  {
    label: "Location",
    value: profile.location,
    href: "#contact",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vibudh08",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Vibudh08",
    href: profile.github,
    icon: Github,
  },
];

export const resumeHighlights = [
  {
    icon: BriefcaseBusiness,
    text: "Full-stack experience across SaaS, e-commerce, and workflow management applications.",
  },
  {
    icon: BadgeCheck,
    text: "Hands-on with Next.js, React, Node.js, PostgreSQL, MongoDB, Prisma, and Shopify Liquid.",
  },
  {
    icon: TerminalSquare,
    text: "Comfortable building REST APIs, RBAC systems, responsive UIs, Docker workflows, and product dashboards.",
  },
];
