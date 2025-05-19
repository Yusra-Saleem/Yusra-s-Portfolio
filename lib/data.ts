import { type Project, type Testimonial, type Skill } from "@/lib/types";
import { FaScroll } from 'react-icons/fa';
import { SiTypescript, SiPython, SiHtml5, SiCss3, SiJavascript, SiGithub, SiGit, SiVercel, SiFigma, SiCanva, SiNextdotjs, SiFramer, SiTailwindcss, SiClerk, SiStreamlit } from 'react-icons/si';

export const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js, featuring product search, filtering, authentication , shipment process, cart management, and secure payment processing.",
    image: "/projects/project-1.webp",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Clerk" , "etc"],
    details: [
      "Implemented secure payment processing with Stripe",
      "Built real-time inventory management system",
      "Integrated automated email notifications",
      "Achieved 99.9% uptime with serverless architecture"
    ],
    liveUrl: "https://hekto-yusrasaleem.vercel.app",
    githubUrl: "https://https://github.com/Yusra-Saleem/Hekto-MarketPlace-Web",
    featured: true
  },
  {
    id: 2,
    title: "Agentia World Website",
    description: "A professional website designed for a global AI-based agency, showcasing services, projects, and core values with an elegant UI.",
    image: "/projects/project-2.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript" , "CSS" , "Vercel"],
    details: [
      "Developed a fully responsive and modern UI using Next.js and Tailwind CSS",
      "Designed service and project sections to reflect AI-based agency offerings",
      "Optimized for performance, SEO, and clean code structure"
    ],
    liveUrl: "https://agentworld.vercel.app",
    githubUrl: "https://github.com/Yusra-Saleem/Agentia_World",
    featured: true
  },
  {
    id: 3,
    title: "Areva Hotel Booking Website",
    description: "A modern hotel booking platform for Areva Hotel, offering an intuitive interface to explore rooms, check availability, and make reservations seamlessly.",
    image: "/projects/project-3.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    details: [
      "Developed a fully responsive and elegant layout with Next.js and Tailwind CSS",
      "Implemented room listing with filters and detailed room pages",
    ],
    liveUrl: "https://areva-hotel.vercel.app",
    githubUrl: "https://github.com/Yusra-Saleem/Areva_Hotel",
    featured: true
  } ,
  {
    id: 4,
     title: "Blog Store",
  description: "A sleek and dynamic blog platform where users can explore, read, and comment blog posts across various categories.",
    image: "/projects/project-4.webp",
   technologies: ["Next.js", "Tailwind CSS", "TypeScript", "CSS", "Framer Motion"],
  details: [
    "Built a fully responsive blog layout with category-based navigation",
    "Enabled Markdown-based content creation and rendering",
    "Added blog detail pages with clean reading experience and SEO optimization",
    "Implemented animations for smooth transitions using Framer Motion"
  ],
    liveUrl: "https://blog-store-website.vercel.app",
    githubUrl: "https://github.com/Yusra-Saleem/BlogStore-website",
    featured: true
  },
  {
    id: 5,
    title: "3legant Landing Page",
    description: "A clean and minimalistic landing page UI for a modern furniture and home decor brand, showcasing elegance and functionality in design.",
    image: "/projects/project-5.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    details: [
    "Designed a pixel-perfect, responsive UI for a luxury home decor brand",
    "Included sections like hero, product showcase, testimonials, and newsletter",
    "Implemented smooth animations and transitions using Framer Motion",
    "Focused on clean aesthetics, modern typography, and grid-based layouts"
  ],
    liveUrl: "https://3legant-website.vercel.app",
    githubUrl: "https://github.com/Yusra-Saleem/3legant",
    featured: true
  }, {
    id: 6,
    title: "Luxe Market",
  description: "A sleek and modern e-commerce UI for a boutique-style online store, built to showcase premium products with elegance.",
    image: "/projects/project-6.webp",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    details: [
      "Crafted a responsive and minimalistic e-commerce layout",
      "Designed product listing, filters, and a featured product section",
      "Included cart interface and product detail views (UI only)",
      "Enhanced visual appeal with transitions and motion effects"
    ],
    liveUrl: "https://luxe-market-website.vercel.app",
    githubUrl: "https://github.com/Yusra-Saleem/LuxeMarket-website",
    featured: true
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amraha Anwar",
    role: "Next.js Dveloper",
    content: "Yusra Saleem is dedicated, hardworking, and always ready to help others. Her web development skills and excellent communication make her the go-to person for taking your business to the next level. Highly recommended!.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Xrws5BSf_R29b_WD5wcWEmesW9zOFfqXVQ&s"
  },
  {
    id: 2,
    name: "Maria Tasleem",
    role: "Frontend Developer",
    content: "Yusra did a fantastic job on the resume builder. The clear structure simplifies adding and organizing information, and the professional templates enhance the design. Her focus on user experience is impressive. she's the best choice for creating your resume.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Xrws5BSf_R29b_WD5wcWEmesW9zOFfqXVQ&s"
  },
  {
    id: 3,
    name: "Harmain Bashir",
    role: "Web Developer",
    content: "Yusra is a skilled coder with a strong programming foundation. Detail-oriented and efficient, she excels at problem-solving and produces clean code. Her passion for coding and dedication to learning make her a valuable asset to any team.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Xrws5BSf_R29b_WD5wcWEmesW9zOFfqXVQ&s"
  },
  {
    id: 4,
    name: "Madiha Khan",
    role: "Frontend Developer",
    content: "Yusra Saleem delivered a polished and highly functional website that perfectly matched our goals. Her ability to turn ideas into fast, responsive designs is truly impressive.I highly recommend her for any web development project.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Xrws5BSf_R29b_WD5wcWEmesW9zOFfqXVQ&s"
  }
];

export const skills: Skill[] = [
  {
    id: 1,
    name: "TypeScript",
    icon: SiTypescript,
    category: "languages",
    details: ["Type-safe development", "Static typing", "Modern JavaScript superset"],
    color: "text-blue-500"
  },
  {
    id: 2,
    name: "Python",
    icon: SiPython,
    category: "languages",
    details: ["Backend development", "Data analysis", "Automation"],
    color: "text-yellow-500"
  },
  {
    id: 3,
    name: "HTML5",
    icon: SiHtml5,
    category: "frontend",
    details: ["Semantic markup", "Web standards", "Accessibility"],
    color: "text-orange-500"
  },
  {
    id: 4,
    name: "CSS3",
    icon: SiCss3,
    category: "frontend",
    details: ["Modern layouts", "Animations", "Responsive design"],
    color: "text-blue-600"
  },
  {
    id: 5,
    name: "JavaScript",
    icon: SiJavascript,
    category: "languages",
    details: ["ES6+", "DOM manipulation", "Async programming"],
    color: "text-yellow-400"
  },
  {
    id: 6,
    name: "GitHub",
    icon: SiGithub,
    category: "tools",
    details: ["Version control", "Collaboration", "Project management"],
    color: "text-gray-200"
  },
  {
    id: 7,
    name: "Git",
    icon: SiGit,
    category: "tools",
    details: ["Version control", "Branching", "Merge management"],
    color: "text-orange-600"
  },
  {
    id: 8,
    name: "Vercel",
    icon: SiVercel,
    category: "deployment",
    details: ["Deployment", "Serverless", "Edge functions"],
    color: "text-gray-800 dark:text-gray-200"
  },
  {
    id: 9,
    name: "Figma",
    icon: SiFigma,
    category: "design",
    details: ["UI/UX design", "Prototyping", "Collaboration"],
    color: "text-purple-500"
  },
  {
    id: 10,
    name: "Canva",
    icon: SiCanva,
    category: "design",
    details: ["Graphic design", "Visual content", "Templates"],
    color: "text-blue-400"
  },
  {
    id: 11,
    name: "Next.js",
    icon: SiNextdotjs,
    category: "frontend",
    details: ["React framework", "SSR/SSG", "API routes"],
    color: "text-gray-800 dark:text-gray-200"
  },
  {
    id: 12,
    name: "AOS",
    icon: FaScroll,
    category: "frontend",
    details: ["Scroll animations", "Smooth transitions", "Easy integration"],
    color: "text-red-500"
  },
  {
    id: 13,
    name: "Streamlit",
    icon: SiStreamlit,
    category: "frontend",
    details: ["Data apps", "Python UI", "Quick prototyping"],
    color: "text-red-600"
  },
  {
    id: 14,
    name: "Framer Motion",
    icon: SiFramer,
    category: "frontend",
    details: ["Animations", "Gestures", "Transitions"],
    color: "text-purple-600"
  },
  {
    id: 15,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "frontend",
    details: ["Utility-first CSS", "Responsive design", "Custom styling"],
    color: "text-cyan-400"
  },
  {
    id: 16,
    name: "Clerk",
    icon: SiClerk,
    category: "authentication",
    details: ["User authentication", "Identity management", "Security"],
    color: "text-purple-500"
  }
];