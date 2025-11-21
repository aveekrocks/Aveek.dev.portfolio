import React from 'react';
import { Project, Experience, Skill } from './types';
import { Code, Server, Database, Layout, Figma, GitBranch, Terminal, Cpu } from 'lucide-react';

export const SITE_CONFIG = {
  name: "Aveek Sharma",
  title: "Frontend Developer",
  email: "sharmaaveek75@gmail.com",
  github: "https://github.com/aveekrocks",
  linkedin: "https://www.linkedin.com/in/aveeksharma/",
  bio: "I build web applications with React and modern JavaScript, focusing on clean interfaces and reliable execution."
};

export const SKILLS: Skill[] = [
  { name: "React", level: 95, category: "Frontend", icon: <Code size={20} /> },
  { name: "JavaScript", level: 90, category: "Frontend", icon: <Terminal size={20} /> },
  { name: "Tailwind CSS", level: 95, category: "Frontend", icon: <Layout size={20} /> },
  { name: "Python", level: 80, category: "Backend", icon: <Server size={20} /> },
  { name: "PostgreSQL", level: 75, category: "Backend", icon: <Database size={20} /> },
  { name: "AI/ML Fundamentals", level: 85, category: "Backend", icon: <GitBranch size={20} /> },
  { name: "Prompt Engineering", level: 70, category: "Design", icon: <Figma size={20} /> },
  { name: "Cloud Computing", level: 80, category: "Tools", icon: <Cpu size={20} /> },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Masters in Computer Applications",
    company: "Bengaluru City University",
    period: "2024",
    description: "Completed Master's degree in Computer Applications with focus on advanced programming, software engineering, and emerging technologies."
  },
  {
    id: "2",
    role: "Bachelors in Computer Applications",
    company: "Sikkim Manipal Institute of Technology",
    period: "2022",
    description: "Graduated with Bachelor's degree in Computer Applications, building strong foundation in programming, database management, and web technologies."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "DroopTrip",
    description: "A cyberpunk-inspired travel blog offering unique global adventures through vibrant visuals and creative storytelling.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://aveekrocks.github.io/drooptripextended/index.html",
    github: "https://github.com/aveekrocks/drooptripextended",
    image: "/DroopTrip.png"
  },
  {
    id: "p2",
    title: "Freequency",
    description: "A royalty‑free music library platform designed to help users discover and access high‑quality tracks for creative projects.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://freequency-music-platform.vercel.app/",
    github: "https://github.com/aveekrocks/freequency-music-platform",
    image: "/Freequency.png"
  },
  {
    id: "p3",
    title: "GyaanMap",
    description: "An interactive portal presenting general knowledge and key facts about every Indian state, helping users explore regional information easily.",
    techStack: ["HTML", "CSS", "JavaScript", "JSON"],
    link: "https://gyaanmap1.vercel.app/",
    github: "https://github.com/aveekrocks/GyaanMap",
    image: "/GyaanMap.png"
  },
  {
    id: "p4",
    title: "Trends Visualizer",
    description: "A web app that tracks and displays the latest trends, providing users with real‑time insights through interactive visualizations.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://trendsvisualizer0.vercel.app/",
    github: "https://github.com/aveekrocks/TrendsVisualizer",
    image: "/Trends.png"
  }
];