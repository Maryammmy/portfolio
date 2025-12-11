import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  sherifFaranca,
  trent,
  dubballup,
  catalyst,
  freelance,
  miatech,
  bootstrap,
  nextjs,
  reactQuery,
  framerMotion,
} from "../assets";
import type {
  Experience,
  NavLink,
  Project,
  Service,
  Technology,
  Testimonial,
} from "../interfaces/constants";

// Data
export const navLinks: NavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const services: Service[] = [
  { title: "Web Developer", icon: web },
  { title: "React.js Developer", icon: mobile },
  { title: "Next.js Developer", icon: backend },
  { title: "Javascript Developer", icon: creator },
];

export const technologies: Technology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Next.js", icon: nextjs },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "React Query", icon: reactQuery },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Framer Motion", icon: framerMotion },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
];

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company_name: "Catalyst",
    icon: catalyst,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using Next.js React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Miatech.pro",
    icon: miatech,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Building and enhancing web applications using Next.js, React.js, and modern frontend technologies.",
      "Working closely with designers, product managers, and fellow developers to deliver polished, user-focused features.",
      "Creating fully responsive interfaces and ensuring seamless performance across all major browsers.",
      "Contributing to code reviews and offering meaningful, constructive feedback to improve code quality.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Designing and developing custom websites and web apps for various clients using Next.js, React.js, and modern UI frameworks.",
      "Translating client requirements into clean, functional, and visually appealing user interfaces.",
      "Building backend functionality and real-time features using Firebase and Supabase for authentication, databases, and API integrations.",
      "Delivering optimized, SEO-friendly, and fully responsive websites tailored to each client's business needs.",
      "Managing the full project lifecycle—from planning and development to deployment and maintenance.",
      "Communicating directly with clients, providing updates, gathering feedback, and ensuring on-time project delivery.",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const projects: Project[] = [
  {
    name: "Sherif Faranca",
    description:
      "Sherif Faranca is a versatile fitness platform designed to help users achieve their health goals. Users can explore and follow full workout routines, access video demonstrations for every exercise and track their progress.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "shadcn/ui", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: sherifFaranca,
    source_code_link: "https://web.sherif-faranca.com",
  },
  {
    name: "Trent",
    description:
      "Trent is a property rental platform. It allows users to browse listings, view details, and book accommodations easily. Hosts can manage their properties and reservations through a dedicated dashboard.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "react router dom", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: trent,
    source_code_link: "https://www.trent.com.eg",
  },
  {
    name: "Dubballup",
    description:
      "Dubballup is a versatile online platform designed to connect individuals with shared interests and schedule meetings with coaches. Users can find and join events, track their performance, and engage with a community that shares their passions.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "crypto-js", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: dubballup,
    source_code_link: "https://dev.dubballup.com",
  },
];
